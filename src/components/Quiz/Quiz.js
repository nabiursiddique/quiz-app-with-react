import React from 'react';
import './Quiz.css'

const Quiz = ({ quiz, index }) => {
    // console.log(quiz)
    const { question, options, correctAnswer } = quiz;
    return (
        <div className='container border border-info mb-3 question-container'>
            <p className=' h5'>{index + 1}. {question.replace(/(<([^>]+)>)/ig, '')}</p>
            <p>{options.map(option => <p>{option}</p>)}</p>
        </div>
    );
};

export default Quiz;