import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { Transition } from 'react-transition-group';
import Carrier from './carrier';
import Wing from "./wing";



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
                <Jumbotron fluid className="carrier">
                    <Container className="text-center">
                        <Transition in={true} timeout={duration} appear>
                            {(state) => (
                                <div
                                    style={{
                                        ...defaultStyle,
                                        ...transitionStyles[state]
                                    }}
                                >
                                    <h3>Carrier Subsystem Design</h3>
                                </div>
                            )}
                        </Transition>
                        
                        <br />

                    </Container>


                </Jumbotron>
                <Container>
                <Carrier />
                <Wing />

                </Container>
            </div>
        );
    }
}
export default Carrierview ;