import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import ListProductComponent from './components/ListProductComponent';
import CreateProductComponent from './components/CreateProductComponent';
import UpdateProductComponent from './components/UpdateProductComponent';
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreatePersonComponent from "./components/CreatePersonComponent";
import ListUserComponent from "./components/ListUserComponent";
import UpdateUserComponent from "./components/UpdateUserComponent";

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent/>
                <div class="container">
                    <Switch>
                        <Route path="/" exact component={ListProductComponent}></Route>
                        <Route path="/products" component={ListProductComponent}></Route>
                        <Route path="/add" component={CreateProductComponent}></Route>
                        <Route path="/newperson" component={CreatePersonComponent}></Route>
                        <Route path="/update/:id" component={UpdateProductComponent}></Route>
                        <Route path="/listuser" component={ListUserComponent}></Route>
                        <Route path="/updateUser/:id" component={UpdateUserComponent}></Route>
                    </Switch>
                </div>

            </Router>
        </div>
    );
}

export default App;
