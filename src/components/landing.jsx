import React from 'react';
import {Carousel, Jumbotron, Container, Row, Col} from 'react-bootstrap';
import { Transition } from 'react-transition-group';

class Landing extends React.Component {
    render() {
        const defaultStyle = {
            opacity: 0
        };
    
        const transitionStyles = {
            entering: { opacity: 0},
            entered: { opacity: 1}
        };
        return (
            <div>
                <Carousel className="homeslider">
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={'assets/images/home/rocket1.jpg'}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={'assets/images/home/rocket-launch-693192_1280.jpg'}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Jumbotron fluid className="landing">
                    <Container className="text-center">
                    <Row>
                        <Col>
                        <Transition in={true} timeout={900} appear>

                                        {(state) => (
                                        
                                        <Col xl={12} xs={12} className="border rounded p-3" style={{
                                            ...defaultStyle,
                                            ...transitionStyles[state],
                                            transition: `900ms ease-in`
                                        }}>
                                            
                                            <div className="bg-white rounded shadow-sm py-5 px-4">
                                                <h6 class="text-center text-uppercase">Overview</h6>
                                                <hr class="dashed"></hr>
                                                Much like Semantic UI, you can use Bootstrap — a great responsive mobile-first CSS framework — to build an aesthetically pleasing app in much less time than if you would write your own CSS. We want components, grids and pretty buttons after all!

                                                <Row className="mt-3 p-3">
                                                    <Col xs={6}>
                                                        <img src={'./assets/images/home/1.jpg'} className="img-fluid rounded"/>
                                                    </Col>
                                                    <Col xs={6}>
                                                        <video className="videocs" controls>
                                                            <source src={'./assets/video/animation.mp4'} type="video/mp4"></source>
                                                        </video>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    )}
                                    </Transition>
                        </Col>
                    </Row>
                    
                    
                    </Container>

                </Jumbotron>
                
                <br/>
                
            </div>
        );
    }
}
export default Landing;