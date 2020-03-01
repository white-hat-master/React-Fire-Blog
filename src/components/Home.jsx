import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import HomePosts from './HomePosts'
const Home = props => {
    return (
    <div className="container" id="homePosts">
        <HomePosts/>

    </div>

     );

}

export default Home;
