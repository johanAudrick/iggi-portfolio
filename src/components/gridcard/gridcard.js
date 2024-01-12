import React from "react";
import {Card} from "react-bootstrap";

const GridCard = ({cardClass}) => {
    return (
        <Card className={`h-100 w-100 ${cardClass} border-0 rounded-4 p-2`}>
            <h1></h1>
        </Card>
    );
};

export default GridCard;