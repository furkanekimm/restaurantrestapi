import React, {Component} from 'react';
import ProductService from '../services/ProductService';
import './card-style.css';
import nextId from "react-id-generator";
import HeaderComponent from "./HeaderComponent";

class ListProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: [],
            products: [],
            cart: {
                cartId: 0,
                productId: 0,
                piece: 1,
                productName: '',
                price: 0,
                total: 0
            },
            carts: [],
            totalCart: 0

        }
        this.listProductByCategory = this.listProductByCategory.bind(this);
    }

    listProductByCategory(categories) {
        ProductService.listProductByCategory(categories).then((res) => {
            this.setState({products: res.data});
        });
        this.render();
    }

    saleButton(Carts) {
        ProductService.saleButton(Carts).then(res => {
            window.location.reload();
        });
    }

    increasePiece(cart) {
        cart.piece += 1;
        cart.total = cart.total + cart.price;
        this.state.totalCart += cart.price;
        //this.setState({carts: this.state.carts.filter(carts => carts.id == cart.id)});
        this.setState([{...this.state.carts, [cart.cartId]: cart}])
        console.log(cart.piece)
    }

    decreasePiece(cart) {
        cart.piece -= 1;
        cart.total = cart.total - cart.price;
        this.state.totalCart -= cart.price;
        if (cart.piece == 0) {
            this.setState({carts: this.state.carts.filter(carts => carts.cartId !== cart.cartId)});
        } else {
            this.setState([{...this.state.carts, [cart.cartId]: cart}])
        }
    }

    addCarts(products) {
        this.state.totalCart += products.price;
        if (this.state.carts.filter(cart => cart.productId == products.id).length > 0) {
            var cart = this.state.carts.filter(cart => cart.productId == products.id)
            cart[0].piece += 1;
            cart[0].total = cart[0].total + cart[0].price;
            this.setState([{...this.state.carts, [cart[0].productId]: cart[0]}])
        } else {
            this.setState({
                cart: {
                    cartId: nextId(),
                    productId: products.id,
                    productName: products.productName,
                    price: products.price,
                    piece: 1,
                    total: products.price
                }
            }, () => this.setState({carts: [...this.state.carts, this.state.cart]}))
        }

    }

    componentDidMount() {
        if(localStorage.getItem("username") ==null && localStorage.getItem("password") == null ){
            this.props.history.push('/');
        }
        ProductService.listAllCategory().then((res) => {
            this.setState({categories: res.data});
        });
    }

    render() {
        return (
            <div>
                <HeaderComponent/>
            <div className="container">

                <div className="row">
                    <div className="col-md-2">
                        <div className="list-group">
                            <a href="#" className="list-group-item list-group-item-action active">
                                Categories
                            </a>
                            {
                                this.state.categories.map(
                                    categories =>
                                        <tr key={categories}>
                                            <a href="#" className="list-group-item list-group-item-action"
                                               onClick={() => this.listProductByCategory(categories)}>{categories}</a>
                                        </tr>
                                )
                            }
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="container-fluid d-flex justify-content-center">
                            <div className="row">
                                {
                                    this.state.products.map(
                                        products =>
                                            <div style={{marginBottom: "20px"}} className="col-md-5">
                                                <div className="card text-center">
                                                    <div className="overflow">
                                                        <img src="http://placehold.jp/300x300.png" alt="Image1"
                                                             className="card-img-top"></img>
                                                    </div>
                                                    <div className="card-body text-dark">
                                                        <h5 className="card-title">{products.productName}</h5>
                                                        <p className="card-text text-secondary">{products.description}</p>
                                                        <p className="card-text text-secondary">{products.price} ₺</p>
                                                        <button className="btn btn-info"
                                                                onClick={() => this.addCarts(products)}>Add to Cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                    )
                                }
                            </div>

                        </div>
                    </div>
                    <div className="col-md-5">
                        <table className="table table-striped table-bordered">
                            <thead>
                            <tr>
                                <th>Increase</th>
                                <th>Piece</th>
                                <th>Name</th>
                                <th>Total Price</th>
                                <th>Decrease</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.carts.map(
                                    cart =>
                                        <tr key={cart.cartId}>
                                            <td>
                                                <button className="btn btn-success"
                                                        onClick={() => this.increasePiece(cart)}>+
                                                </button>
                                            </td>
                                            <td>{cart.piece}</td>
                                            <td>{cart.productName}</td>
                                            <td>{cart.total} ₺</td>
                                            <td>
                                                <button className="btn btn-danger"
                                                        onClick={() => this.decreasePiece(cart)}>-
                                                </button>
                                            </td>
                                        </tr>
                                )
                            }
                            </tbody>
                            <thead>
                            <tr>

                                <th colSpan="2"></th>
                                <th colSpan="2">Total {this.state.totalCart} ₺</th>
                                <th>
                                    <button className="btn btn-outline-danger"
                                            onClick={() => this.saleButton(this.state.carts)}>Payment
                                    </button>
                                </th>
                            </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default ListProductComponent;