import React, {Component} from 'react';
import ProductService from "../services/ProductService";
import UserService from "../services/UserService";

class CreatePersonComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            role: '',
        }
        this.changeFirstNameHandler =this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeRoleHandler=this.changeRoleHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }
    saveUser = (e) => {
        e.preventDefault();
        let user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            role: this.state.role
        };
        console.log('user => ' + JSON.stringify(user));
        UserService.addUser(user).then(res =>{
            this.props.history.push('/listuser');
        });

    }
    changeFirstNameHandler=(event) =>{
        this.setState({firstName: event.target.value})
    }
    changeLastNameHandler=(event) =>{
        this.setState({lastName: event.target.value})
    }
    changeRoleHandler=(event) =>{
        this.setState({role: event.target.value})
    }
    cancel(){
        this.props.history.push('/listuser');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add User</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Firstname </label>
                                        <input placeholder="Firstname" name="category" className="form-control"
                                               value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Lastname </label>
                                        <input placeholder="Lastname" name="productName" className="form-control"
                                               value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Role </label>
                                        <input placeholder="Role" name="productName" className="form-control"
                                               value={this.state.role} onChange={this.changeRoleHandler}/>
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