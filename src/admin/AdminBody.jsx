import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Deshbord.css';
import AdminSidebar from './AdminSidebar';
import CreatePost from './CreatePost';
import Edit from './Edit';
import ShowPosts from './ShowPosts';
import {  Switch, Route,Link,useRouteMatch } from "react-router-dom";



const AdminBody = () => {
  let { path } = useRouteMatch();

  return (

    <div class="container-fluid">
      <div class="row">
        <AdminSidebar/>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <Link to={path} ><h1 class="h2">Dashboard</h1></Link>
            <div class="btn-toolbar mb-2 mb-md-0">

            </div>
          </div>
          <Switch>
            <Route exact path={path} component={ShowPosts} />

            <Route path={`${path}/create`} component={CreatePost} />
            <Route path={`${path}/edit/:id`} component={Edit} />


          </Switch>

        </main>
      </div>
    </div>
  );
}


export default AdminBody;
