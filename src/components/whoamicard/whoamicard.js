import React from "react";
import AppWindowTwo from "../appwindowtwo/appwindowtwo";
import WhoAmIText from "../../assets/img/who-am-i-text.png";
import IggiAvatar from "../../assets/img/iggi-avatar.png";
import IggiAvatar2 from "../../assets/img/iggi-avatar-2.png";
import MockScreen1 from "../../assets/img/mock/mock-screen-1.png";
import MockScreen2 from "../../assets/img/mock/mock-screen-2.png";
import MockScreen3 from "../../assets/img/mock/mock-screen-3.png";
import FigmaLogo from "../../assets/img/figma-logo.png";
import PsLogo from "../../assets/img/ps-logo.png";
import AiLogo from "../../assets/img/ai-logo.png";
import XdLogo from "../../assets/img/xd-logo.png";
import BehanceLogo from "../../assets/img/behance.png";
import DribbleLogo from "../../assets/img/dribble.png";
import ACCLogo from "../../assets/img/adobe-creative-cloud.png";
import LinkedinLogo from "../../assets/img/linkedin.png";
import {Button, Col, Row} from "react-bootstrap";
import GridCard from "../gridcard/gridcard";

const WhoAmICard = ({isView, onClose}) => {
    return (
        <>
            <AppWindowTwo isView={isView} onClose={onClose} logo={WhoAmIText} cardColor="bg-light-abstract">
                <Row className="justify-content-center align-items-center">
                    <Col xs={12} className="text-center">
                        <img src={WhoAmIText} className="app-card-logo"/>
                    </Col>
                </Row>
                <Row className="p-2r h-75 app-card-body">
                    <Col xs={12} sm={4} className="d-flex flex-column">
                        <Row className="flex-grow-1 mb-3">
                            <Col xs={12}>
                                <GridCard cardClass="bg-grey box-shadow-1 projects">
                                    <div className="text-grey ff-inconsolata text-title m-0">Projects</div>
                                    <div className="h-100 w-100 mock-screens-div overflow-hidden text-center">
                                        <img src={MockScreen1} className="mock-screen-1"/>
                                        <img src={MockScreen2} className="mock-screen-2"/>
                                        <img src={MockScreen3} className="mock-screen-3"/>
                                    </div>
                                </GridCard>
                            </Col>
                        </Row>
                        <Row className="flex-grow-1">
                            <Col xs={12}>
                                <GridCard cardClass="bg-grey box-shadow-1"/>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={4} className="d-flex flex-column h-100">
                        <GridCard cardClass="bg-grey box-shadow-1 about-me pb-0 p-2">
                            <div className="ff-inconsolata text-center text-grey fs-card-text">Hi, I'm <span
                                className="ff-caveat fs-30">Iggi</span>,
                                a passionate and innovative UI/UX designer
                                eager to embark on a creative journey in the digital realm.
                                Armed with a fresh perspective and a keen eye for user-centric
                                design, I aim to transform ideas into seamless and visually
                                compelling experiences that captivate and engage users.
                            </div>
                            <div className="h-200 overflow-hidden text-center big-avatar-div">
                                <img src={IggiAvatar} alt="Iggi Avatar" className="big-avatar"/>
                            </div>
                        </GridCard>
                    </Col>
                    <Col xs={12} sm={4} className="d-flex flex-column mt-xs-2">
                        <Row className="flex-grow-1 mb-3">
                            <GridCard cardClass="bg-grey box-shadow-1 softwares pb-0 p-2">
                                <div className="text-grey text-center ff-inconsolata text-hover-hide m-0">Softwares</div>
                                <div className="mini-fade-logos d-flex justify-content-center align-items-center">
                                    <img src={FigmaLogo} height={50} alt="Figma" className="mx-2"/>
                                    <img src={AiLogo} height={50} alt="Adobe Illustrator" className="mx-2"/>
                                    <img src={PsLogo} height={50} alt="Adobe Photoshop" className="mx-2"/>
                                    <img src={XdLogo} height={50} alt="Adobe XD" className="mx-2"/>
                                </div>
                            </GridCard>
                        </Row>
                        <Row className="flex-grow-1 mb-3">
                            <GridCard cardClass="bg-grey box-shadow-1 social pb-0 p-2">
                                <h4 className="text-grey text-center ff-inconsolata text-hover-hide m-0">Portfolio</h4>
                                <div className="mini-fade-logos d-flex justify-content-center align-items-center">
                                    <img src={BehanceLogo} height={50} alt="Figma" className="mx-2"/>
                                    <img src={DribbleLogo} height={50} alt="Adobe Illustrator" className="mx-2"/>
                                    <img src={ACCLogo} height={50} alt="Adobe Photoshop" className="mx-2"/>
                                    <img src={LinkedinLogo} height={50} alt="Adobe XD" className="mx-2"/>
                                </div>
                            </GridCard>
                        </Row>
                        <Row className="flex-grow-1">
                            <GridCard cardClass="bg-grey box-shadow-1 resume pb-0 p-2">
                                <h4 className="text-grey text-center ff-inconsolata text-hover-hide m-0">Explore Me</h4>
                                <div className="resume-avatar d-flex justify-content-center">
                                    <Button className="download">
                                        <svg xmlns="http://www.w3.org/2000/svg"  width="700px" height="700px" viewBox="0 0 40 48" id="android">
                                            <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z" />
                                            <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                                        </svg>
                                        <span>Download CV</span>
                                    </Button>
                                    <img src={IggiAvatar2} height={100} alt="Iggi Avatar 2" className="mx-2"/>
                                </div>
                            </GridCard>
                        </Row>
                    </Col>
                </Row>
            </AppWindowTwo>
        </>
    );
};

export default WhoAmICard;