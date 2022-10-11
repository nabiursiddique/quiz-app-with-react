import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const quizData = useLoaderData();
    const quizD = quizData.data.questions;
    const topics = (quizData.data);
    // console.log(topic)
    // console.log(quizD);
    return (
        <div>
            {
                quizD.map(quiz => <Quiz
                    key={quiz.id}
                    quiz={quiz}
                ></Quiz>)
            }
        </div>
    );
};

export default Quizes;