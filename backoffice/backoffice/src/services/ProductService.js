import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:8080/productsControl/"

class ProductService{

    addProduct(product){
        return axios.post(PRODUCT_API_BASE_URL + 'add', product)
    }

    listAllProduct(){
        return axios.get(PRODUCT_API_BASE_URL);
    }

    getProductById(id){
        return axios.get(PRODUCT_API_BASE_URL + id);
    }

    updateProduct(product){
        return axios.put(PRODUCT_API_BASE_URL+'update/',product);
    }

    deleteProduct(id){
        return axios.delete(PRODUCT_API_BASE_URL+id);
    }


   

}
export default new ProductService()