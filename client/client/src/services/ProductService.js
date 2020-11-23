import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:8080/product/"
const CART_BASE_URL ="http://localhost:8080/"



class ProductService{

   
    listAllProduct(){
        return axios.get(PRODUCT_API_BASE_URL, {
            auth: {
                username: localStorage.getItem("username"),
                password: localStorage.getItem("password")
            }
        });
    }
    listAllCategory(){
        return axios.get(PRODUCT_API_BASE_URL+"category", {
            auth: {
                username: localStorage.getItem("username"),
                password: localStorage.getItem("password")
            }
        });
    }

    listProductByCategory(categories){
        return axios.get(PRODUCT_API_BASE_URL+"category/product",{
            params: {
                category: categories
            },
            auth: {
                username: localStorage.getItem("username"),
                password: localStorage.getItem("password")
            }
        });
    }

    saleButton(Carts){
        return axios.post(CART_BASE_URL+"carts/add",Carts,{
            auth: {
                username: localStorage.getItem("username"),
                password: localStorage.getItem("password")
            }
        })
    }


}
export default new ProductService()