import React from 'react';
import { FaClock, FaEye, FaMoneyBillAlt, FaStar, } from 'react-icons/fa';

const Card = ({ category }) => {
    console.log(category)
    const { courseTitle, description, instructor, instructorPic, price, titlePic, review, duration, ratings } = category;
    return (
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900 text-gray-100">
            <div className="flex space-x-4">
                <img alt="" src={instructorPic} className="object-cover w-12 h-12 rounded-full shadow bg-gray-500" />
                <div className="flex flex-col space-y-1">
                    <div to="#" className="text-sm font-semibold">{instructor}</div>
                    <span className="text-xs text-gray-400">4 hours ago</span>
                </div>
            </div>
            <div>
                <img src={titlePic} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500" />
                <h2 className="mb-1 text-xl font-semibold">{courseTitle}</h2>
                <p className="text-sm text-gray-400">
                    {
                        description.length > 200 ? description.slice(0, 200) + '...' : description
                    }
                </p>
            </div>
            <div className="flex flex-wrap justify-between">
                <div className="flex space-x-2">
                    <button aria-label="Share this post" type="button" className="flex items-center p-1 space-x-1.5">
                        <FaStar />
                        <span>{ratings}</span>
                    </button>
                    <button aria-label="Bookmark this post" type="button" className="flex items-center p-1 space-x-1.5">
                        <FaEye />
                        <span>{review}</span>
                    </button>
                </div>
                <div className="flex space-x-2 text-sm text-gray-400">
                    <button type="button" className="flex items-center p-1 space-x-1.5">
                        <FaMoneyBillAlt />
                        <span>{price}</span>
                    </button>
                    <button type="button" className="flex items-center p-1 space-x-1.5">
                        <FaClock />
                        <span>{duration} weeks</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;