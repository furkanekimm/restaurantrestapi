import React, {Component} from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="/" className="navbar-brand">List Product</a></div>
                        <div><a href="/add" className="navbar-brand">Add Product</a></div>
                        <div><a href="/listuser" className="navbar-brand">List User</a></div>
                        <div><a href="/newperson" className="navbar-brand">Add User</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;