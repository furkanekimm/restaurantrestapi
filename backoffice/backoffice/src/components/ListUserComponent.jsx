import React, {Component} from 'react';
import UserService from "../services/UserService";

class ListUserComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users :[]
        }
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        //
    }

    deleteUser(id){
        UserService.deleteUser(id).then(res =>{
           this.setState({users: this.state.users.filter(user => user.id !== id)});
        });
    }

    componentDidMount(){
        UserService.listAllUser().then(res =>{
            this.setState({users:res.data})
        });
    }
    editUser(id){
        this.props.history.push(`/updateUser/${id}`);
    }



    render() {
        return (
            <div>
                <h2 className="text-center">Product List</h2>
                {/*<div className="row">
                    <button style={{marginBottom: "10px"}} className="btn btn-primary" onClick={this.addUser}>Add Product</button>
                </div>*/}
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.users.map(
                                user =>
                                    <tr key={user.id}>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.role}</td>
                                        <td>
                                            <button onClick={() => this.editUser(user.id)}
                                                    className="btn btn-info"> Update
                                            </button>
                                            <button style={{marginLeft: "6px"}} onClick={() => this.deleteUser(user.id)}
                                                    className="btn btn-danger"> Delete
                                            </button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>


            </div>
        );
    }
}

export default ListUserComponent;