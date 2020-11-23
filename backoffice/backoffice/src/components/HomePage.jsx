import React, {Component} from 'react';
import './card-style.css'
import HeaderComponent from "./HeaderComponent";
class HomePage extends Component {
    render() {
        return (

            <div className="container">
                <HeaderComponent/>
                <div className="row">
                    <div className="card-group">
                        <div className="col-md-4">
                            <div className="card bg-light mb-4">
                                <div className="card-body">
                                    <img src="http://www.simpleimageresizer.com/_uploads/photos/0f72a54e/cart_2_300x200.jpg"
                                         className="card-img"></img>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card bg-light mb-4">
                                <div className="card-body">
                                    <img src="http://www.simpleimageresizer.com/_uploads/photos/0f72a54e/table_300x200.jpg"
                                         className="card-img"></img>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card bg-light mb-4">
                                <div className="card-body">
                                    <img src="http://www.simpleimageresizer.com/_uploads/photos/0f72a54e/report_300x200.png"
                                         className="card-img"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="card-group">
                        <div className="col-md-4">
                            <div className="card bg-light mb-4">
                                <div className="card-body">
                                    <img src="http://www.simpleimageresizer.com/_uploads/photos/0f72a54e/product_1_300x200.png"
                                         className="card-img"></img>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card bg-light mb-4">
                                <div className="card-body">
                                    <img src="http://www.simpleimageresizer.com/_uploads/photos/0f72a54e/users_300x200.png"
                                         className="card-img"></img>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card bg-light mb-4">

                                <div className="card-body">
                                    <img src="https://www.ronnefeldt.com.tr/wp-content/plugins/instagram-feed/img/placeholder.png"
                                         className="card-img"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="card-group">
                        <div className="col-md-4">
                            <div className="card bg-light mb-4">
                                <div className="card-body">
                                    <img src="https://www.ronnefeldt.com.tr/wp-content/plugins/instagram-feed/img/placeholder.png"
                                         className="card-img"></img>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card bg-light mb-4">
                                <div className="card-body">
                                    <img src="https://www.ronnefeldt.com.tr/wp-content/plugins/instagram-feed/img/placeholder.png"
                                         className="card-img"></img>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card bg-light mb-4">
                                <div className="card-body">
                                    <img src="http://www.simpleimageresizer.com/_uploads/photos/0f72a54e/exit_1_300x200.jpg"
                                         className="card-img"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;