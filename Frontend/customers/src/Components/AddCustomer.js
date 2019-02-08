import React, { Component } from 'react'
import axios from 'axios';

class AddCustomer extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            city: "",
            age: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        let customer = {
            name: this.state.name,
            city: this.state.city,
            age: this.state.age
        }

        axios.post("http://127.0.0.1:8090/customers", customer)
            .then(res => console.log(res));
        this.setState({
            name: "",
            city: "",
            age: ""
        })

    }

    handleChange(e) {
        let v = e.target.name
        this.setState({
            [v]: e.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" className="badge badge-light">Name</label>
                        <input type="text" className="form-control" name="name" placeholder="Enter name"
                            required
                            onChange={this.handleChange}
                            value={this.state.name}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="city" className="badge badge-light">City</label>
                        <input type="text" className="form-control" name="city" placeholder="City"
                            required
                            onChange={this.handleChange}
                            value={this.state.city}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="age" className="badge badge-light">Age</label>
                        <input type="text" className="form-control" name="age" placeholder="age"
                            required
                            onChange={this.handleChange}
                            value={this.state.age}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddCustomer;