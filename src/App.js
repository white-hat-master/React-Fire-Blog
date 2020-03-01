import React, {Component} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth0Lock from 'auth0-lock'

import NavBar from "./components/NavBar";
import HomePosts from "./components/HomePosts";
import Posts from "./components/Posts";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
// import Register from "./components/Register";
// import Login from "./components/Login";
import Dashbord from "./admin/Dashbord";
import NoMatch from "./NoMatch";

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      accessToken: '',
      profile: {}
    };
  }

    static defaultProps = {
      clientID : "NhJHJ1frxprS97tE9v0Ao7rYaSti10cZ",
      domain : "dev-pympo8e8.auth0.com"
    }

    componentWillMount(){
    this.lock = new Auth0Lock(this.props.clientID, this.props.domain);

    this.lock.on('authenticated', (authResult) => {
      // console.log(authResult);

      this.lock.getProfile(authResult.accessToken, (error, profile) => {
        if(error){
          console.log(error);
          return;
        }
        // console.log(profile);

        this.setProfile(authResult.accessToken, profile);

      });

    });
    this.getProfile();
  }

  setProfile(accessToken, profile){
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('profile', JSON.stringify(profile));

    this.setState({
      accessToken: localStorage.getItem('accessToken'),
      profile: JSON.parse(localStorage.getItem('profile'))
    });
  }

  getProfile(){
    if(localStorage.getItem('accessToken') != null){
      this.setState({
        accessToken: localStorage.getItem('accessToken'),
        profile: JSON.parse(localStorage.getItem('profile'))
      }, () => {
        console.log(this.state);
      });
    }
  }


  showLock(){
    this.lock.show();
  }


  logout(){
    this.setState({
      accessToken: '',
      profile: ''
    }, () => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('profile');

    });
  }

  render() {
    let compo;
    if(this.state.accessToken){
     compo = <Route path="/dashbord"><Dashbord /></Route>;
   }


  return (
    <Router>
      <React.Fragment>
        <NavBar
        lock={this.lock}
        accessToken={this.state.accessToken}
        onLogout={this.logout.bind(this)}
        onLogin={this.showLock.bind(this)}
        />
        <Switch>
          <Route exact path="/">
            <HomePosts/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/posts/:slug" component={Posts}/>
          <Route path="/contact">
            <Contact />
          </Route>
          {compo}



          <Route path="*">
            <NoMatch />
          </Route>


        </Switch>
        <Footer/>
      </React.Fragment>
    </Router>

  );
}
}

export default App;
