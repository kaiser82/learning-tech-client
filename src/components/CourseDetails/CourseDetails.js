import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetails = useLoaderData()
    const { courseTitle, description, instructor, instructorPic, price, titlePic, review, duration, ratings } = courseDetails
    console.log(courseDetails)
    return (
        <div className='my-2'>
            <article className="max-w-2xl px-6 py-24 mx-auto space-y-12 bg-gray-800 text-gray-50">
                <div className="w-full mx-auto space-y-4 text-center">
                    <img src={titlePic} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                    <h1 className="text-4xl font-bold leading-tight md:text-5xl">{courseTitle}</h1>
                    <p className="text-sm text-gray-400">by Insturctor:
                        <span className="underline text-violet-400 px-1">
                            {instructor}
                        </span>

                    </p>
                </div>
                <div className="text-gray-100">
                    <p>{description}</p>
                </div>
                <div className="pt-12 border-t border-gray-700">
                    <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row items-center justify-center">
                        <img src={instructorPic} alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start bg-gray-500 border-gray-700" />
                        <div className="flex flex-col">
                            <h4 className="text-lg font-semibold">{instructor}</h4>
                            <p className="text-gray-400">Course Instructor</p>
                        </div>
                    </div>
                    <div className="flex justify-center pt-4 space-x-4 align-center">
                        <p>
                            <span>Rating: {ratings}</span>
                        </p>
                        <p>
                            <span>Review: {review}</span>
                        </p>
                        <p>
                            <span>Price: {price}</span>
                        </p>
                        <p>
                            <span>Duration: {duration}</span>
                        </p>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default CourseDetails;