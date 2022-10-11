import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './Cards.css'

const Cards = ({ quizTopics }) => {
    return (
        <div className='my-5  container'>
            <Row xs={1} md={2} className="g-4">
                {Array.from(quizTopics).map((quizTopic, idx) => (
                    <Col>
                        <Card className='mx-auto bg-dark text-white' style={{ width: '25rem' }}>
                            <Card.Img variant="top" src={quizTopic.logo} />
                            <Card.Body className='border-top'>
                                <Card.Title>{quizTopic.name}</Card.Title>
                                <Card.Text className='d-flex justify-content-between'>
                                    <Button variant="light" className='px-5'>Start</Button>{' '}
                                    Total Quiz:{quizTopic.total}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Cards;