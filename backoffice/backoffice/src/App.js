import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import ListProductComponent from './components/ListProductComponent';
import CreateProductComponent from './components/CreateProductComponent';
import UpdateProductComponent from './components/UpdateProductComponent';

function App() {
  return (
    <div>
      <Router>
        <div>
            <Switch>
            <Route path="/" exact component={ListProductComponent}></Route>
            <Route path="/products" component={ListProductComponent}></Route>
            <Route path="/add" component={CreateProductComponent}></Route>
            <Route path="/update/:id" component={UpdateProductComponent}></Route>
            </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;