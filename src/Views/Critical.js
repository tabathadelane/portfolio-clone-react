import React from 'react';
import { Image, Row, Col, Container } from 'react-bootstrap'

function Critical(){
    return (
        <div>
            <Container className="project">
                <Row>
                    <Col className="center-col" md={{ span: 12, order: 1 }} xs={{ span: 12, order: 1 }} > <h1 className="p-3">Critical Reactions!</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="center-col" md={{ span: 8, order: 3 }} xs={{ span: 12, order: 2 }} >
                        <Image fluid="md" alt="Headshot of Tabatha" src={require('../Assets/Img/crit-demo.gif')}></Image>
                    </Col>
                    <Col className="center-col" md={{ span: 4, order: 2 }} xs={{ span: 12, order: 3 }} >
                        <h4 className="p-2">Designed to be like a mock marketing site for my D&D Party.</h4>

                        <p>The inspiration is somewhere close to what a Real Estate or Insurance agent may use to sell customers on their service. Get to know us, read about our previous trials, customer testimonials, and more! The internet is the next big magical phenomenon to come to Faerun!</p>      
                        <p>I plan to add a blog section for my character (A bard,the story teller of the party.) to share her perspective while on the road. It is very much in an MVP state. I want to update the styling and deploy it to the world. There is much more info about this project and why I made the decisions I did in the Github README linked below.</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="center-col" md={{ span: 8, order: 5 }} xs={{ span: 12, order: 4 }} >
                    <div><h3>Tech Stack:</h3></div>
                    <div>Django, DjangoRest, Javascript, Vue, CSS/HTML, Sass, Bootstrap</div>
                    </Col>
                    <Col className="center-col" md={{ span: 4, order: 4 }} xs={{ span: 12, order: 5 }} >
                    <div >
                    <a href="https://github.com/tabathadelane/critical-reactions">View the Source Code on Github</a></div>
                    </Col>
                </Row>
        </Container>
        </div>
    )}

export default Critical

