import React, { Component } from 'react';
import ProductService from '../services/ProductService';

import {Container, Card, Button} from 'react-bootstrap'
 

class ListProductComponent extends Component {
    constructor(props){
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
            <div>
                <h2 className="text-center">Product List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.products.map(
                                products =>
                                    <tr key={products.id}>
                                        <td>{products.productName}</td>
                                        <td>{products.description}</td>
                                        <td>{products.price}</td>
                                        <td>

                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
              <div>
                  
              </div>
              <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>         
            </div>
        );
    }
}

export default ListProductComponent;