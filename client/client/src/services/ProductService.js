import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:8080/products/"

class ProductService{

   
    listAllProduct(){
        return axios.get(PRODUCT_API_BASE_URL);
    }
    listAllCategory(){
        return axios.get(PRODUCT_API_BASE_URL+"/category")
    }

    listProductByCategory(categories){
        return axios.get(PRODUCT_API_BASE_URL+"category/product",{
            params: {
                category: categories
            }
        })
    }


}
export default new ProductService()