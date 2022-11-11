import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './Quiz.css'




const Quiz = ({ quiz, index }, handleChange) => {
    const [answer, setAnswer] = useState(0);
    // console.log(quiz)
    const { question, options, correctAnswer } = quiz;
    // console.log(correctAnswer)
    const checkAns = (option) => {
        if (option === correctAnswer) {
            toast.success('correct answer');
            setAnswer(answer + 1);
        } else {
            toast.error('wrong answer');
        }
    }
    return (

        <div className='container bg-dark text-white p-5 rounded pb-5 question-container border-bottom'>
            <p className=' h5'>{index + 1}. {question.replace(/(<([^>]+)>)/ig, '')}</p>


            {/* <p>{options.map((option, ind) => <p><input type="radio" name={{ ind }}></input> {option}</p>)}</p> */}
            <p>{options.map((option, ind) =>
                <div className='hover-work' onClick={() => checkAns(option)}>
                    <input type="radio" name={{ ind }}></input>{option}
                </div>)
            }
            </p>
            <Toaster></Toaster>
        </div>
    );
};

export default Quiz;