import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faTree, faDiceD20, faCat, faLaptopCode } from '@fortawesome/free-solid-svg-icons'



function Header(){
    return (
        <div>
            <Container>
                <Row >
                    <Col sm="4" >
                        <Image fluid="md" roundedCircle alt="Headshot of Tabatha" src={require('../Assets/Img/headshot-crop.jpg')}></Image>
                    </Col>
                    <Col sm="8">
                    <h1>Tabatha Delane Young</h1>
                    <h2>Full Stack Developer</h2>
                    <h4>Portland Metro, Oregon</h4>
                    <h1> <FontAwesomeIcon icon={faCoffee} /><FontAwesomeIcon icon={faTree} /><FontAwesomeIcon icon={faDiceD20} /><FontAwesomeIcon icon={faCat} /><FontAwesomeIcon icon={faLaptopCode} /></h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )}

export default Header
