import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../common/Product";
import { IProduct } from "../../Models/types.d"; /// 💥 { } ei ta na dile jhamela kore

interface IProps {
    products: IProduct[] | null; // ekhane products niye kaj hobe .. tai IProduct er array Data type hishebe nilam .. may be
    // ekta object ashbe .. shetar moddhe products nam e property thakte hobe ..
    // ei products ta ki ekta array na  ? products ta kisher array ? IProducts er array

    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
}

const Products = ({ products, isLoading, isSuccess, isError }: IProps) => {
    // amar ekhane jei props ashtese .. eta to ekta object ..
    // tar moddhe theke products ta destructure kore nilam ..
    console.log("products", products);
    return (
        <div className="my-5">
            <Container>
                <h2 className="mb-5">Latest Products</h2>
                {isLoading && (
                    <h4 className="text-center py-5">Loading.... </h4>
                )}
                {!isLoading && (
                    <Row>
                        {/* jehetu row flex box er jinish use kore ...className="gap-3"  */}
                        {/* row er moddhe products er moddhe map korte hobe  */}
                        {products?.map((product: IProduct) => (
                            <Product key={product._id} product={product} />
                        ))}

                        {/* <Product />
                    <Product />
                    <Product />
                    <Product /> */}
                    </Row>
                )}

                {isError && <h4 className="text-center py-5">Error.... </h4>}
                {isSuccess && (
                    <h4 className="text-center py-5">Success.... </h4>
                )}
            </Container>
        </div>
    );
};

export default Products;
