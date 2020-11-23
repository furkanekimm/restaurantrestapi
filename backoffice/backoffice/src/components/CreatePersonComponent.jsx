import React, {Component} from 'react';
import ProductService from "../services/ProductService";
import UserService from "../services/UserService";
import HeaderComponent from "./HeaderComponent";

class CreatePersonComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            role: '',
        }
        this.changeusernameHandler =this.changeusernameHandler.bind(this);
        this.changepasswordHandler = this.changepasswordHandler.bind(this);
        this.changeRoleHandler=this.changeRoleHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }
    saveUser = (e) => {
        e.preventDefault();
        let user = {
            username: this.state.username,
            password: '{noop}' + this.state.password,
        };
        console.log('user => ' + JSON.stringify(user));
        UserService.addUser(user,this.state.role).then(res =>{
            this.props.history.push('/listuser');
        });

    }
    changeusernameHandler=(event) =>{
        this.setState({username: event.target.value})
    }
    changepasswordHandler=(event) =>{
        this.setState({password: event.target.value})
    }
    changeRoleHandler=(event) =>{
        this.setState({role: event.target.value})
        console.log(this.state.role)
    }
    cancel(){
        this.props.history.push('/listuser');
    }

    render() {
        return (
            <div>
                <HeaderComponent/>
                <div className="container">

                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add User</h3>
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

                                    <div className="form-group">
                                        <label> ROLE </label><br/>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1"
                                                   value="ADMIN" onChange={this.changeRoleHandler}/>
                                                <label className="form-check-label" htmlFor="inlineCheckbox1">ADMIN</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2"
                                                   value="USER" onChange={this.changeRoleHandler}/>
                                                <label className="form-check-label" htmlFor="inlineCheckbox2">USER</label>
                                        </div>
                                        </div>
                                    <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}
                                            style={{marginLeft: "10px"}}>Cancel
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreatePersonComponent;