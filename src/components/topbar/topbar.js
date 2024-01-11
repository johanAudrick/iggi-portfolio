import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {getShortDay, getTime} from "../../utils/generalutil";
import LogoMin from "../../assets/img/logo-sm.png";
import {Link} from "react-router-dom";

const TopBar = () => {
    const [currentTime, setCurrentTime] = useState(getTime());
    const currentDay = getShortDay();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(getTime());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <>
            <Container fluid className="top-bar">
                <Row className="d-flex">
                    <Col xs="auto" className="mr-auto pt-1">
                        <Link to={"/"}><img src={LogoMin} className="min-logo"/></Link>
                    </Col>
                    <Col xs="auto" className="ms-auto pt-2">
                        <p className="top-bar-date">{currentDay} {' '} {currentTime}</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default TopBar;