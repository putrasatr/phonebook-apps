import React, { Component } from 'react'
import PhoneBookItem from './PhoneBookItem'

export default class PhoneBookList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phone: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);

    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        })
    }
    render() {
        return (
            <div>
                <div>
                    <div className="card">
                        <div class="card-header">Search Form</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="d-flex">
                                        <label className="col-form-label mr-2"><b>Name</b></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="name"
                                            aria-label="Name"
                                            name="name"
                                            value={this.state.name}
                                            onChange={this.handleInputChange} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="col-sm-11 d-flex">
                                        <label className="col-form-label md-4 mr-2"><b>Phone</b></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="phone number"
                                            aria-label="Phone"
                                            name="phone"
                                            value={this.state.phone}
                                            onChange={this.handleInputChange} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><br/>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <PhoneBookItem />
                    </tbody>
                </table>
            </div>
        )
    }
}