import React from 'react'
import { Button, Col, Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap'
import classes from './Topbar.module.css'

interface TopbarProps {
}

const Topbar = (props: TopbarProps) => {
    return (
        <div className={classes.TopBar}>
            <Row style={{ width: '100%' }}>
                <Col xs={2}>Logo</Col>
                <Col xs={6}>
                    <Navbar>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto" style={{ fontWeight: 600, fontSize: 14 }}>
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Find a Locker</Nav.Link>
                                <Nav.Link href="#link">Size Guide</Nav.Link>
                                <Nav.Link href="#link">Location</Nav.Link>
                                <Nav.Link href="#link">Help Center</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
                <Col xs={4}>
                    <Navbar>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto" style={{ fontWeight: 600, fontSize: 14 }}>
                                <Nav.Link href="#home">My Account</Nav.Link>
                                <Nav.Link href="#link">080-188-0872</Nav.Link>
                                <Nav.Link href="#link"
                                    style={{ borderRadius: 20, color: '#ffffff', backgroundColor: '#ad9f2e' }}>
                                    PAY YOUR BILL</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </div>
    )
}

export default Topbar;