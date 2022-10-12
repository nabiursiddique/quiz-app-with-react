import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const quizData = useLoaderData();
    const totalArr = quizData.data;
    console.log(totalArr)
    return (
        <div >
            <h2 className='text-center mt-5'>This Is Statistics Page</h2>
            <div className='d-flex justify-content-center mt-5'>
                <div>
                    <LineChart width={500} height={400} data={totalArr}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    </LineChart>
                </div>
            </div>
        </div>
    );
};

export default Statistics;