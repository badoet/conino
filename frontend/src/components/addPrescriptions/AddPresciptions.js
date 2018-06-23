import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";

class AddPrescriptions extends Component {
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
      <div>
        AddPrescriptions
      </div>
    );
  };
}

function mapStateToProps() {
  return {

  }
}

export default connect(mapStateToProps, {})(AddPrescriptions);
