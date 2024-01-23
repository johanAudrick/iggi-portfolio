import React from "react";
import Draggable from "react-draggable";
import {Button, Card, CardBody, CardFooter, CardHeader, Col, Row} from "react-bootstrap";
import WhoAmIText from "../../assets/img/logo.png";

const AppWindowTwo = ({children, onClose, isView, title, logo, cardColor}) => {
    return (
        <>
            <Draggable handle=".app-card-header">
                <Card className={`app-card me-auto ms-auto ${isView ? "show" : "hide"} ${cardColor}`}>
                    <CardBody className="h-100 w-100 pt-0 pe-0 px-0 pb-4 position-relative">
                        <CardHeader className="app-card-header bg-transparent position-absolute p-0">
                            <Row className="w-100 app-header-p">
                                <Col className="d-flex pt-3">
                                    <Button className="circle-btn bg-red-close me-2" onClick={onClose}>
                                    </Button>
                                    <Button className="circle-btn bg-yellow-min me-2">
                                        {' '}
                                    </Button>
                                    <Button className="circle-btn bg-green-max">
                                        {' '}
                                    </Button>
                                </Col>
                                <Col xs="auto" className="text-light text-center">
                                </Col>
                                <Col className="d-flex justify-content-end">
                                </Col>
                            </Row>
                        </CardHeader>
                        {children}
                    </CardBody>
                </Card>
            </Draggable>
        </>
    )
};

export default AppWindowTwo;