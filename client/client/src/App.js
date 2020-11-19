import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import ListProductComponent from './componenets/ListProductComponent'
import HeaderComponent from './componenets/HeaderComponent'

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={ListProductComponent}></Route>
                        <Route path="/products" component={ListProductComponent}></Route>
                    </Switch>
            </Router>
        </div>
    );
}

export default App;
