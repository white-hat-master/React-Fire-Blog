import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <div class="container-fluid" id="jumbotronNoMatch">
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-3">Error 404</h1>
                    <p class="lead">Page not Found</p>
                    <hr class="my-2"/>
                    <p>Back to Home</p>
                    <p class="lead">
                        <Link class="btn btn-primary btn-lg" to="/" role="button">Home</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default NoMatch;
