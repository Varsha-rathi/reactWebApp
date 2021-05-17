import React from 'react';
import {Carousel, Jumbotron, Container, Row, Col} from 'react-bootstrap';

import { Transition } from 'react-transition-group';
class Mission extends React.Component {
    render() {
        const defaultStyle = {
            opacity: 0
        };
    
        const transitionStyles = {
            entering: { opacity: 0,top: "0px"},
            entered: { opacity: 1, top: "5%"}
        };
        return (
            <div>
                <Jumbotron fluid className="team">
                    <Container className="text-center">
                        <Transition in={true} timeout={duration} appear>
                            {(state) => (
                                <div
                                    style={{
                                        ...defaultStyle,
                                        ...transitionStyles[state]
                                    }}
                                >
                                    <h3>Meet Our Team</h3>
                                    
                                </div>
                            )}
                        </Transition>
                        <br />
                    </Container>
                </Jumbotron>
                <Container>
                        <Teamview />
                </Container>
            </div>
            <div>
            <Jumbotron fluid className="mission">

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
                                            </div>
                                        </Col>
                                    )}
                                    </Transition>
                        </Col>
                    </Row>
                    
                    
                    </Container>

                </Jumbotron>
                </div>
        );
    }
}
export default Mission;