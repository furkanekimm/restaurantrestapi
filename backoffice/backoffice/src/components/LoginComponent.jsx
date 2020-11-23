import React, {Component} from 'react';
import UserService from "../services/UserService";

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username:'',
            password:''
        }
        this.changeusernameHandler = this.changeusernameHandler.bind(this);
        this.changepasswordHandler = this.changepasswordHandler.bind(this);
    }
    loginUser=(e)=>{
        e.preventDefault();
        UserService.login(this.state.username,this.state.password).then((res)=>{
                if(res.data!=''){
                    localStorage.setItem("username",this.state.username);
                    localStorage.setItem("password",this.state.password);
                    this.props.history.push("/products");
                }
                else{
                    console.log("Hatalı giriş yaptınız.");
                }
            }
        )
    }
    changeusernameHandler=(event) =>{
        this.setState({username: event.target.value})
    }
    changepasswordHandler=(event) =>{
        this.setState({password: event.target.value})
    }

    render() {
        return (
            <div>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Login</h3>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label> username </label>
                                            <input placeholder="username" name="category" className="form-control"
                                                   value={this.state.username} onChange={this.changeusernameHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label> password </label>
                                            <input placeholder="password" name="productName" className="form-control" type="password"
                                                   value={this.state.password} onChange={this.changepasswordHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.loginUser}>Login</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginComponent;