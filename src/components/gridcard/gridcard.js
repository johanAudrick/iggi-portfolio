import React from "react";
import {Card} from "react-bootstrap";

const GridCard = ({cardClass, children}) => {
    return (
        <Card className={`h-100 w-100 ${cardClass} border-0 rounded-4`}>
            {children}
        </Card>
    );
};

export default GridCard;