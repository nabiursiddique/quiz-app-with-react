import React from 'react';
import { useRouteError } from 'react-router-dom';
import Header from '../Header/Header';
import './ErrorPage.css'

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='main-div'>
            <Header></Header>
            <div className="container text-light bg-dark p-5 mt-5">
                <h1 className='pt-5 fw-bolder text-muted display-1'>404</h1>
                <h1 className='mt-3 '>YOUR LINK ADDRESS IS NOT CORRECT</h1>

                {error && (
                    <div>
                        <p className="text-danger fw-bold">{error.statusText || error.message}</p>
                    </div>
                )}
                <h3 className='text-info pb-5 fw-bold '>Enter a vaild route</h3>
            </div>
        </div>
    );
};

export default ErrorPage;