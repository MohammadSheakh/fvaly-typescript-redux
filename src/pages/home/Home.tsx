//rsc
import React, { useEffect, useState } from "react";
import Banner from "../../components/home/Banner";
import Products from "../../components/home/Products";

import IProduct from "../../Models/types.d";
import ProductService from "../../services/ProductService";

const Home = () => {
    const [products, setProducts] = useState<IProduct[]>([] as IProduct[]);
    
    useEffect(() => {
        ProductService.getProducts()
        .then(res => setProducts(res)) // response kemon hobe .. sheta age 
        .catch(); // error hoile ki hobe .. sheta catch e thakbe .. 
        // thekei thik hoye jabe .. apatoto any 

        // response er moddhe data tai ashtese .. 
    })
    
    return (
        <div>
            <Banner/>
            <Products products={products}/> 
            {/* ei nam e amar kono props banano nai .. ejonno warning dise  */}
            {/* jei products gula jabe ... tader upor map kore product gula show korbe */}
        </div>
    );
};

export default Home;

//amra wrapper component er moddhe api call korar try korbo . api call houar pore .. jei data gula
// ashlo .. shegula amra children e pathay dibo
