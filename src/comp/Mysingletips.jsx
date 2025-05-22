import React from 'react';
import { Link } from 'react-router';

const Mysingletips = ({tips}) => {
    return (
        <div>
       <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="rounded-full w-12 h-12 overflow-hidden">
                            <img
                                src={tips.imageUrl}
                                alt={tips.title}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div className="font-semibold text-base">{tips.title}</div>
            </td>
            <td>
                <span className="badge badge-ghost badge-sm">
                    {tips.category}
                </span>
            </td>
            <td>
                    <Link to={`/tips/${tips._id}`}>
                <button className="btn btn-outline btn-xs">
                      
                </button>
                    </Link>
                 
            </td>
        </tr>
        </div>
    );
};

export default Mysingletips;