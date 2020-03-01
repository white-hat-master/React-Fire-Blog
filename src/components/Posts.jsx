import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './homePosts.css'
import BlogPost from './BlogPost';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    // console.log(props);
  }
  render() {
    return (
      <div className="container">

      <BlogPost {...this.props} />

    </div>

     );
  }
}

export default Posts;
