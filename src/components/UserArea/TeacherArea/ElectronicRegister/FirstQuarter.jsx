import React from 'react'
import { useState } from 'react';
import { Container, Row, Col, Modal, Form, Button } from 'react-bootstrap';

const FirstQuarter = (dataFirstQuarter) => {
    console.log("primo quadrimestre", dataFirstQuarter);
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow() {
        setFullscreen();
        setShow(true);
    }
    return (
        <>
            
                <Button className="me-2 mb-2" onClick={() => handleShow()}>
                    Primo Quadrimestre
                    
                </Button>
            
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>STUDENTE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col className='border 1' xs={3} md={3}>
                                ARGOMENTI
                            </Col>
                            <Col className='border 1' xs={3} md={3}>
                                SCRITTO
                            </Col>
                            <Col className='border 1' xs={3} md={3}>
                                ORALE
                            </Col>
                            <Col className='border 1' xs={3} md={3}>
                                MEDIA
                            </Col>
                        </Row>
                        <Row>
                            <Col className='border 1' xs={3} md={3}>
                                <Form>
                                    <Form.Control as="textarea" />
                                </Form>
                            </Col>
                            <Col className='border 1' xs={3} md={3}>
                                <Form>
                                    <Form.Control as="textarea" />
                                </Form>
                            </Col>
                            <Col className='border 1' xs={3} md={3}>
                                <Form>
                                    <Form.Control as="textarea" />
                                </Form>
                            </Col>
                            <Col className='border 1' xs={3} md={3}>
                                <Form>
                                    <Form.Control as="textarea" />
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                    <Button variant="secondary">
                            invio
                        </Button>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default FirstQuarter