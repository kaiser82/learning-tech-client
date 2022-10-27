import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const { user } = useContext(AuthContext)
    const detail = useLoaderData();
    const { courseTitle, titlePic, price, instructor, duration } = detail
    console.log(detail, user)
    // console.log(user)
    return (
        <div className='lg:w-9/12 mx-auto  my-5 lg:my-36'>
            <div className="card md:card-side  shadow-xl bg-gray-900 text-gray-100">
                <figure><img src={titlePic} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold  text-green-400">Course Title: {courseTitle}</h2>
                    <div>
                        <p>Course Instructor: <span className='text-accent font-semibold'>{instructor}</span></p>
                        <p>Course fee: <span className='text-accent font-semibold'>{price}</span></p>
                        <p>Course duration: <span className='text-accent font-semibold'>{duration} weeks</span></p>
                    </div>

                    <div className="card-actions justify-start pt-4">
                        <div className='flex space-x-4'>
                            <div className="avatar">
                                <div className="w-20 rounded-xl ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user?.photoURL} alt="" />
                                </div>
                            </div>
                            <p>Congratulation! <span className='text-accent font-semibold'>{user?.displayName}</span>, you have successfully enrolled to this course.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;