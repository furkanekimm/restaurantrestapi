import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/person/";

class UserService{
    addUser(user){
        return axios.post(USER_API_BASE_URL+"add",user);
    }

    listAllUser(){
        return axios.get(USER_API_BASE_URL);
    }

    deleteUser(id){
        return axios.delete(USER_API_BASE_URL+id);
    }

    getUserById(id){
        return axios.get(USER_API_BASE_URL+id);
    }

    updateUser(User){
        return axios.put(USER_API_BASE_URL+"update",User)
    }
}
export default new  UserService()