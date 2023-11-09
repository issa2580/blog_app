import React from 'react';
import { images } from '../constants/images';
import { navlinks } from '../constants/navlinks';

const Header = () => {
    return (
        <section>
            <header className='container mx-auto flex justify-between py-4 items-center'>
                <div>
                    <img src={images.Logo} alt="logo" />
                </div>
                <div className='flex gap-x-9 items-center'>
                    <ul className='flex gap-x-2 font-semibold'>
                        {navlinks.map(links =>(
                            <li className='relative group'>
                                <a className='px-4 py-2' href={links.url}>{links.path}</a>
                                <span className='text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 opacity-0 group-hover:right-[90%] group-hover:opacity-100'>/</span>
                            </li>
                        ))}
                    </ul>
                    <button className='border-2 border-blue-500 px-6 py-2 rounded-full hover:bg-blue-500 hover:text-white text-blue-500 font-semibold'>Sign In</button>
                </div>
            </header>
        </section>
    );
}

export default Header;
