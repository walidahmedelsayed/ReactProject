import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AddCustomer from './Components/AddCustomer';
import AllCustomers from './Components/AllCustomers';
import EditCustomer from './Components/EditCustomer';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNotFound from './Components/PageNotFound';


class App extends Component {

  render() {

    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Customers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add">Add Customer</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={AllCustomers} />
            <Route path="/add" component={AddCustomer} />
            <Route path="/edit/:id" component={EditCustomer} />
            <Route component={AllCustomers} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
