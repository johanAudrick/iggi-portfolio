import Layout from "../../components/layout/layout";
import {Button, Card, CardBody, CardFooter, CardHeader, Col, Row} from "react-bootstrap";
import Draggable, {DraggableCore} from "react-draggable";
import React from "react";

const Home = () => {
    const pageName = 'home';

    return (
        <>
            <Layout pageName={pageName}>
                <Draggable>
                    <Card className="app-window-modal">
                        <CardHeader className="app-window-header">
                            <Row className="w-100 align-items-center app-header-p">
                                <Col className="d-flex">
                                    <Button className="circle-btn close-btn me-2">
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
                                <Col className="d-flex justify-content-end">
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <h1>Here</h1>
                        </CardBody>
                        <CardFooter>
                            <Button className="apple-mac-grey-btn">
                                Close
                            </Button>
                            <Button className="apple-mac-blue-btn">
                                Next
                            </Button>
                        </CardFooter>
                    </Card>
                </Draggable>
            </Layout>
        </>
    );
};

export default Home;