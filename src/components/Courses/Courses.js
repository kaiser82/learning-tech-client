import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const Courses = () => {
    const categories = useLoaderData();
    console.log(categories);
    return (
        <div>
            <h2>All Courses: {categories.length}</h2>
            <Link to="/courseDetails"><button className='btn btn-primary'>Course details</button></Link>
            <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-4 ">
                {/* left side */}
                <div className='grid grid-cols-1 border border-green-500'>
                    <aside className="w-full p-6  bg-gray-900 text-gray-100 mx-auto ">
                        <nav className="space-y-8 text-md">
                            <div className="space-y-2">
                                <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-400">Our Courses</h2>
                                <div className="flex flex-col space-y-2">
                                    <>
                                        {
                                            categories.map(category => <Link key={category.id}> {category.courseTitle}</Link>)
                                        }
                                    </>
                                </div>
                            </div>
                        </nav>
                    </aside>
                </div>
                {/* right side */}
                <div className='col-span-3 border border-green-500'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:w-11/12 mx-auto'>
                        {
                            categories.map(category => <Card key={category.id} category={category}></Card>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;