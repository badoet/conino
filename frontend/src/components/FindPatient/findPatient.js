import React, { Component } from 'react';
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from "react-router-dom";
import Patients from '../../config/patients';

import '../../styles/styles.css';

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
          <Card>
            <CardContent>
              <Link to={`/patients/${this.state.patientInfo.id}`}>{this.state.patientInfo.name}</Link>
            </CardContent>
          </Card>
        )}
      </div>
    )
  }
}

export default FindPatient;
