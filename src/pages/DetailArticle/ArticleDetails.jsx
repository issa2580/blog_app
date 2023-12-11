import React from 'react';
import MainLayout from '../../components/MainLayout'
import BreadCrumb from '../../components/BreadCrumb'
import { images } from '../../constants/images';
import { Link } from 'react-router-dom';
import SuggestedPost from './SuggestedPost'
import CommentContainer from '../../components/comments/CommentContainer';
import SocialShareBtn from '../../components/comments/SocialShareBtn';


const breadCrumbData = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Blog',
        link: '/blog'
    },
    {
        name: 'Article',
        link: '/blog/1'
    }
]

const postData = [
    {
        id: '1',
        image: images.Post1,
        title: 'Help children get better education',
        createdAt: '2015-01-23'
    },
    {
        id: '2',
        image: images.Post1,
        title: 'Help children get better education',
        createdAt: '2015-01-23'
    },
    {
        id: '3',
        image: images.Post1,
        title: 'Help children get better education',
        createdAt: '2015-01-23'
    },
    {
        id: '4',
        image: images.Post1,
        title: 'Help children get better education',
        createdAt: '2015-01-23'
    }
]

const tagsData = [
    'Medical',
    'Lifestyle',
    'Leadership',
    'Education',
    'Diversity',
    'Financial',
    'Food',
]

const ArticleDetails = () => {
    return (
        <MainLayout>
            <section className='container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start'>
                <article className=' flex-1'>
                    <BreadCrumb data={breadCrumbData} />
                    <img className=' rounded-xl w-full' src={images.Post1} alt="post1" />
                    <Link to='/blog?category=selectedCategory' className=' text-primary text-sm font-roboto mt-4 inline-block md:text-base'>
                        Education
                    </Link>
                    <h1 className='text-xl font-medium font-roboto text-dark-hard md:text-[26px]'>
                        Help children get better education
                    </h1>
                    <div className='mt-4 text-dark-soft'>
                        <p className=' leading-7'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum.
                        </p>
                    </div>
                    <CommentContainer className='mt-10' loggedInId='a' />
                </article>
                <div>
                    <SuggestedPost 
                        header='Latest Article' 
                        posts={postData} 
                        tags={tagsData} 
                        className='mt-8 lg:mt-0 lg:max-w-xs' 
                    />
                    <div 
                        className='mt-7'>
                        <h2
                            className=' font-roboto font-medium text-dark-hard mb-4 md:text-xl'>
                            Share on:
                        </h2>
                        <SocialShareBtn
                            url={encodeURI('https://moonfo.com/post/client-side-and-server-side-explanation')}
                            title={encodeURIComponent('Client-side and Server-side explanation')}
                        />
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}

export default ArticleDetails;
