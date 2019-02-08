import React, { Component } from 'react'
import axios from 'axios';

class EditCustomer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentCustomer: {
                name: "",
                city: "",
                age: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.update = this.update.bind(this)
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8090/customers/" + this.props.match.params.id)
            .then(res => this.setState({
                currentCustomer: res.data
            }))
    }
    handleChange(e) {
        let v = e.target.name
        this.setState({
            [v]: e.target.value
        })
    }
    update(e) {
        e.preventDefault();
        let customer = {
            name: this.state.name,
            city: this.state.city,
            age: this.state.age
        }

        axios.put("http://127.0.0.1:8090/customers/" + this.props.match.params.id, customer)
            .then(res => console.log(res))

        this.props.history.push('/');
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.update}>
                    <div className="form-group">
                        <label htmlFor="name" className="badge badge-light">Name</label>
                        <input type="text" className="form-control" name="name"
                            required
                            onChange={this.handleChange}
                            defaultValue={this.state.currentCustomer.name}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="city" className="badge badge-light">City</label>
                        <input type="text" className="form-control" name="city"
                            required
                            onChange={this.handleChange}
                            defaultValue={this.state.currentCustomer.city}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="age" className="badge badge-light">Age</label>
                        <input type="text" className="form-control" name="age"
                            required
                            onChange={this.handleChange}
                            defaultValue={this.state.currentCustomer.age}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
        )
    }
}

export default EditCustomer;