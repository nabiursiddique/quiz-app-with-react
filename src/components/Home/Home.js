import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const loaderData = useLoaderData();
    const quizTopics = loaderData.data;
    console.log(quizTopics);
    return (
        <div>
            <div className='home-header'>
                <h1 className='mt-5 mb-5'>Choose Your Quiz Topic</h1>
                {/* bootstrap grid card */}
                <div className='mt-5'>
                    <Row xs={1} md={2} className="g-4">
                        {Array.from(quizTopics).map((quizTopic, idx) => (
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                        <Card.Title>{quizTopic.id}</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Home;