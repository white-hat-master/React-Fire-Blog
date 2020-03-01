import React , { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Nav.css';
import { Link } from 'react-router-dom'

class NavBar extends Component {
    
    onLogin(){
      this.props.onLogin();
    }

    onLogout(){
      this.props.onLogout();
    }

    render(){
      let page,action,heading,go;
    if(this.props.accessToken){
      page = "LogOut";
      heading = "Go to Dashboard"
      go = "/dashbord"
      action = this.onLogout.bind(this);

    } else{
      page = "LogIn"
      heading = "React Blog"
      go = '/'
      action = this.onLogin.bind(this);
    }

    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container" id="nav">
            <Link class="navbar-brand" to={go}>{heading}</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">

            <li className="nav-item active" id="navli" >
              <Link className="nav-link" to="/">
                Home
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item" id="navli" >
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item" id="navli" >
              <Link className="nav-link" to="/posts">
                Posts
              </Link>
            </li>
            <li className="nav-item" id="navli" >
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

              <li className="nav-item" >
              <Link className="nav-link">
              <button onClick={action} type="button" id="btn" class="btn btn-outline-success">{page}</button>
              </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
}
export default NavBar;
