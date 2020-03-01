import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Deshbord.css';
import { Link,useRouteMatch } from 'react-router-dom'

const AdminSidebar = () => {

  let {  url } = useRouteMatch();
  return (



<nav class="col-md-2 d-none d-md-block bg-light sidebar">
  <div class="sidebar-sticky">
    <ul class="nav flex-column">
      <li class="nav-item">
        <Link class="nav-link active" to={`${url}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><polyline points="9 22 9 12 15 12 15 22"></polyline><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
          <span data-feather="home"></span>
          Dashboard <span class="sr-only">(current)</span>
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to={`${url}/create`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
          <span data-feather="file"></span>
          Create Post
        </Link>
      </li>


    </ul>
  </div>
</nav>

);
}


export default AdminSidebar;
