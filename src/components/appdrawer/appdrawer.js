import React, {useEffect, useState} from "react";
import {Col, Container, OverlayTrigger, Popover, PopoverBody, Row} from "react-bootstrap";

// App Icons
import WhoAmI from "../../assets/img/who-am-i.png";
import SkillsIOwn from "../../assets/img/skills-i-own.png";
import WorksIDid from "../../assets/img/works-i-did.png";
import ReachMe from "../../assets/img/reach-me.png";

import WhoAmICard from "../whoamicard/whoamicard";

const AppDrawer = () => {
    const [isWhoAmIOpen, setIsWhoAmIOpen] = useState(false);

    const toggleWhoAmI = () => {
        setIsWhoAmIOpen(!isWhoAmIOpen);
    };

    useEffect(()=> {
        console.log(isWhoAmIOpen)
    }, [isWhoAmIOpen])

    return (
        <>
            <WhoAmICard onClose={toggleWhoAmI} isView={isWhoAmIOpen} />
            <Container fluid className="app-drawer-container">
                <Row className="app-drawer">
                    <Col className="app-logo app-logo-title-right left">
                        <OverlayTrigger trigger={["hover", "focus"]}
                                        placement="top" overlay={<Popover id="popover-who-am-i">
                            <PopoverBody>
                                Who Am I?
                            </PopoverBody>
                        </Popover>} >
                            <img src={WhoAmI} alt="Left Logo" onClick={toggleWhoAmI}/>
                        </OverlayTrigger>

                    </Col>
                    <Col className="app-logo app-logo-title-left">
                        <OverlayTrigger  trigger={["hover", "focus"]}
                                        placement="top" overlay={<Popover id="popover-skills-i-own">
                            <PopoverBody>
                                Skills I Own
                            </PopoverBody>
                        </Popover>} >
                            <img src={SkillsIOwn} alt="Logo" />
                        </OverlayTrigger>
                    </Col>
                    <Col className="app-logo app-logo-title-right">
                        <OverlayTrigger trigger={["hover", "focus"]}
                                        placement="top" overlay={<Popover id="popover-works-i-did">
                            <PopoverBody>
                                Works I did
                            </PopoverBody>
                        </Popover>} >
                            <img src={WorksIDid} alt="Logo" />
                        </OverlayTrigger>
                    </Col>
                    <Col className="app-logo app-logo-title-left right">
                        <OverlayTrigger trigger={["hover", "focus"]}
                                        placement="top" overlay={<Popover id="popover-reach-me">
                            <PopoverBody>
                                Reach Me
                            </PopoverBody>
                        </Popover>} >
                            <img src={ReachMe} alt="Right Icon" />
                        </OverlayTrigger>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AppDrawer;