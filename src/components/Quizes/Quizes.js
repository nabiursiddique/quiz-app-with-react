import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const quizData = useLoaderData();
    const quizD = quizData.data.questions;
    const name = quizData.data.name;
    return (
        <div className='bg-black py-5'>
            <h3 className='text-info text-center fw-bold pb-5'>Quiz of {name}</h3>
            {
                quizD.map((quiz, index) => <Quiz
                    key={quiz.id}
                    quiz={quiz}
                    index={index}
                ></Quiz>)
            }

        </div>
    );
};

export default Quizes;