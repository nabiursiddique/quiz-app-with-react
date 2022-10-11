import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quizes = () => {
    const loaderData = useLoaderData();
    return (
        <div>
            <h2>this is quizes page</h2>
        </div>
    );
};

export default Quizes;