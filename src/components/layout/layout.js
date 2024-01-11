import React from "react";
import {Container} from "react-bootstrap";
import AppDrawer from "../appdrawer/appdrawer";
import TopBar from "../topbar/topbar";

const Layout = ({children, pageName}) => {
    return (
        <>
            <Container fluid className="wrapper">
                <TopBar />
                {children}
                <AppDrawer />
            </Container>
        </>
    );
};

export default Layout;