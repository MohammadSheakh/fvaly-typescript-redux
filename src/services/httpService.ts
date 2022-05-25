// extension ts dilam.. karon . ekhane kono jsx thakbe na ..
// amra ekhon chobi gula import kora shuru kori ..  
// website e gia ... axios instance nam e ekta option er 
// moddhe jete hobe .. 
import axios, { Axios, AxiosResponse } from 'axios';
// er pore amra axios er instance create korbo .. 

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 15000, // amader desh er net er obostha kharap
    // tai time ektu baray dilam 
    
  });

// ekhon amra ei instance use korbo .. 

// get 
const getProducts = () => instance.get('/product')
.then(response => response.data.data) // ek data axios er
// convention // arekta back-end developer theke paisi

// ei function ta export kore dilei .. ei function call 
// korle ami direct data pabo .. 

////////////////// //
const get = (url:string ) => {
    // eta common .. generic type er get hobe .. eta dia 
    // product get korte paren .. store get korte paren .. 
    // onek jinish get korte paren .. 
    return instance.get(url)
    .then(responseBody)
    // ekhon ami product get korte chaile .. product function
    // er moddhe ei get ta call kore dibo .. 
}

// ekhon post er jonno function likhbo 
const post = (url:string, body:object ) => {
    // ekta url e post korbo .. ar jei jinish post korbo ..
    // sheta ke ki bole.. body bole na 

    return instance.get(url, body)
    .then(responseBody)
}


// ekhon update er jonno function likhbo 
const patch = (url:string, body:object ) => {
    // ekta url e post korbo .. ar jei jinish post korbo ..
    // sheta ke ki bole.. body bole na 

    return instance.patch(url, body)
    .then(responseBody)
}

// ekhon amra delete er jonno ekta create korbo .. 
const _delete = (url:string) => {
    // delete korar shomoy shudhu url ta pathailei cholbe ..
    return instance.delete(url)
    .then(responseBody)
}

// .then er pore callback function ta shobai ke dhoray dibo .. 
// jehetu amader prottek bar repeat kora lagtese .. jinish ta 

const responseBody = (response : AxiosResponse) => response.data.data;

// requests nam e ekta object create korlam ekhane ..
const requests = {
    get : (url:string ) => {
        return instance.get(url)
        .then(responseBody)
    },
    post : (url:string, body:object ) => {
        return instance.get(url, body)
        .then(responseBody)
    },
    patch : (url:string, body:object ) => {
        return instance.patch(url, body)
        .then(responseBody)
    },
    delete : (url:string) => {
        return instance.delete(url)
        .then(responseBody)
    }
}

export default requests;