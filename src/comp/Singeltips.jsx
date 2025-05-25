


import React from 'react';
import { IoEyeSharp } from "react-icons/io5";
import { Link } from 'react-router';

const Singeltips = ({ tip }) => {
   

    const {imageUrl, _id, title, category} = tip
    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="rounded-full w-12 h-12 overflow-hidden">
                            <img
                                src={imageUrl}
                                alt={title}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div className="font-semibold text-base">{title}</div>
            </td>
            <td>
                <span className="badge badge-ghost badge-sm">
                    {category}
                </span>
            </td>
            <td>
                    <Link to={`/tips/${_id}`}>
                <button className="btn btn-outline btn-xs">
                       <IoEyeSharp size={16} />
                </button>
                    </Link>
                 
            </td>
        </tr>
    );
};

export default Singeltips;

