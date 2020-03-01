import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from '../components/Firebase'
// var uuid = require('uuid')


 class CreatePost extends Component {

   constructor(props) {
     super(props);
     this.ref = firebase.firestore().collection('blogData');
     this.state = {
       category:'',
       title:'',
       author:'',
       content:'',
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
     const { category,title,author,content } = this.state;
     this.ref.add({
       category,
       title,
       author,
       content
     }).then((docRef) => {
       this.setState({
         category: '',
         title: '',
         author:'',
         content: '',
         msg:'New Post created successfuly..'
       });
       this.props.history.push("/dashbord/create")
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
                <h2 className="display-5">Create New Post</h2>

                <h4 style={{color:'green'}} >    {this.state.msg} </h4>

            </div>
        </div>
      <div className="container">
      <form onSubmit={this.handleSubmit} >
      <div className="form-group row">
          <label htmlFor="category" className="col-sm-2 col-form-label">
            Category
          </label>
          <div className="col-sm-10">
            <input type="text"  onChange={this.handleChange} id="category" className="form-control" value={this.state.category}  placeholder="eg. Technology" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Title
          </label>
          <div className="col-sm-10">
            <input type="text"  onChange={this.handleChange}  id="title" className="form-control" value={this.state.title} placeholder="eg. My post" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Author
          </label>
          <div className="col-sm-10">
            <input type="text"  onChange={this.handleChange}  id="author" className="form-control" value={this.state.author} placeholder="eg. Max Ving" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="content" className="col-sm-2 col-form-label">
            Content
          </label>
          <div className="col-sm-10">
            <textarea type="text" onChange={this.handleChange} id="content" value={this.state.content}  placeholder="Type here.." rows="3" className="form-control"></textarea>
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" id="btn" className="btn btn-primary">
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
export default CreatePost;
