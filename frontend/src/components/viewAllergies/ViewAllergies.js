import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";

class ViewAllergies extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (

    );
  };
}

function mapStateToProps() {
  return {

  }
}

export default connect(mapStateToProps, {})(ViewAllergies);
