import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { Transition } from 'react-transition-group';
import Probe from './probe';
import Heat from "./heat";



class Carrierview extends React.Component {
    render() {
        const duration = 800;

        const defaultStyle = {
            transition: `all ${duration}ms ease`,
            opacity: 0,
            padding: 20,
            display: "inline-block",
            position: "absolute",
        };

        const transitionStyles = {
            entering: { opacity: 0, left: '0px' },
            entered: { opacity: 1, left: '10%' }
        };

        return (
            <div>
                <Jumbotron fluid className="payload">
                    <Container className="text-center">
                        <Transition in={true} timeout={duration} appear>
                            {(state) => (
                                <div
                                    style={{
                                        ...defaultStyle,
                                        ...transitionStyles[state]
                                    }}
                                >
                                    <h3>Payload Subsystem Design</h3>
                                </div>
                            )}
                        </Transition>
                        
                        <br />

                    </Container>


                </Jumbotron>
                <Container>
                <Probe />
                <Heat />

                </Container>
            
            </div>
        );
    }
}
export default Carrierview ;