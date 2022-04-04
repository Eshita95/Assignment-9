import React from 'react';
import Hooks from '../../Hooks/Hooks';

const Reviwes = () => {
    const [reviwes] = Hooks([])
    return (
        <div className='mx-8 my-8 grid grid-cols-3 gap-6'>
            {
                reviwes.map(reviwe => 
                <div className='bg-red-200 p-4' key={reviwe.id}>
                    <div className='m-auto'>
                        <p className='text-xl font-bold bg-red-400 text-white p-2 rounded-md'>{reviwe.name}</p>
                    </div>
                    <div>
                        <p>{reviwe.reviwe}</p>
                        <p className='font-bold'>Rating:{reviwe.rating}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Reviwes;