import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Contact.css'
import firebase from './Firebase'
// var uuid = require('uuid')

 class Contact extends Component {
   constructor(props) {
     super(props);
     this.ref = firebase.firestore().collection('contacts');
      this.state = {
        name:'',
        email:'',
        phone:'',
        commite:'',
        msg:''
      };
   }

    handleChange = (e) => {
      this.setState({
        [e.target.id] : e.target.value
      })
    }
    handleSubmit = (e) => {
      e.preventDefault();
      // console.log(this.state)
      const { name, email, phone, commite } = this.state;

     this.ref.add({
       name,
       email,
       phone,
       commite
     }).then((docRef) => {
       this.setState({
         name: '',
         email: '',
         phone: '',
         commite:'',
         msg:'Message send successfuly..'
       });
     })
     .catch((error) => {
       console.error("Error adding document: ", error);
     });
    }


 render(){

  return (
    <div className="container-flax" id="contact">
        <div className="jumbotron jumbotron-flax">
            <div className="container">
                <h2 className="display-5">Contact Us</h2>
            </div>
            <h3 style={{color:"green"}} > {this.state.msg} </h3>
        </div>
      <div className="container">
      <form onSubmit={this.handleSubmit} >
      <div className="form-group row">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input type="text" name="name" onChange={this.handleChange} id="name" value={this.state.name} className="form-control"  placeholder="eg. John Max" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input type="email" name="email" onChange={this.handleChange} value={this.state.email} id="email" className="form-control"  placeholder="eg. youremail@user.com" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="phone" className="col-sm-2 col-form-label">
            Phone
          </label>
          <div className="col-sm-10">
            <input type="text" onChange={this.handleChange} id="phone" value={this.state.phone} name="phone" maxLength="10"   placeholder="eg. 0987654321"  className="form-control"  />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="commite" className="col-sm-2 col-form-label">
            Commite
          </label>
          <div className="col-sm-10">
          <textarea className="form-control" onChange={this.handleChange} value={this.state.commite} name="commite"  id="commite"  placeholder="Type here.." rows="3"></textarea>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" id="btn" value="submit" className="btn btn-primary">
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
export default Contact;
