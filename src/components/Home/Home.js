import React from 'react';
import { Link } from 'react-router-dom';
import cover from '../../assets/pictures/cover.jpg'

const Home = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${cover})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl md:text-5xl font-bold">Access Online Courses From Top Instructor</h1>
                    <p className="mb-5">You don't have to struggle alone, you've got our assistance and help. Start, switch, or advance your career with our courses.</p>
                    <button className="btn btn-primary"><Link to='/courses'>View all courses</Link></button>
                </div>
            </div>
        </div>

    );
};

export default Home;