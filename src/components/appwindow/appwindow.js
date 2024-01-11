import React, {useState} from "react";
import {Button, Col, Modal, Row} from "react-bootstrap";
import Draggable from "react-draggable";

const AppWindow = ({showState, closeState, children}) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const handleDrag = (e, ui) => {
        setPosition({ x: ui.x, y: ui.y });
    };
    return (
        <>
            <Modal show={showState} className="app-window-modal" centered>
                <Modal.Header className="app-window-header">
                    <Row className="w-100 align-items-center app-header-p">
                        <Col className="d-flex">
                            <Button className="circle-btn close-btn me-2" onClick={closeState}>
                            </Button>
                            <Button className="circle-btn minimize-btn me-2">
                                {' '}
                            </Button>
                            <Button className="circle-btn maximize-btn">
                                {' '}
                            </Button>
                        </Col>
                        <Col xs="auto" className="text-light text-center">
                            <div>Sample title</div>
                        </Col>
                        <Col  className="d-flex justify-content-end">
                        </Col>
                    </Row>
                </Modal.Header>
                <Modal.Body>
                    {children}
                </Modal.Body>
                <Modal.Footer>
                    <Button className="apple-mac-grey-btn" onClick={closeState}>
                        Close
                    </Button>
                    <Button className="apple-mac-blue-btn">
                        Next
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AppWindow;