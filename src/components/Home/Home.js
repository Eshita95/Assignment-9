import React, { useEffect} from 'react';
import {useNavigate } from 'react-router-dom';
import Hooks from '../../Hooks/Hooks';
import ReviweDetails from '../ReviweDetails/ReviweDetails';

const Home = () => {
    const [reviwes, setReviwes] = Hooks([])

    useEffect(() =>{
        fetch('reviwe.json')
        .then(res => res.json())
        .then(data =>setReviwes(data))
    }, [setReviwes]);

    const navigate = useNavigate()
    const allReviwes = () =>{
        navigate('/reviwes')
    }

    return (
        <div>
            <div className='grid md:grid-cols-2 gap-6 mt-8'>
                <div className='text-center justify-center mt-20 ml-8 mr-8'>
                    <h2 className='text-5xl font-bold text-red-500'>BEST FOUNDATION IN BD</h2>
                    <h2 className='text-4xl font-bold text-red-500 mt-4'>FOR EVERY TYPE OF SKIN </h2>
                    <p className='font-bold'>Foundation Should Look Like A Second Skin. Using a good foundation ,its actually good for all skin.. Its hide our many skin problem. So, here I bring some best Foundation reviwe..</p>
                    <button className='text-xl text-bold text-white mt-4 bg-cyan-600 px-4 py-2'>Live Demo</button>
                </div>
                <div>
                    <img src="https://test-storage-mumbai.s3.amazonaws.com/uploads/article/image/554/Foundation_Dupes.jpg" alt="" />
                </div>

            </div>
            <div className=' mt-20'>
            <h2 className='text-3xl font-bold bg-cyan-600 text-white justify-center p-2'>Customar Reviwes</h2>
                <div>
                    <ReviweDetails reviwes ={reviwes}></ReviweDetails>
                </div>

                <div className='my-8 '>
                    <button onClick={allReviwes} className='bg-cyan-600 font-bold text-white rounded px-6 py-2'>All Reviwes</button>
                </div>
            </div>
        </div>
    );
};

export default Home;