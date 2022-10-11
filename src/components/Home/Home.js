import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../Cards/Cards';

const Home = () => {
    const loaderData = useLoaderData();
    const quizTopics = loaderData.data;
    console.log(quizTopics);
    return (
        <div>
            <div>
                <h1 className='mt-5 mb-5'>Choose Your Quiz Topic</h1>
                <Cards key={quizTopics.id} quizTopics={quizTopics}></Cards>
            </div>
        </div>
    );
};

export default Home;