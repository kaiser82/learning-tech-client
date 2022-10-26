import React from 'react';

const Blog = () => {
    return (
        <div className='lg:w-9/12 mx-auto space-y-10 bg-gray-200 p-3 rounded-lg'>
            {/* card */}
            <div className="card w-100 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is 'CORS'</h2>
                    <p>CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.</p>

                </div>
            </div>
            {/* card */}
            <div className="card w-100 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Why are you using Firebase? What other options do you have to implement authentication?</h2>
                    <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p>
                    <p>Other options of authentication: Parse, Supabase, Kuzzle, Back4App,Backendless</p>
                </div>
            </div>
            {/* card */}
            <div className="card w-100 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">How dow the private route work?</h2>
                    <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>

                </div>
            </div>
            {/* card */}
            <div className="card w-100 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is Node? How does Node work?</h2>
                    <p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine (i.e. V8 engine) and executes JavaScript code outside a web browser</p>
                    <p>How does node execute?
                        Node. js takes a different approach. It runs a single-threaded event loop registered with the system to handle connections, and each new connection causes a JavaScript callback function to fire.</p>

                </div>
            </div>
        </div>
    );
};

export default Blog;