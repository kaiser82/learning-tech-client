import React from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
    return (
        <div>
            <h2>All Courses</h2>
            <Link to="/courseDetails"><button className='btn btn-primary'>Course details</button></Link>
        </div>
    );
};

export default Courses;