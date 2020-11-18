import React, {Component} from 'react';
import ProductService from '../services/ProductService';
import './card-style.css';

class ListProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }

    }

    componentDidMount() {
        ProductService.listAllProduct().then((res) => {
            this.setState({products: res.data});
        });
    }

    render() {
        return (

            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    {
                        this.state.products.map(
                            products =>

                                <div style={{marginBottom: "20px"}} className="col-md-4">
                                    <div className="card text-center">
                                        <div className="overflow">
                                            <img src="http://placehold.jp/200x220.png" alt="Image1" className="card-img-top"></img>
                                        </div>
                                        <div className="card-body text-dark">
                                            <h5 className="card-title">{products.productName}</h5>
                                            <p className="card-text text-secondary">{products.description}</p>
                                            <p className="card-text text-secondary">{products.price} TL</p>
                                            <a href="#" className="btn btn-outline-success">Add to Cart</a>
                                        </div>
                                    </div>

                                </div>
                        )
                    }
                </div>

            </div>

        );
    }
}

export default ListProductComponent;