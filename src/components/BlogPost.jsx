import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBar.jsx';
import { Link } from 'react-router-dom'

const BlogPost = props => {
    return (
        <div className="container">
        <div className="row">
          {/* <!-- Post Content Column --> */}
          <div className="col-lg-8">
    <span>Categories</span>
            {/* <!-- Title --> */}
            <h1 className="mt-4">blogTitle</h1>

            {/* <!-- Author --> */}
            <p className="lead">
              by
    <Link to="/"> &#32; author</Link>
            </p>

            <hr />

            {/* <!-- Date/Time --> */}
    <p>Posted on 20/2/2020</p>

            <hr />

            {/* <!-- Preview Image --> */}

            <hr />

            {/* <!-- Post Content --> */}
            <p className="lead">
              blogText
            </p>

            <blockquote className="blockquote">
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer className="blockquote-footer">
                Author
    <cite title="Source Title">&#32; author</cite>
              </footer>
            </blockquote>

            <hr />

            {/* <!-- Comments Form --> */}
            <div className="card my-4">
              <h5 className="card-header">Leave a Comment:</h5>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <textarea className="form-control" rows="3"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>

            {/* <!-- Single Comment --> */}
            <div className="media mb-4">
              <img
                className="d-flex mr-3 rounded-circle"
                src="../../assets/person3.jpg"
                id="person-comment"
                alt="person"
              />
              <div className="media-body">
                <h5 className="mt-0">Commenter Name</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                nisi vulputate fringilla. Donec lacinia congue felis in
                faucibus.
              </div>
            </div>

          </div>
          {/* <!-- Sidebar Widgets Column --> */}
          <SideBar/>

        </div>

      </div>
     );
}

export default BlogPost;
