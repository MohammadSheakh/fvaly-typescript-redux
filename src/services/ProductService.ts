// alada alada jei service gula ase .. shekhane object
// er cheye beshi class use korte beshi prefer kora hoy

// alada alada function na baniye class use korle .. 
// class er instance create kore rakhlam.. 
// oi instance ke export kore dile .. dot dile khub 
// shohoje amake suggest kore .. 

import requests from './httpService';
    class ProductService{
        // amader product related koyekta api ase ..
        // 4 ta alada alada amra object er method likhbo 
        getProducts() : Promise<any> { // IProduct type er hobe 
            // ekta promise return korbe .. 
            /// generic er moddhe ami bole dite pari ..
            // amar promise ta IProduct type er hobe .. 

            // httpService.ts theke jegula export korsilam
            // shegula re age import korbo .. 
            return requests.get('/product'); // amar banano get method
            // call korlam .. 
        }
        // amra product chaitesi .. product type er data
        // return kortese kina .. eta dekhar dorkar ase na amader ? 

        // product er type .. product er ekta interface likhbo
        // amra .. 
        // amader product er schema gula likhbo .. 
        // joto gula type hobe .. 

        getProductById(id:string) : Promise<any> {
        
            return requests.get(`/product/${id}`); 
            
        }

        addProduct(body:{}) : Promise<any> {
            // kon information add 
            return requests.post(`/product/`, body); 
            
        }
        updateProduct(id:string, body:{}) : Promise<any> {
            // kon product ta update korte chai .. shetar id
            // dite hobe .. updated document providde korte hobe .
            // mane body dite hobe . .. 
            return requests.post(`/product/${id}`, body); 
        }
        deleteProduct(id:string) : Promise<any> { 
            return requests.delete(`/product/${id}`); 
        }
    }

    // export korar shomoy instance create kore export
    // korte hobe .. 

    export default new ProductService();

    // store e api banaite chaile StoreService file create korbo