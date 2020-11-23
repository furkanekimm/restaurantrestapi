import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/person/";

class UserService{
    login(username,password){
        return axios.get(USER_API_BASE_URL+"login",{
            params: {
                username: username,
                password: "{noop}"+password
            }
        });
    }

    addUser(user,role){
        return axios.post(USER_API_BASE_URL+"control/add",user, {
            params:{
              role:role
            },
            auth: {
                username: localStorage.getItem("username"),
                password: localStorage.getItem("password")
            }
        });
    }

    listAllUser(){
        return axios.get(USER_API_BASE_URL+"control/", {
            auth: {
                username: localStorage.getItem("username"),
                password: localStorage.getItem("password")
            }
        });
    }

    deleteUser(id){
        return axios.delete(USER_API_BASE_URL+"control/delete/"+id, {
            auth: {
                username: localStorage.getItem("username"),
                password: localStorage.getItem("password")
            }
        });
    }

    getUserById(id){
        return axios.get(USER_API_BASE_URL+"control/"+id, {
            auth: {
                username: localStorage.getItem("username"),
                password: localStorage.getItem("password")
            }
        });
    }

    updateUser(User){
        return axios.put(USER_API_BASE_URL+"control/update/",User, {
            auth: {
                username: localStorage.getItem("username"),
                password: localStorage.getItem("password")
            }
        });
    }
}
export default new  UserService()