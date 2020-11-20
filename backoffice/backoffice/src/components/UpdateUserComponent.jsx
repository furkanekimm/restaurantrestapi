import React, {Component} from 'react';
import UserService from "../services/UserService";

class UpdateUserComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            firstName:'',
            lastName:'',
            role:''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeRoleHandler = this.changeRoleHandler.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }
    componentDidMount() {
        UserService.getUserById(this.state.id).then((res) =>{
           let user = res.data;
           this.setState({
               id:user.id,
               firstName:user.firstName,
               lastName:user.lastName,
               role:user.role
           });
        });
    }
    updateUser =(e) =>{
        e.preventDefault();
        let User ={
            id:this.state.id,
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            role:this.state.role
        };
        UserService.updateUser(User).then(res=>{
           this.props.history.push('/listuser')
        });
    }
    changeFirstNameHandler = (event) =>{
        this.setState({id: event.target.value})
    }

    changeLastNameHandler = (event) =>{
        this.setState({firstName: event.target.value})
    }

    changeRoleHandler = (event) =>{
        this.setState({role: event.target.value})
    }
    cancel() {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update User</h3>
                            <div className="card-body">
                                <form>

                                    <div className="form-group">
                                        <label> FirstName </label>
                                        <input placeholder="FirstName" name="firstName" className="form-control"
                                               value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> LastName </label>
                                        <input placeholder="LastName" name="lastName" className="form-control"
                                               value={this.state.lastName} onChange={this.changeLastNameHandler}/>
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