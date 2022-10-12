import React from 'react';
import './Quiz.css'

const Quiz = ({ quiz, index }) => {
    // console.log(quiz)
    const { question, options, correctAnswer } = quiz;
    // console.log(correctAnswer)
    return (
        <div className='container bg-dark text-white p-5 rounded pb-5 question-container border-bottom '>
            <p className=' h5'>{index + 1}. {question.replace(/(<([^>]+)>)/ig, '')}</p>


            <p>{options.map((option, ind) => <p> <input type="radio" name={`value${ind}`}></input> {option}</p>)}</p>
        </div>
    );
};

export default Quiz;