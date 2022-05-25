import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import IProduct from "../../Models/types";

interface IProps{
    product : IProduct[];
}

const baseUrl = process.env.REACT_APP_IMAGE_BASE_URL;

const Product = ({product}: IProps) => {
    const {name, image} = product;
    // 6 : 11 
    return (
        <div>
            <Col md={3} className="mb-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={baseUrl+ image}
                    />
                    {/* image gula onno jayga theke ashbe .. common url ta .env
                    file e ase .. er porer .. common url mane hocche .. 
                    REACT_APP_IMAGE_BASE_URL 
                    
                    */}
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Product;