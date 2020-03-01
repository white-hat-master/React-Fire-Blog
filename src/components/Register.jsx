import React,{ Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Register.css'
import firebase from './Firebase'

class Register extends Component {

  state = {
    email:'',
    password:'',
    name:'',
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
    console.log(this.state)
    const email = this.state.email;
    const password = this.state.password;
    const name = this.state.name;
    const auth = firebase.auth();
    // console.log(email)
    // console.log(password)
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.then(users => {
      var err = "Registered successfully by " + email;
      var userId = firebase.auth().currentUser.uid;
      // console.log(userId);

      firebase
        .database()
        .ref("users/" + userId)
        .set({
          email: email,
          name:name

        });
      this.setState({
        email:'',
        password:'',
        name:'',
        err: err,
        color:"green" });
    });
    promise.catch(e => {
      var err = e.message;
      // console.log(err);
      this.setState({
        err: err,
        color:"red" });
    });

  }


render(){
  const { name,email,password,err } = this.state
  return (
    <div className="container-flax" id="container">
        <div className="jumbotron jumbotron-flax">

            <div className="container">
                <h2 className="display-5">Register</h2>
            </div>
            <h4 style={{color:this.state.color}} > {err} </h4>
        </div>
      <div className="container">
      <form id = "register-form" onSubmit={this.handleSubmit} >
      <div className="form-group row">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input type="text" id="name" onChange={this.handleChange} value={name} className="form-control"  placeholder="eg. John Max" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input type="email" id="email" onChange={this.handleChange} value={email} className="form-control"  placeholder="eg. youremail@user.com" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="password" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input type="password" id="password" onChange={this.handleChange} value={password} maxLength="10"  className="form-control"  />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" value="submit" id="btn" className="btn btn-primary">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
</div>
  );
};
};
export default Register;
