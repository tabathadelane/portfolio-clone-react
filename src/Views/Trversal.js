import React from 'react'
import { Image, Row, Col, Container } from 'react-bootstrap'



function Trversal(){
    return (
        <div>
            <Container className="project">
                <Row>
                    <Col className="center-col" md={{ span: 12, order: 1 }} xs={{ span: 12, order: 1 }} > <h1 className="p-3">Trversal</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="center-col" md={{ span: 8, order: 3 }} xs={{ span: 12, order: 2 }} >
                        <Image fluid="md" alt="Headshot of Tabatha" src={require('../Assets/Img/trversal-demo.gif')}></Image>
                    </Col>
                    <Col className="center-col" md={{ span: 4, order: 2 }} xs={{ span: 12, order: 3 }} >
                        <h4 className="p-2">An itenerary building web application - My bootcamp capstone.</h4>

                        <p>This app dynamically interacts with Google Maps to calculate the most up to date travel times between your selected locations. Start a trip and add the points of interest you would like to see each day. The app will keep track of the time needed throughout the day to travel between each place so you can realistically see how much you can fit into your trip and stay on schedule!</p>
                        <p>This is my capstone from PDX Code Guild. It is very much in an MVP state. I have listed the future plans for this project on the Github README linked below.</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="center-col" md={{ span: 8, order: 5 }} xs={{ span: 12, order: 4 }} >
                    <div><h3>Tech Stack:</h3></div>
                    <div>Django, DjangoRest, Javascript, Vue, CSS/HTML, Sass, Bootstrap</div>
                    </Col>
                    <Col className="center-col" md={{ span: 4, order: 4 }} xs={{ span: 12, order: 5 }} >
                    <div >
                    <a href="https://github.com/tabathadelane/trversal">View the Source Code on Github</a></div>
                    </Col>
                </Row>
        </Container>

        </div>
    )}

export default Trversal
