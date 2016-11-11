import React, { Component, PropTypes } from 'react';
import store from 'assets/js/store';
import { connect } from 'react-redux';

import actions from 'assets/js/actions';

const mapDispatchToProps = () => ({
  deleteCustomer: () => store.dispatch(actions.customer.deleteCustomer()),
  submitCustomer: () => store.dispatch(actions.customer.submitCustomer()),
  updateCustomer: (key, value) => store.dispatch(actions.customer.updateCustomer({ [key]: value })),
});

const mapStateToProps = ({ customer }) => ({
  customer,
})

@connect(mapStateToProps, mapDispatchToProps)
export default class Index extends Component {
  static propTypes = {
    customer: PropTypes.object,
    deleteCustomer: PropTypes.func,
    submitCustomer: PropTypes.func,
    updateCustomer: PropTypes.func,
  }

  updateData(key, event) {
    this.props.updateCustomer(key, event.target.value);
  }

  render() {
    return (
      <div>
        <h1>Gatsby Redux</h1>
        <p>Quick test/demo of Redux using <a href="https://github.com/gatsbyjs/gatsby">GatsbyJs</a>. Application state is saved to and hydrated from session storage.</p>
        <div>
          <label>Name</label>
          <input type="text" value={this.props.customer.name || ''} onChange={this.updateData.bind(this, 'name')} />
        </div>
        <div>
          <label>Email</label>
          <input type="text" value={this.props.customer.email || ''} onChange={this.updateData.bind(this, 'email')} />
        </div>
        <button onClick={this.props.deleteCustomer}>Clear</button>
        <button onClick={this.props.submitCustomer}>Submit</button>


        <h3>Name:</h3>
        <p>{this.props.customer.name || 'No name set'}</p>
        <h3>Email</h3>
        <p>{this.props.customer.email || 'No email set'}</p>
        <h3>Status:</h3>
        <p>{this.props.customer.submitted ? 'Submitted' : 'Not submitted'}</p>
      </div>
    );
  }
}
