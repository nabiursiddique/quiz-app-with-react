import React from 'react';
import { useRouteError } from 'react-router-dom';
import Header from '../Header/Header';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <Header></Header>
            <div className="container text-danger">
                <h1>OOps you are in wrong link</h1>
                {error && (
                    <div>
                        <p className="text-danger">{error.statusText || error.message}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ErrorPage;