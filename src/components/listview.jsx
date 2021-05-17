import React from 'react';
import { Card, Row, Col} from 'react-bootstrap';
import list from '../constants/list';

class Listview extends React.Component {
    render() {
        const listItems = list.map((link) =>
        <Col xs={6} className="mb-3 d-flex" noGutters={true}>
        <Card className="flex-fill">
            <Card.Img variant="top" src={link.imgpath}/>
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
                        {listItems}
                    </Row>
        );
    }
}
export default Listview;