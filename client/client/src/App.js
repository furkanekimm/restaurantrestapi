import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import ListProductComponent from './componenets/ListProductComponent'
import LoginComponent from "./componenets/LoginComponent";
import HomePage from "./componenets/HomePage";

function App() {
    return (
        <div>
            <Router>
                    <Switch>

                        <Route path="/" exact component={LoginComponent}></Route>
                        <Route path="/homepage"  component={HomePage}></Route>
                        <Route path="/products" component={ListProductComponent}></Route>
                    </Switch>
            </Router>
        </div>
    );
}

export default App;
