import React from 'react';

import {FaArrowRight} from 'react-icons/fa'

import Cards from '../../components/Cards';

const Articles = () => {
    return (
        <section className='container mx-auto flex flex-col py-10'>
            <div className='flex flex-wrap md:gap-x-5 gap-y-5 pb-10'>
                <Cards className='w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]' />
            </div>
            <button className='mx-auto flex items-center gap-x-2 font-bold text-primary border-2 border-primary px-6 py-3 rounded-lg hover:text-white hover:bg-primary'>
                <span>More action</span>
                <FaArrowRight className='w-3 h-3' />
            </button>
            
        </section>
    );
}

export default Articles;
