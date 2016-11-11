import React, { Component, PropTypes } from 'react';

import store from 'assets/js/store';
import { Provider } from 'react-redux';

import 'assets/css/reset.css';
import 'assets/css/document.css';
import 'assets/css/typography.css';

export default class Template extends Component {
  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.object,
  }

  static childContextTypes = {
    location: React.PropTypes.object,
  }

  // Allow location to children if they require it.
  getChildContext() {
    return {
      location: this.props.location,
    };
  }

  render() {
    const wrapperStyle = {
      width: '100%',
      maxWidth: 960,
      margin: '0 auto',
      paddingLeft: 20,
      paddingRight: 20,
    };

    return (
      <Provider store={store}>
        <div style={wrapperStyle}>
          {this.props.children}
        </div>
      </Provider>
    );
  }
}
