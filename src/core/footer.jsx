import React from 'react';
import {Nav, Navbar, Button} from 'react-bootstrap';

class Footer extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" >
            © Copyright 2020. All Rights Reserved by Team Sammard
            <br />
                
                <div className="text-center">
                    <ul className="social mb-0 list-inline mt-3" >
                        <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                        <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                        <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </Navbar>
        );
    }
}
export default Footer;