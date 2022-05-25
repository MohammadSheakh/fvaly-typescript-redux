import requests from './httpService';
    class StoreService{
         
        getStores() : Promise<any> { // IProduct type er hobe 
            
            return requests.get('/store'); // amar banano get method
            
        }
        
        getStoreById(id:string) : Promise<any> {
        
            return requests.get(`/store/${id}`); 
            
        }

        addStore(body:{}) : Promise<any> {
            
            return requests.post(`/store/`, body); 
            
        }
        updateStore(id:string, body:{}) : Promise<any> {
            
            return requests.post(`/store/${id}`, body); 
        }
        deleteStore(id:string) : Promise<any> { 
            return requests.delete(`/store/${id}`); 
        }
    }


    export default new StoreService();

