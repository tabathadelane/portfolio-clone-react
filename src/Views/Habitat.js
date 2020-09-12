import React from 'react'
import { Image, Row, Col, Container } from 'react-bootstrap'



function Habitat(){
    return (
        <div>
            <Container className="project">
                <Row>
                    <Col className="center-col" md={{ span: 12, order: 1 }} xs={{ span: 12, order: 1 }} > <h1 className="p-3">Habit@</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="center-col" md={{ span: 8, order: 3 }} xs={{ span: 12, order: 2 }} >
                        <Image fluid="md" alt="Headshot of Tabatha" src={require('../Assets/Img/habitat-demo.gif')}></Image>
                    </Col>
                    <Col className="center-col" md={{ span: 4, order: 2 }} xs={{ span: 12, order: 3 }} >
                        <h4 className="p-2">A habit tracking application</h4>

                        <p>This project was built during a 1-day AWS Hackathon on a team of 5. I contributed by writing the python Lambda functions and assisting with CSS styling and logo design. </p>
                        <p>“Habitat” was created with the purpose to help users start good habits by keeping streaks. The goal was to use AWS to keep track of the streaks. If a user entered that they did their task that day, the Lambda would update the streak count in the database. Cloudwatch Events checked the time twice each day. In the evening, if the user hadn’t completed their task, it would trigger an SNS warning. At midnight, if they hadn't done it, it would erase the streak! </p>
                    </Col>
                </Row>
                <Row>
                    <Col className="center-col" md={{ span: 8, order: 5 }} xs={{ span: 12, order: 4 }} >
                    <div><h3>Tech Stack:</h3></div>
                    <div>Django, DjangoRest, Javascript, Vue, CSS/HTML, Sass, Bootstrap</div>
                    </Col>
                    <Col className="center-col" md={{ span: 4, order: 4 }} xs={{ span: 12, order: 5 }} >
                    <div >
                    <a href="https://github.com/tobyfee/habitat">View the Source Code on Github</a></div>
                    </Col>
                </Row>
        </Container>

        </div>
    )}

export default Habitat
