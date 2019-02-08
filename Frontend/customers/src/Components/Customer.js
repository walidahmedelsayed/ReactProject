import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class Customer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            details: this.props.customerDetails
        }
        this.delete = this.delete.bind(this)
    }

    componentDidMount() {
        this.setState({
            details: this.props.customerDetails
        })
    }
    delete(e) {
        e.preventDefault()
        axios.delete("http://127.0.0.1:8090/customers/" + this.state.details._id)
            .then(res => console.log(res))
    }

    render() {
        return (
            <tr>
                <td>{this.props.customerDetails._id}</td>
                <td>{this.props.customerDetails.name}</td>
                <td>{this.props.customerDetails.city}</td>
                <td>{this.props.customerDetails.age}</td>
                <td>
                    <Link className="btn btn-success btn-sm" to={'/edit/' + this.props.customerDetails._id}>Edit</Link>
                    <button className="btn btn-danger btn-sm" customeid={this.props.customerDetails._id} onClick={this.delete}>Delete</button>
                </td>
            </tr>
        )
    }
}


export default Customer;