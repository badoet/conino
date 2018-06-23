import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Patients from '../../config/patients';

import './styles.css';

class FindPatient extends Component {

  constructor(props) {
    super(props)
    this.state = {
      patientId: "",
      patientInfo: null,
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
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
      </div>
    )
  }
}

export default FindPatient;
