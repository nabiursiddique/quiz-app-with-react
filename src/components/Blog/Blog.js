import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className=' py-5 bg-dark  border-top'>
            <div className='container  bg-black rounded text-white p-5'>
                <h1>Question And Answers</h1>
                <hr />
                <h4>Q-01: What is the purpose of react router?</h4>
                <p><span className='fw-bold'>Ans: </span>Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route. </p>
                <br />
                <h4>Q-02: How does context api works?</h4>
                <p><span className='fw-bold'>Ans: </span>React.createContext() function is all we need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
                <br />
                <h4>Q-03: Write something about useRef hook?</h4>
                <p><span className='fw-bold'>Ans: </span>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.
                    Syntax:
                    const refContainer = useRef(initialValue);
                    The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. </p>
            </div>

        </div>
    );
};

export default Blog;