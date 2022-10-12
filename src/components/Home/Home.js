import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../Cards/Cards';

const Home = () => {
    const loaderData = useLoaderData();
    const quizTopics = loaderData.data;
    return (
        <div className='bg-black'>
            <div>
                <h1 className=' pt-5 text-center text-info'>Choose Your Quiz Topic</h1>
                <hr />
                <Cards key={quizTopics.id} quizTopics={quizTopics}></Cards>
            </div>
        </div>
    );
};

export default Home;