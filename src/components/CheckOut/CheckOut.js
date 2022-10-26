import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const { user } = useContext(AuthContext)
    const detail = useLoaderData();
    const { courseTitle, titlePic, price, instructor } = detail
    console.log(detail, user)
    // console.log(user)
    return (
        <div className='lg:w-9/12 mx-auto mt-5 lg:mt-20'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={titlePic} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Course Title: {courseTitle}</h2>
                    <div>
                        <p>Course Instructor: <span className='text-primary font-semibold'>{instructor}</span></p>
                        <p>Course fee: <span className='text-primary font-semibold'>{price}</span></p>
                    </div>

                    <div className="card-actions justify-start">
                        <p>Congratulation! <span className='text-primary font-semibold'>{user?.displayName}</span>, you have successfully enrolled to this course.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;