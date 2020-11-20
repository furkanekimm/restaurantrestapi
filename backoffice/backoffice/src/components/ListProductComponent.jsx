import React, { Component } from 'react';
import ProductService from '../services/ProductService';

class ListProductComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            products: []
        }
        this.editProduct=this.editProduct.bind(this);
        //this.addProduct=this.addProduct.bind(this);
        this.deleteProduct=this.deleteProduct.bind(this);
    }
    deleteProduct(id){
        ProductService.deleteProduct(id).then(res =>{
            this.setState({products: this.state.products.filter(products => products.id !== id)});
        });
    }
   /* addProduct() {
        this.props.history.push('/add');
    }*/
    editProduct(id) {
        this.props.history.push(`/update/${id}`);
    }

    componentDidMount() {
        ProductService.listAllProduct().then((res) => {
            this.setState({products: res.data});
        });
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Product List</h2>
                {/*<div className="row">
                    <button style={{marginBottom: "10px"}} className="btn btn-primary" onClick={this.addProduct}>Add Product</button>
                </div>*/}
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>Category</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.products.map(
                                products =>
                                    <tr key={products.id}>
                                        <td>{products.category}</td>
                                        <td>{products.productName}</td>
                                        <td>{products.description}</td>
                                        <td>{products.price}</td>
                                        <td>
                                            <button onClick={() => this.editProduct(products.id)}
                                                    className="btn btn-info"> Update
                                            </button>
                                            <button style={{marginLeft: "6px"}} onClick={() => this.deleteProduct(products.id)}
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

export default ListProductComponent;