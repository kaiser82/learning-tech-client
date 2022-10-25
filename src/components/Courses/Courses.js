import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Courses = () => {
    const categories = useLoaderData();
    console.log(categories);
    return (
        <div>
            <h2>All Courses: {categories.length}</h2>
            <Link to="/courseDetails"><button className='btn btn-primary'>Course details</button></Link>
            <div className="grid grid-cols-4 gap-4 ">
                <div></div>
                <div className='col-span-3 border border-gray-700'></div>
            </div>
        </div>
    );
};

export default Courses;