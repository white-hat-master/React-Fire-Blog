import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from '../components/Firebase'
// var uuid = require('uuid')


 class Edit extends Component {
   constructor(props) {
    super(props);
    this.state = {
      key: '',
      title: '',
      category:'',
      content: '',
      author: '',
      msg:''
    };
  }

  componentDidMount() {
   const ref = firebase.firestore().collection('blogData').doc(this.props.match.params.id);
   console.log(this.props)
   ref.get().then((doc) => {
     if (doc.exists) {
       const post = doc.data();
       this.setState({
         key: doc.id,
         title: post.title,
         category:post.category,
         content: post.content,
         author: post.author
       });
     } else {
       console.log("No such document!");
     }
   });
 }



  onChange = (e) => {
    const state = this.state
    state[e.target.id] = e.target.value;
    this.setState({post:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, category,content, author } = this.state;

    const updateRef = firebase.firestore().collection('blogData').doc(this.state.key);
    updateRef.set({
      title,
      category,
      content,
      author
    }).then((docRef) => {
      this.setState({
        key: '',
        title: '',
        category:'',
        content: '',
        author: '',
        msg:'Post Edited successfuly'
      });
      this.props.history.push("/dashbord/edit/"+this.props.match.params.id)
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
                <h2 className="display-5">Edit Post</h2>

                <h4 style={{color:'green'}} >    {this.state.msg} </h4>

            </div>
        </div>
      <div className="container">
      <form onSubmit={this.onSubmit} >
      <div className="form-group row">
          <label htmlFor="category" className="col-sm-2 col-form-label">
            Category
          </label>
          <div className="col-sm-10">
            <input type="text"  onChange={this.onChange} id="category" className="form-control" value={this.state.category}  placeholder="eg. Technology" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Title
          </label>
          <div className="col-sm-10">
            <input type="text"  onChange={this.onChange}  id="title" className="form-control" value={this.state.title} placeholder="eg. My post" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Author
          </label>
          <div className="col-sm-10">
            <input type="text"  onChange={this.onChange}  id="author" className="form-control" value={this.state.author} placeholder="eg. Max Ving" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="content" className="col-sm-2 col-form-label">
            Content
          </label>
          <div className="col-sm-10">
            <textarea type="text" onChange={this.onChange} id="content" value={this.state.content}  placeholder="Type here.." rows="3" className="form-control"></textarea>
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
export default Edit;
