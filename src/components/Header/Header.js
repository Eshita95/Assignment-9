import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1 className='text-6xl font-semibold text-white bg-cyan-600 p-4'>Best Foundation for Make-Up</h1>
            <nav className='bg-cyan-600 text-white p-4'>
                <Link className='mr-8 text-xl font-bold' to="/">Home</Link>
                <Link className='mr-8 text-xl font-bold' to="/reviwes">Reviwes</Link>
                <Link className='mr-8 text-xl font-bold' to="/dashboard">Dashboard</Link>
                <Link className='mr-8 text-xl font-bold' to="/blogs">Blogs</Link>
                <Link className='mr-8 text-xl font-bold' to="/about">About</Link>

            </nav>
        </div>
    );
};

export default Header;