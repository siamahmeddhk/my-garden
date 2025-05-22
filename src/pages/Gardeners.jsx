import React from 'react';
import { useLoaderData } from 'react-router';
import Singelgardener from '../comp/Singelgardener';

const Gardeners = () => {

    const gardenders = useLoaderData()
    console.log(gardenders)

    return (
        <div>
            <div className='mx-auto grid grid-cols-1 md:grid-cols-3 py-6'>
                {
                    gardenders.map(gardener=><Singelgardener gardener={gardener}></Singelgardener>)
                }
            </div>
        </div>
    );
};

export default Gardeners;