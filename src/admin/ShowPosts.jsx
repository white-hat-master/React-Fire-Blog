import React, { Component } from 'react';
import firebase from '../components/Firebase'
import { Link } from 'react-router-dom'


class ShowPosts extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('blogData');
    this.unsubscribe = null;
    this.state = {
      posts: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((doc) => {
      const { title, category ,content, author } = doc.data();
      posts.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        category,
        content,
        author,
      });

    });

    this.setState({
      posts
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  delete(id){
    firebase.firestore().collection('blogData').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }


  render(){
  return (
    <div className="jumbotron jumbotron-flax">
    <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">
            ALL POSTS
          </h3>
        </div>
        <div class="panel-body">
          <table class="table table-stripe">
            <thead>
              <tr>
              <th>Title</th>
                <th>Category</th>
                <th>Content</th>
                <th>Author</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map(post =>
                <tr>
                <td>{post.title}</td>
                  <td>{post.category}</td>
                  <td>{post.content}</td>
                  <td>{post.author}</td>
                  <td>
                    <Link to={`/dashbord/edit/${post.key}`}>
                    <button type="button" class="btn btn-primary">Edit</button>
                    </Link>
                  </td>
                  <td>
                    <button type="button" onClick={this.delete.bind(this, post.key)} class="btn btn-danger">Delete</button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
}

export default ShowPosts;
