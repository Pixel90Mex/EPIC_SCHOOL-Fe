import React from 'react'
import { useState } from 'react';
import { Container, Row, Col, Modal, Form, Button } from 'react-bootstrap';
import useDecodedSession from "../../../../hooks/useDecodedSession";
import { Toast } from "../../../../utilities/notification";
import { Toaster } from "react-hot-toast";

const FirstQuarter = ({ Student }) => {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    //per prelevare materia
    const decode = useDecodedSession();

    //stati per form
    const [orale, setOrale] = useState(null)
    const [scritto, setScritto] = useState(null)

    //toast
    const successToast = new Toast("Voto registrato!");
    const errorToast = new Toast("Errore durante l'invio dei dati!");

    const handlePatch = async () => {
        var contentBody = null
        if (orale !== null) {
            contentBody = {
                quad: "primo_quadrimestre",
                mat: decode.school_subject,
                type: "orale",
                value: Number(orale)
            }
        } else contentBody = {
            quad: "primo_quadrimestre",
            mat: decode.school_subject,
            type: "scritto",
            value: Number(scritto)
        }
        try {
            const data = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/student/patchVote/${Student._id}`, {
                method: 'PATCH',
                body: JSON.stringify(contentBody),
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const response = await data.json();
            if (response.statusCode !== 200) {
                errorToast.error()
            } else {
                resetFields();
                successToast.success()
            }
        } catch (error) {
            console.log(error)
        }
    }
    const resetFields = () => {
        setOrale("");
        setScritto("")
    }
    function handleShow() {
        setFullscreen();
        setShow(true);
    }
    const handleOrale = (e) => {
        setOrale(e.target.value);
    }
    const handleScritto = (e) => {
        setScritto(e.target.value);
    }
    return (
        <>
            <div>
                <Toaster position="top-center" reverseOrder={false} />
            </div>
            <Button variant="outline-dark" className="me-2 mb-2 w-50" onClick={() => handleShow()}>
                Inserisci valutazione
            </Button>
            <Modal centered show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header className='' style={{ backgroundColor: '#cdcdcd', color: '#3c3c3c', border: 'none' }} closeButton>
                    <Modal.Title>{Student.name + ' ' + Student.surname + ' - ' + decode.school_subject}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#f8f9fa' }}>
                    <Container>
                        <Row>
                            <Col xs={6} md={6}>
                                <Form>
                                    <Form.Control autoFocus placeholder='orale' value={orale} onChange={handleOrale} />
                                </Form>
                            </Col>
                            <Col xs={6} md={6}>
                                <Form>

                                    <Form.Control autoFocus placeholder='scritto' value={scritto} onChange={handleScritto} />
                                </Form>
                            </Col>

                        </Row>
                    </Container>
                    <Button variant="outline-dark" className='mt-3' onClick={handlePatch}>
                        invio
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default FirstQuarter