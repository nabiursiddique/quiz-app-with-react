import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const quizData = useLoaderData();
    const totalArr = quizData.data;
    console.log(totalArr)
    return (
        <div className='bg-dark'>
            <h1 className='text-center text-info pt-5 fw-bold border-top'> Statistics Of Total Marks</h1>
            <hr />
            <div className='d-flex justify-content-center mt-5'>
                <div className='pb-5'>
                    <ResponsiveContainer width={500} height={400}>
                        <LineChart data={totalArr}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div >
    );
};

export default Statistics;