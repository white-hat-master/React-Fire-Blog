/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './homePosts.css'
import SideBar from './SideBar';
import firebase from './Firebase'

class HomePosts extends Component {
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
      posts : posts
   });
   console.log(this.state.posts)
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div className="container">

        <div className="row">

            <div className="col-md-8" id="main" >

              {this.state.posts.map((post,index)=>{
                return(
                  <div class="jumbotron">
                  <div class="card mb-3">
                    <div class="card-header">{post.category}</div>

                    <div class="card-body">
                      <h5 class="card-title">{post.title}</h5>
                      <p class="card-text">{post.content}.</p>
                    </div>
                    <div class="card-footer">
                      <small class="blockquote-footer">{post.author}</small>
                    </div>
                  </div>
                  </div>
                )
              })}


            </div>

        <SideBar/>

      </div>
      {/* <!-- /.row --> */}


    </div>

     );
  }
}

export default HomePosts;
