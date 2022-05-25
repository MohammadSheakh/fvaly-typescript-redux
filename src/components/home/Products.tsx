import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Product from '../common/Product';
import IProduct from "../../Models/types.d";

interface IProps{
    products : IProduct[];
}

const Products = ({products} : IProps) => {
    return (
        <div className="my-5">
            <Container>
                <h2  className="mb-5">Latest Products</h2>

                <Row > 
                    {/* jehetu row flex box er jinish use kore ...className="gap-3"  */}
                    {/* row er moddhe products er moddhe map korte hobe  */}
                    {
                        products.map((product:IProduct) => (<Product key={product._id} product={product}/>))
                    }

                    
                    {/* <Product />
                    <Product />
                    <Product />
                    <Product /> */}

                </Row>
            </Container>


        </div>
    );
};

export default Products;