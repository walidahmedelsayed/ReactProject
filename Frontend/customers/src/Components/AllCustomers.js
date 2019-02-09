import React, { Component } from "react";
import Customer from './Customer';
import axios from 'axios';

class AllCustomers extends Component {

    constructor(props) {
        super(props)
        this.state = {
            customers: []
        }
    }
    getUsers() {
        axios.get("http://127.0.0.1:8090/customers").then(res => this.setState({
            customers: res.data
        })).catch(err => console.log(err))
    }
    componentDidMount() {
        document.title = "Customers"
        this.getUsers();
    }

    componentDidUpdate() {
        this.getUsers();
    }

    render() {
        let customers = this.state.customers.map(c => <Customer key={c._id} customerDetails={c} />);
        return (
            <table className="table">
                <tbody>
                    <tr className="thead-light">
                        <th>Id</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                    {customers}
                </tbody>
            </table>

        )
    }
}
export default AllCustomers;