import React from 'react'
import { Image, Row, Col, Container } from 'react-bootstrap'



function Trversal(){
    return (
        <div>
            <Container>
                <Row>

                    <Col md={{ span: 12, order: 1 }} xs={{ span: 12, order: 1 }} > <h1>Title 1</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 8, order: 3 }} xs={{ span: 12, order: 2 }} >
                        <Image fluid="md" alt="Headshot of Tabatha" src={require('../Assets/Img/crit-demo.gif')}></Image>
                    </Col>
                    <Col md={{ span: 4, order: 2 }} xs={{ span: 12, order: 3 }} >Description 3</Col>
                </Row>
                <Row>
                    <Col md={{ span: 8, order: 5 }} xs={{ span: 12, order: 4 }} >tech 4</Col>
                    <Col md={{ span: 4, order: 4 }} xs={{ span: 12, order: 5 }} >link 5</Col>
                </Row>
        </Container>

        </div>
    )}

export default Trversal
