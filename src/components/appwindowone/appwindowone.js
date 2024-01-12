import React, {useState} from "react";
import {Button, Card, CardBody, CardFooter, CardHeader, Col, Row} from "react-bootstrap";
import Draggable from "react-draggable";

const AppWindowOne = ({children, onClose, isView, title}) => {

    return (
        <>
            <Draggable handle=".app-card-header">
                <Card className={`app-card me-auto ms-auto ${isView ? "show" : "hide"}`}>
                    <CardHeader className="app-card-header">
                        <Row className="w-100 align-items-center app-header-p">
                            <Col className="d-flex">
                                <Button className="circle-btn close-btn me-2" onClick={onClose}>
                                </Button>
                                <Button className="circle-btn minimize-btn me-2">
                                    {' '}
                                </Button>
                                <Button className="circle-btn maximize-btn">
                                    {' '}
                                </Button>
                            </Col>
                            <Col xs="auto" className="text-light text-center">
                                {title}
                            </Col>
                            <Col className="d-flex justify-content-end">
                            </Col>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        {children}
                    </CardBody>
                    <CardFooter className="app-card-footer d-flex justify-content-end">
                        <Button className="apple-mac-grey-btn me-3">
                            Close
                        </Button>
                        <Button className="apple-mac-blue-btn">
                            Next
                        </Button>
                    </CardFooter>
                </Card>
            </Draggable>
        </>
    );
};

export default AppWindowOne;