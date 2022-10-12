import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const quizData = useLoaderData();
    const quizD = quizData.data.questions;
    // console.log(quizD);
    return (
        <div className='bg-black pt-5'>
            <h3 className='text-info text-center pb-5'>QUIZ PAGE</h3>
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