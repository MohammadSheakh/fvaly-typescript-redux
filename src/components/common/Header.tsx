//rsc
import React from "react";
import {
    Button,
    Container,
    FormControl,
    InputGroup,
    Nav,
    Navbar,
} from "react-bootstrap";
import { FiPhoneCall, FiShoppingBag } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import { BsPhone } from "react-icons/bs";
import index from "../../assets/images/navbar/index.jpg";
import { BiSearch, BiUser } from "react-icons/bi";

const Header = () => {
    return (
        <div className="header__component">
            <div className="top-header py-2 bg-light border-bottom">
                <Container className="d-flex align-items-center justify-content-between">
                    {/* ul er default margin thake .. ekhon amader custom css likhar
                    proyojon hoise .. css er bodole amra scss use korbo .. sass may be .. 
                    https://create-react-app.dev/docs/adding-a-sass-stylesheet/
                    */}
                    <ul className="list-unstyled d-flex align-items-center gap-4">
                        <li>
                            <FiPhoneCall />{" "}
                            <a href="tel:015184198001">01518419801</a>
                        </li>
                        <li>
                            <FaRegEnvelope />{" "}
                            <a href="mail-to:mohammad.sheakh01@gmail.com">
                                mohammad.sheakh@gmail.com
                            </a>
                        </li>
                    </ul>
                    <div>
                        <BsPhone /> <a href="">Save Big on our app!</a>
                    </div>
                </Container>
            </div>
            <div className="middle-header">
                <Container>
                    <div className="d-flex align-items-center gap-5 py-3">
                        <img
                            className="branding"
                            src={index}
                            alt=""
                            width="120px"
                        />

                        <InputGroup>
                            <FormControl
                                className="border border-primary"
                                placeholder="Search Here..."
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="primary" id="button-addon2">
                                <BiSearch className="text-white" />
                            </Button>
                        </InputGroup>

                        <ul className="icon-list list-unstyled d-flex gap-3">
                            <li>
                                <FiShoppingBag />
                            </li>
                            <li>
                                <BiUser />
                            </li>
                            <li>
                                <BiUser />
                            </li>
                            <li>
                                <BiUser />
                            </li>
                        </ul>
                    </div>
                </Container>
            </div>

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Categories</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Newsfeed</Nav.Link>
                        <Nav.Link href="#help">Merchant Zone</Nav.Link>
                        <Nav.Link href="#pricing">Help</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
