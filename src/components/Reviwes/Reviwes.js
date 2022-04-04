import React from 'react';
import Hooks from '../../Hooks/Hooks';

const Reviwes = () => {
    const [reviwes] = Hooks([])
    return (
        <div className='grid grid-cols-3'>
            {
                reviwes.map(reviwe => <div key={reviwe.id}>
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

export default Reviwes;