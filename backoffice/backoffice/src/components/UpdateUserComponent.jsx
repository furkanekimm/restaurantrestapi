import React, {Component} from 'react';
import UserService from "../services/UserService";
import HeaderComponent from "./HeaderComponent";

class UpdateUserComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            username:'',
            password:'',
            role:''
        }
        this.changeusernameHandler = this.changeusernameHandler.bind(this);
        this.changepasswordHandler = this.changepasswordHandler.bind(this);
        this.changeRoleHandler = this.changeRoleHandler.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }
    componentDidMount() {
        UserService.getUserById(this.state.id).then((res) =>{
           let user = res.data;
           this.setState({
               id:user.id,
               username:user.username,
               password:user.password,
               role:user.role
           });
        });
    }
    updateUser =(e) =>{
        e.preventDefault();
        let User ={
            id:this.state.id,
            username:this.state.username,
            password:this.state.password,
            role:this.state.role
        };
        UserService.updateUser(User).then(res=>{
           this.props.history.push('/listuser')
        });
    }
    changeusernameHandler = (event) =>{
        this.setState({id: event.target.value})
    }

    changepasswordHandler = (event) =>{
        this.setState({username: event.target.value})
    }

    changeRoleHandler = (event) =>{
        this.setState({role: event.target.value})
    }
    cancel() {
        this.props.history.push('/listuser');
    }

    render() {
        return (
            <div>
                <HeaderComponent/>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update User</h3>
                            <div className="card-body">
                                <form>

                                    <div className="form-group">
                                        <label> username </label>
                                        <input placeholder="username" name="username" className="form-control"
                                               value={this.state.username} onChange={this.changeusernameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> password </label>
                                        <input placeholder="password" name="password" className="form-control" type="password"
                                               value={this.state.password} onChange={this.changepasswordHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Role </label>
                                        <input placeholder="Role" name="role" className="form-control"
                                               value={this.state.role} onChange={this.changeRoleHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateUser}> Update</button>
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

export default UpdateUserComponent;