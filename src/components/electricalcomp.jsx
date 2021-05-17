import React from 'react';
import { Jumbotron, Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import { Transition } from 'react-transition-group';
import { elecomp , batteries, elecompaccess} from '../constants/subsystems';

class Electricalcomp extends React.Component {
    render() {
        const duration = 800;

        const defaultStyle = {
            transition: `all ${duration}ms ease`,
            opacity: 0
        };

        const transitionStyles = {
            entering: { opacity: 0 },
            entered: { opacity: 1}
        };

        return (
            <div>
                <Jumbotron fluid className="page1">
                    <Container className="text-center">
                        <Transition in={true} timeout={duration} appear>
                            {(state) => (
                                <div
                                    style={{
                                        ...defaultStyle,
                                        ...transitionStyles[state]
                                    }}
                                >
                                    <h3>Electrical Component Subsystem</h3>
                                </div>
                            )}
                        </Transition>
                        <br />
                    </Container>
                </Jumbotron>
                <Container>
                <Row>
                                <Transition in={true} timeout={900} appear>
                                        {(state) => (

                                            <Col xl={12} xs={12} className="border rounded p-3 mb-3" style={{
                                                ...defaultStyle,
                                                ...transitionStyles[state],
                                                transition: `900ms ease-in`
                                            }}>
                                                <div className="bg-white rounded shadow-sm py-3 px-4 mb-4">
                                                    <h6 class="text-center text-uppercase">Microcontroller </h6>
                                                    <hr class="dashed"></hr>
                                                    <Row>
                                                    
                                                            <Col xs={12} className="mb-3 d-flex" noGutters={true}>
                                                                <Row className="border m-2 p-4">
                                                                    <Col xs={8}>
                                                                        <h5>Arduino nano</h5>
                                                                        This servo motor will be used to release the payload from the carrier, release the heatshield from the payload and to also deploy the parachute. Also, it will be used to control the tail of the carrier to change directions and perform helical manoeuvre.
                                                                    </Col>
                                                                    <Col xs={4}>
                                                                        <img src={'./assets/images/home/2.jpg'}/>
                                                                    </Col>
                                                                    
                                                                </Row>
                                                            </Col>
                                                    </Row>
                                                </div>
                                            
                                                <div className="bg-white rounded shadow-sm py-3 px-4 mb-4">
                                                    <h6 class="text-center text-uppercase">Sensor Subsystem</h6>
                                                    <hr class="dashed"></hr>
                                                    <Carousel id="multi-item-example">
                                                    
                                                    {
                                                        elecomp.map((link) =>
                                                            <div className="carousel-item">
                                                                <Row className="border m-2 p-4">
                                                                    <Col xs={3}>
                                                                        <img src={link.icon} class="float-right"/>
                                                                    </Col>
                                                                    <Col xs={8}>
                                                                        <h5>{link.name}</h5>
                                                                        {link.text}
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        )
                                                    }
                                                    
                                                    </Carousel>
                                                
                                                
                                                </div>
                                                
                                                <div className="bg-white rounded shadow-sm py-3 px-4 mb-4">
                                                    <h6 class="text-center text-uppercase">Batteries </h6>
                                                    <hr class="dashed"></hr>
                                                    <Row>
                                                    {
                                                        batteries.map((link) =>
                                                            <Col xs={6} className="mb-3 d-flex" noGutters={true}>
                                                                <Row className="border m-2">
                                                                    <Col xs={4}>
                                                                        <img src={link.icon}/>
                                                                    </Col>
                                                                    <Col xs={8}>
                                                                        <h5>{link.name}</h5>
                                                                        {link.text}
                                                                    </Col>
                                                                </Row>
                                                                {/* <Card className="flex-fill subcardimg">
                                                                    <Card.Img variant="top" src={link.icon} className="img-fluid"/>
                                                                    <Card.Body>
                                                                        <Card.Title></Card.Title>
                                                                        <Card.Text></Card.Text>
                                                                    </Card.Body>
                                                                </Card> */}
                                                            </Col>
                                                        )
                                                    }
                                                    </Row>
                                                </div>
                                            
                                                <div className="bg-white rounded shadow-sm py-3 px-4 mb-4">
                                                    <h6 class="text-center text-uppercase">Accessories</h6>
                                                    <hr class="dashed"></hr>
                                                    <Row>
                                                    {
                                                        elecompaccess.map((link) =>
                                                            <Col xs={3} className="mb-3 d-flex" noGutters={true}>
                                                                <Card className="flex-fill subcardimg">
                                                                    <Card.Img variant="top" src={link.icon} className="img-fluid"/>
                                                                    <Card.Body>
                                                                        <Card.Title>{link.name}</Card.Title>
                                                                        <Card.Text>{link.text}</Card.Text>
                                                                    </Card.Body>
                                                                </Card>
                                                            </Col>
                                                        )
                                                    }
                                                    </Row>
                                                </div>
                                               
                                            </Col>
                                        )}
                                    </Transition>
                            </Row>
                </Container>
            </div>
        );
    }
}
export default Electricalcomp;