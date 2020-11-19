import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:8080/products/"
const CART_BASE_URL ="http://localhost:8080/"

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

    saleButton(Carts){
        return axios.post(CART_BASE_URL+"carts/add",Carts)
    }


}
export default new ProductService()