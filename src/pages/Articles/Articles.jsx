import React from 'react';

import Cards from '../../components/Cards';

const Articles = () => {
    return (
        <section className='container mx-auto flex flex-wrap md:gap-x-5 gap-y-5 py-10'>
            <Cards className='w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]' />
        </section>
    );
}

export default Articles;
