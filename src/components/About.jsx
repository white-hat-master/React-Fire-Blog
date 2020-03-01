import React from "react";
import "./About.css";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="container" id="blog-con">
      <div className="row">
        <div className="col-sm-4">
          <h2>About Me</h2>
          <h5>Photo of me:</h5>
          <div>
            <img className="img-thumbnail" src="assets/person.jpg" alt="person" />
          </div>
          <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
          <h3>Some Links</h3>
          <p>Lorem ipsum dolor sit ame.</p>
          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <a className="nav-link active" href="/about">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/posts">
                Posts
              </a>
            </li>
          </ul>
          <hr className="d-sm-none" />
        </div>
        <div className="col-sm-8">
          <h2>TITLE HEADING</h2>
          <h5>Title description, Dec 7, 2017</h5>
          <div>
            <img
              src="assets/img1.jpg"
              id="thumbnail"
              classNameName="img-thumbnail"
              alt=""
            />
          </div>
          <div>
            <p>Some text..</p>
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
            <br />
          </div>
          <h2>TITLE HEADING</h2>
          <h5>Title description, Sep 2, 2017</h5>
          <div>
            <img
              src="assets/img2.jpg"
              id="thumbnail"
              classNameName="img-thumbnail"
              alt=""
            />
          </div>
          <p>Some text..</p>
          <p>
            Sunt in culpa qui officia deserunt mollit anim id est laborum
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
