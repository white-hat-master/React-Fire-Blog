import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./SideBar.css";

const SideBar = props => {
  return (
    <div className="col-md-4">
      {/* <!-- Search Widget --> */}
      <div className="card my-4">
        <h5 className="card-header">Search</h5>
        <div className="card-body">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for..."
            />
            <span className="input-group-btn">
              <button className="btn btn-secondary" type="button">
                Go!
              </button>
            </span>
          </div>
        </div>
      </div>

      {/* <!-- Categories Widget --> */}
      <div className="card my-4">
        <h5 className="card-header">Categories</h5>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6">
              <ul
                className="list-unstyled mb-0"
                style={{ alignContent: "center" }}
              >
                <li>
                  <Link to="/">Web Design</Link>
                </li>
                <li>
                  <Link to="/">HTML</Link>
                </li>
                <li>
                  <Link to="/">Freebies</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className="list-unstyled mb-0">
                <li>
                  <Link to="/">JavaScript</Link>
                </li>
                <li>
                  <Link to="/">CSS</Link>
                </li>
                <li>
                  <Link to="/">Tutorials</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Side Widget --> */}
      <div className="card my-4">
        <h5 className="card-header">Recent Posts</h5>
        <div className="card-body">
              <div className="row" id="recentPost">
                <div className="col-lg-6">
                  <ul className="list-unstyled mb-0">
                    <li>
                     <Link to="/">
                        <h3>Blog Title</h3>
                        <span>20/3/2020</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
