import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import ListProductComponent from './componenets/ListProductComponent'
import HeaderComponent from './componenets/HeaderComponent'
import FooterComponent from './componenets/FooterComponent'

function App() {
  return (
    <div>
    <Router>
        <HeaderComponent/>
      <div className ="container">
          <Switch>
          <Route path="/" exact component={ListProductComponent}></Route>
          <Route path="/products" component={ListProductComponent}></Route>
          </Switch>
      </div>
        <FooterComponent/>
    </Router>
  </div>
  );
}

export default App;
