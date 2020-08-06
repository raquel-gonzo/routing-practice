import React from 'react';
import { Link } from '@reach/router';

const Home = (props) => {
    return (
        <div>
            <h3>Welcome</h3>
            <br/>
            <Link to='/4'>Visit localhost:3000/4</Link>
            <br/>
            <Link to='/hello'>Visit localhost:3000/hello</Link>
            <br/>
            <Link to='/hello/blue/red'>Visit localhost:3000/hello/blue/red</Link>
        </div>
    );
}

export default Home;