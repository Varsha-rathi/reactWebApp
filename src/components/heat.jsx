import React from 'react';
import { Card, Row , Col} from 'react-bootstrap';
import {heatdata} from "../constants/subsytemlist";

class Heat extends React.Component {
    render() {
        <h1 class="text-center text-uppercase">Heat Shield</h1>
        const list = heatdata.map((link) =>
            <Col xs={12} className="mb-3">
                <Card>
                    <Card.Img variant="top" src={link.icon} />
                    <Card.Body>
                        <Card.Title>{link.name}</Card.Title>
                        <Card.Text>
                            {link.text}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        );


        return (
            <Row>
                {list}
            </Row>
        );
    }
}
export default Heat;