import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';

import Patients from '../../config/patients';
import PatientInfo from '../PatientInfo';

class FindPatient extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props)
    this.state = {
      patientId: "",
      patientInfo: null,
    }
  }

  handleChange = name => event => {
    this.setState({
      patientId: event.target.value,
    })

    const patientInfo = Patients[event.target.value]
    if (patientInfo) {
      this.setState({patientInfo})
    }
  }

  render() {
    return (
      <div className="findPatientContainer">
        <h1 className="findPatientHeader">Search Patient Record</h1>
         <TextField
          id="patientId"
          className="findPatientField"
          label="Patient ID"
          value={this.state.patientId}
          onChange={this.handleChange('patientId')}
          margin="normal"
        />
        {this.state.patientInfo && (
          <PatientInfo
          className="findPatientResult"
          patient={this.state.patientInfo}
          onClick={() => {
            this.props.history.push(`/patients/${this.state.patientInfo.id}`)
          }}
          />
        )}
      </div>
    )
  }
}

function mapStateToProps() {
  return {

  }
}

export default connect(mapStateToProps, {})(FindPatient);
