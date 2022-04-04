import React from 'react';
import Hooks from '../../Hooks/Hooks';

const ReviweDetails = () => {
    const [reviwes] = Hooks([])
    const customerReviwe = reviwes.slice(0, 3)
    return (
        <div className='grid grid-cols-3 gap-6 mt-8 mx-8'>
            {
                customerReviwe.map(reviwe =>
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

export default ReviweDetails;