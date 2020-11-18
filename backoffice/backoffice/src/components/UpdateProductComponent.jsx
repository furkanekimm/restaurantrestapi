import React, {Component} from 'react';
import ProductService from "../services/ProductService";

class UpdateProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            productName:'',
            description: '',
            price: ''
        }
        
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
    }

    componentDidMount() {
        ProductService.getProductById(this.state.id).then((res) => {
            let Product = res.data;
            this.setState({
                id: Product.id,
                productName: Product.productName,
                description: Product.description,
                price: Product.price
            });
        });
    }

    updateProduct = (e) => {
        e.preventDefault();
        let Product = {
            id: this.state.id,
            productName: this.state.productName,
            description: this.state.description,
            price: this.state.price
        };
        console.log('Product => ' + JSON.stringify(Product));
        ProductService.updateProduct(Product, this.state.id).then(res => {
            this.props.history.push('/')
        });

    }
    changeIdHandler = (event) => {
        this.setState({id: event.target.value})
    }
    changeProductNameHandler =(event) =>{
        this.setState({productName: event.target.value})
    }

    changeDescriptionHandler = (event) => {
        this.setState({description: event.target.value})
    }
    changePriceHandler = (event) => {
        this.setState({price: event.target.value})
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
                            <h3 className="text-center">Update Product</h3>
                            <div className="card-body">
                                <form>
                                    
                                    <div className="form-group">
                                        <label> Product Name </label>
                                        <input placeholder="Product Name" name="productName" className="form-control"
                                               value={this.state.title} onChange={this.changeProductNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Description </label>
                                        <input placeholder="Description" name="description" className="form-control"
                                               value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Price </label>
                                        <input placeholder="Product Price" name="price" className="form-control"
                                               value={this.state.urlToImage} onChange={this.changePriceHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateProduct}> Update</button>
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

export default UpdateProductComponent;