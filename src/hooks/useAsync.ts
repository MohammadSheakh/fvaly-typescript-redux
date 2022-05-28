// api call er jonno amra jei hook ta banabo ..  oi hook tar nam amra dibo .. useAsync.. 

// asyncronous jinish pati handle korar jonno .. 
// hook gula amader normal component er moto .. hook jsx return kore na . return kore business logic
// kono function .. erokom arki .. kichu data, kichu value , kichu function amra return korbo 
// jsx ba ui related kono kichu amra return korbo na .. 
import React, { useEffect, useState } from 'react';

// custom hook bananor naming convention .. use dia nam shuru korte hoy 
/**
 * custom hook hocche emon jinish .. jegular moddhe amra react er onnanno hook re kaje lagaiya .. 
 * amra nijeder moto customize kichu ekta banay felte parbo .. 
 */

// amra ekta type banabo .. amader nijeder .. 
type StatusType = 'idle' | 'pending' | 'success' | 'error' ;
const useAsync = <T> (asyncFunction: () => Promise<T>) => {
    /// asyncFunction ba promise o bolte partam .. karon ek ek shomoy ek ek kaj korbe .. 
    // jetar type hobe function .. () => erokom dia bole dilam .. function .. ekhon ei function ta ki return
    // korbe .. Promise return  korbe .. kon type er data Promise resolve korbe ? T Type er data 

    // kon type er data rakhbo .. sheta ekhon ami jani na .. kokhon jante chabo ? .. kokhon keo amader 
    // ei hook ta use korbe .. tokhon amra jante chabo  .. .  ejonno 💥Generic use korbo .. 
    const [data, setData] = useState<T | null >(null);
    // api er status gula rakhar jonno o amader state lagbe .. mane amader api gula ki ekhon sending naki
    // pending status e ase .. error khise .. naki success hoise .. eta rakhar jonno amader arekta state lagbe
    const [status , setStatus ] = useState<StatusType>('idle');
    // API call korar ager dhap hocche idle .. jokhon api call hocche tokhon pending, response diye dile 
    // success .. error khaile error ..  amar api kon stage e ase .. sheta amake jante hobe ,., 

    // error khaile error gula rakhar jonno error er jei message .. sheta backend theke amader ke dibe .. 
    // sheta rakhar jonno arekta state amader ke banaite hobe .. 
    const [error, setError] = useState<string | null >(null);

    // data call  korar jonno lage .. useEffect 
    useEffect(() => {
        // useEffect chola shuru korlei .. amar status ta change kore ami bole dite chai .. vai eita pending
        // e porse .. 
        setStatus('pending'); // api call hobe .. api pending e porlo... 
        setData(null ); // second time call hole jeno .. ager data niye na boshe thake .. 
        setError(null);
        /*
        ProductService.getProducts()
            .then((res) => setProducts(res)) // response kemon hobe .. sheta age
            .catch(); // error hoile ki hobe .. sheta catch e thakbe ..
        // thekei thik hoye jabe .. apatoto any
        // response er moddhe data tai ashtese ..
        */ 

        // ekhon ar tightly coupled vabe code korbo na .. parameter hishebe ki kaj korte hobe .. sheta to 
        // ashbei .. 
        // useAsync nam er jei function ta parameter akare ashbe .. ta ke call korbo 
        asyncFunction()
            .then((res) => {
                setData(res)
                // api then er moddhe gele .. status success .. karon data eshe gese ..
                setStatus ('success');
                setError (null);
            }) // jei data ashtese .. sheta ke amra setData er moddhe rakhbo
            .catch((err) => {
                setError (err);
                setStatus ('error');
                setData(null)
            }); // error hoile ki hobe .. sheta catch e thakbe ..
    }, [asyncFunction]); // kon jinish change hoile useEffect ta run korbe .. 
    return { 
        // taile amra finally ki jinish return korte chai .. jei data ta eshe thakbe .. shei data ta
        // return korte chai 
        data,
        //status, 
        isLoading : status === 'pending', // pending hoile true.. naile false .. 
        isSuccess : status === 'success',
        isError : status === 'error',
        //error
    }
};

export default useAsync;