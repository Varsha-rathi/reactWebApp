import React from 'react';
import { Card, Row , Col} from 'react-bootstrap';
import {wing} from "../constants/subsytemlist";

class Wing extends React.Component {
    render() {
        const list = wing.map((link) =>
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
            <h1 class="text-center text-uppercase">Wing </h1>
                {list}
            </Row>
        );
    }
}
export default Wing;