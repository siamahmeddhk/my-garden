import React from 'react';
import { useLoaderData } from 'react-router';
import Singeltips from '../comp/Singeltips';
import Mysingletips from '../comp/Mysingletips';

const Mytips = () => {
    const mytips = useLoaderData()
   
    return (
        <div>
             <div className="p-4">
            <div className="overflow-x-auto rounded-lg shadow">
                <table className="table table-zebra">
                    <thead className="bg-green-100 text-gray-700">
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mytips.map(tips => (
                            <Mysingletips key={tips._id} tips={tips} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default Mytips;