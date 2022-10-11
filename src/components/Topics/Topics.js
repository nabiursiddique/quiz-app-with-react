import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../Cards/Cards';

const Topics = () => {
    const loaderData = useLoaderData();
    const quizTopics = loaderData.data;

    return (
        <div>
            <h1 className='mt-5 mb-5'>These Quiz Topics Are Available</h1>
            <hr />
            <Cards key={quizTopics.id} quizTopics={quizTopics}></Cards>
        </div>
    );
};

export default Topics;