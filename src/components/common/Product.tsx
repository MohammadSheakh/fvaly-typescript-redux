import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { IProduct } from "../../Models/types"; /// 💥 { } ei ta na dile jhamela kore
import imageUrlParser from "../../utils/imageUrlParser";

interface IProps {
    product: IProduct; // ekhane product niye kaj hobe .. tai IProduct  Data type hishebe nilam .. may be
}

// const baseUrl = process.env.REACT_APP_IMAGE_BASE_URL;

const Product = ({ product }: IProps) => {
    const { name, image } = product;
    // 6 : 11
    return (
        <div>
            <Col md={3} className="mb-3">
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={imageUrlParser(image)} />
                    {/* image gula onno jayga theke ashbe .. common url ta .env
                    file e ase .. er porer .. common url mane hocche .. 
                    REACT_APP_IMAGE_BASE_URL 
                    */}
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>{name}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Product;
