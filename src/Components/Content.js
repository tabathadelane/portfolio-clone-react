import React from 'react'
import {Link} from "react-router-dom";
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';


function Content(){
    return (
        <div>
        <Navbar collapseOnSelect expand="sm" bg="light"  >
            <Navbar.Brand>Learn More:</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" ></Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav" >
                
                <Nav className="ml-auto">
                    <Nav.Item className="p-2">
                        <Link to="/" >About</Link>
                    </Nav.Item>
                    <Nav.Item className="p-2">
                        <Link to="/Contact" >Contact</Link>
                    </Nav.Item>

                    <NavDropdown className="justify-content-end" title="Projects"  id="collasible-nav-dropdown">

                        <NavDropdown.Item>
                            <Link to="/Trversal" >Trversal</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/Habitat" >Habitat</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/Vgct" >VGCT</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/Critical" >Critical</Link>
                        </NavDropdown.Item>

                    </NavDropdown>


                </Nav>
            </Navbar.Collapse>
        </Navbar>


        </div>
    )}

export default Content
