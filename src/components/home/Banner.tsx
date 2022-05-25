//rsc
import React from "react";
import { Carousel, Col, Container, ListGroup, Row } from "react-bootstrap";

const Banner = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={3}>
                        <ListGroup>
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col lg={9} classname="mt-3 ">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://th.bing.com/th/id/R.b752a03d54ce8786a89a4a69b3b42718?rik=Mvzip3xrLJe7TA&pid=ImgRaw&r=0"
                                    alt="First slide"
                                    width="500px"
                                    height="400px"
                                />
                                
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://th.bing.com/th/id/R.30a0257d439d9f76fdd3303c8453f348?rik=VBABEUEuGjPYtg&pid=ImgRaw&r=0"
                                    alt="Second slide"
                                    width="500px"
                                    height="400px"
                                />

                                
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://th.bing.com/th/id/R.3ba2e794acd47cde2b8a773ef755f810?rik=8AEg4DKi8maiiw&riu=http%3a%2f%2fwww.ravepubs.com%2fwp-content%2fuploads%2f2017%2f05%2fbarco-cse800-017.png&ehk=VrTZAk6TgQFRqq8YMp8sV2X%2fg8%2fhksgc45Pi5MZS%2bvY%3d&risl=&pid=ImgRaw&r=0"
                                    alt="Third slide"
                                    width="500px"
                                    height="400px"
                                />

                                
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;
