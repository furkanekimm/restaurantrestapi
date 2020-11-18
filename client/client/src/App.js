import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import ListProductComponent from './componenets/ListProductComponent'

function App() {
  return (
    <div>
    <Router>
      <div>
          <Switch>
          <Route path="/" exact component={ListProductComponent}></Route>
          <Route path="/products" component={ListProductComponent}></Route>
          </Switch>
      </div>
    </Router>
  </div>
  );
}

export default App;
