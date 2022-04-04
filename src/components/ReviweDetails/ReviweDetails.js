import React from 'react';
import Hooks from '../../Hooks/Hooks';

const ReviweDetails = () => {
    const [reviwes] = Hooks([])
    const customerReviwe = reviwes.slice(0,3)
    return (
        <div className='grid grid-cols-3'>
             {
                 customerReviwe.map(reviwe => <div key={reviwe.id}>
                     <div>
                        <p>{reviwe.name}</p>
                    </div>
                    <div>
                        <p>{reviwe.reviwe}</p>
                        <p>{reviwe.rating}</p>
                    </div>
                 </div>)
             }
        </div>
    );
};

export default ReviweDetails;