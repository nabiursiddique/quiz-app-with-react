import React from 'react';

const removeTags = (str) => {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();
    return str.replace(/(<([^>]+)>)/ig, '');
}

const Quiz = ({ quiz }) => {
    const { question, options, correctAnswer } = quiz;
    return (
        <div>
            <p>{question.replace(/(<([^>]+)>)/ig, '')}</p>
            <p>{options.map(option => <p>{option}</p>)}</p>
        </div>
    );
};

export default Quiz;