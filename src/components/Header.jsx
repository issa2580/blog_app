import React, { useState } from 'react';

import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import {MdKeyboardArrowDown} from 'react-icons/md'

import { images } from '../constants/images';
import { navlinks } from '../constants/navlinks';

const Header = () => {

    const [navIsVisible, setNavIsVisible] = useState(false)
    const [dropdownIsVisible, setDropdownIsVisible] = useState(false)

    const ToggleDropdownVisibleHandler = () => {
        setDropdownIsVisible((curState) => {
            return !curState
        })
    }

    const NavVisibleHandler = () => {
        setNavIsVisible((curState) => {
            return !curState
        })
    }

    return (
        <section className='sticky top-0 left-0 right-0 z-50'>
            <header className='container mx-auto flex justify-between py-4 items-center'>
                <div>
                    <img className='w-16' src={images.Logo} alt="logo" />
                </div>
                <div className='z-50 lg:hidden'>
                    {navIsVisible ? <AiOutlineClose className='w-6 h-6' onClick={NavVisibleHandler} /> : <AiOutlineMenu className='w-6 h-6' onClick={NavVisibleHandler} />}
                </div>
                <div className={` ${navIsVisible ? "right-0" : "-right-full"} transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 gap-x-9 items-center lg:static`}>
                    <ul className='text-white lg:text-dark-soft items-center gap-y-5 flex flex-col lg:flex-row gap-x-2 font-semibold'>
                        {navlinks.map(links =>(
                            <li className='relative group'>
                                {links.type === 'link' ? (
                                    <>
                                        <a className='px-4 py-2' href={links.url}>{links.path}</a>
                                        <span className='cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 opacity-0 group-hover:right-[90%] group-hover:opacity-100'>/</span>
                                    </>
                                ) : (
                                    <div className='flex flex-col items-center'>
                                        <button
                                            className='px-4 py-2 flex gap-x-1 items-center'
                                            onClick={ToggleDropdownVisibleHandler}>
                                            <span>{links.path}</span>
                                            <MdKeyboardArrowDown className='w-4 h-4' />
                                        </button>
                                        <div className={`${dropdownIsVisible ? "block" : "hidden"} lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}>
                                            <ul className=' bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden'>
                                                {links.items.map((page) => (
                                                        <a className='hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft' href='/'>{page}</a>
                                                   
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                    <button className='mt-5 lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-full hover:bg-blue-500 hover:text-white text-blue-500 font-semibold'>Sign In</button>
                </div>
            </header>
        </section>
    );
}

export default Header;
