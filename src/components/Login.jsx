import React , {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Login.css'
import firebase from './Firebase'
class Login extends Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {
    email:'',
    password:'',
    err:'',
    color:''
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state)
    const email = this.state.email;
    const password = this.state.password;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password); //it is return promise

    promise.then((user)=>{
      // var logout = document.getElementById('logout');
      // logout.classList.remove('hide')
      if (user) {
        this.setState({
          err : "Welcome "+user.user.email,
          color:"green",
          email:'',
          password:''
        })
          console.log('user has signed in or up', user);
          this.props.history.push("/dashbord");
        } else {
          console.log('user signed out or still need to sign in', user);
          this.props.history.push("/");
        }

      // console.log(user.user.email)

    })

    promise.catch(e => {
      var err = e.message;
      console.log(err);
      this.setState({ err: err,color:"red" });
    });
  }

  render(){
    return (
      <div id="login" >
      <form onSubmit={this.handleSubmit} class="form-signin" >
          <div class="text-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 612 612" focusable="false" role="img">
            <title>Bootstrap</title>
            <path fill="#563d7c" d="M612 510c0 56.1-45.9 102-102 102H102C45.9 612 0 566.1 0 510V102C0 45.9 45.9 0 102 0h408c56.1 0 102 45.9 102 102v408z"/>
            <path fill="#fff" d="M166.3 133h173.5c32 0 57.7 7.3 77 22s29 36.8 29 66.5c0 18-4.4 33.4-13.2 46.2-8.8 12.8-21.4 22.8-37.8 29.8v1c22 4.7 38.7 15.1 50 31.2 11.3 16.2 17 36.4 17 60.8 0 14-2.5 27.1-7.5 39.2-5 12.2-12.8 22.7-23.5 31.5s-24.3 15.8-41 21-36.5 7.8-59.5 7.8h-164V133zm62.5 149.5h102c15 0 27.5-4.2 37.5-12.8s15-20.8 15-36.8c0-18-4.5-30.7-13.5-38s-22-11-39-11h-102v98.6zm0 156.5h110.5c19 0 33.8-4.9 44.2-14.8 10.5-9.8 15.8-23.8 15.8-41.8 0-17.7-5.2-31.2-15.8-40.8s-25.2-14.2-44.2-   14.2H228.8V439z"/>
            </svg>

          </div>
          <h4 style={{color:this.state.color}} > {this.state.err} </h4>

          <div class="form-label-group">
            <input type="email" onChange={this.handleChange} id="email" class="form-control"  required autofocus/>
            <label htmlFor="email">Email address</label>
          </div>

          <div class="form-label-group">
            <input type="password" onChange={this.handleChange} id="password" class="form-control"  required/>
            <label htmlFor="password">Password</label>
          </div>

          <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          <p class="mt-5 mb-3 text-muted text-center">&copy; 2020-2021</p>
    </form>

      </div>
    );
  }
};

export default Login;
