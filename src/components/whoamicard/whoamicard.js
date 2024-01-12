import React from "react";
import AppWindowTwo from "../appwindowtwo/appwindowtwo";
import WhoAmIText from "../../assets/img/who-am-i-text.png";
import {Button, Col, Row} from "react-bootstrap";
import GridCard from "../gridcard/gridcard";

const WhoAmICard = ({isView, onClose}) => {
    return (
        <>
            {/*<AppWindowOne isView={isView} onClose={onClose} title="Who Am I">*/}
            {/*    <h1 className="text-light">Varatas Mama Drrr...</h1>*/}
            {/*</AppWindowOne>*/}
            <AppWindowTwo isView={isView} onClose={onClose} logo={WhoAmIText} cardColor="bg-light-abstract">
                <Row className="justify-content-center align-items-center">
                    <Col xs={12} className="text-center">
                        <img src={WhoAmIText} className="app-card-logo"/>
                    </Col>
                </Row>
                <Row className="p-3 h-75">
                    <Col xs={4} className="d-flex flex-column">
                        <GridCard cardClass="bg-blue-prime opacity-75" />
                    </Col>
                    <Col xs={4} className="d-flex flex-column">
                        <Row className="flex-grow-1 mb-3">
                                <GridCard cardClass="bg-blue-secondary" />
                        </Row>
                        <Row className="flex-grow-1 mb-3">
                            <GridCard cardClass="bg-blue-shade" />
                        </Row>
                        <Row className="flex-grow-1">
                            <GridCard cardClass="bg-blue-tint" />
                        </Row>
                    </Col>
                    <Col xs={4} className="d-flex flex-column">
                                <Row className="flex-grow-1 mb-3">
                                    <Col xs={12}>
                                        <GridCard cardClass="bg-lavendar" />
                                    </Col>
                                </Row>
                        <Row className="flex-grow-1">
                            <Col xs={12}>
                                <GridCard cardClass="bg-blue-prime" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </AppWindowTwo>
        </>
    );
};

export default WhoAmICard;