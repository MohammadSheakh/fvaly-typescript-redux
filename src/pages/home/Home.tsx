//rsc
import React, { useEffect, useState } from "react";
import Banner from "../../components/home/Banner";
import Products from "../../components/home/Products";
import useAsync from "../../hooks/useAsync";

import { IProduct } from "../../Models/types.d";
import ProductService from "../../services/ProductService"; // API call korsi ei file e ....

const Home = () => {
    ////const [products, setProducts] = useState<IProduct[]>([] as IProduct[]);
    /**
     * amader ei API call onek jaygay kora lagbe .. ekhane jemon API call korse .. ekhane ami status o rakhi
     * nai .. amar api ki ekhon pending e ase .. naki thik thak moto kaj kortese .. ekhane eto kaj korte gele
     * 10 / 12 line code hoye jabe .. so ei data anar jonno jei code tuku likhsi .. eta aro boro hoito ../
     * ar ei same kaj amader ke aro onek jaygay korte hoito .. karon same data hoyto aro onek jaygay amara
     * anbo .. same api amra aro onek jaygay call korbo .. shekhaneo abar 10-15 line amra likhte chai na ..
     * 10-15 line amra abstraction level e niye jete chai .. mane oi ta amra ekta 📢 hook banay rakhbo
     * shei hook ta amra bar bar use korbo ..amader business logic o amra alada kore rekhe dibo ..
     *
     */

    ////useEffect(() => {
    ////ProductService.getProducts()
    ////.then((res) => setProducts(res)) // response kemon hobe .. sheta age
    ////.catch(); // error hoile ki hobe .. sheta catch e thakbe ..
    // thekei thik hoye jabe .. apatoto any

    // response er moddhe data tai ashtese ..
    ////});

    const { data, isLoading, isSuccess, isError } = useAsync(
        ProductService.getProducts
    );

    return (
        <div>
            <Banner />
            {isSuccess && (
                <Products
                    isError={isError}
                    isSuccess={isSuccess}
                    isLoading={isLoading}
                    products={data}
                />
            )}
            {/* 💥💥 ekhane isSuccess er check ta kora lagbe na  */}
            {/* <Products products={data} /> */}
            {/* ei nam e amar kono props banano nai .. ejonno warning dise  */}
            {/* jei products gula jabe ... tader upor map kore product gula show korbe */}
        </div>
    );
};

export default Home;

//amra wrapper component er moddhe api call korar try korbo . api call houar pore .. jei data gula
// ashlo .. shegula amra children e pathay dibo
