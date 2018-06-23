import React, { Component } from 'react';
import { connect } from "react-redux";
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
          <Card className="findPatientResult">
            <CardContent className="patientInfo">
              <Link to={`/patients/${this.state.patientInfo.id}`}>
                <img className="patientImg" alt="" src={this.state.patientInfo.imageUrl} />
                <div className="patientDetails">
                  <div className="patientId">
                    <label>Patient ID:</label>
                    <span>{this.state.patientInfo.id}</span>
                  </div>
                  <div className="patientName">
                    <label>Name:</label>
                    <span>{this.state.patientInfo.name}</span>
                  </div>
                  <div className="patientAge">
                    <label>Age:</label>
                    <span>{this.state.patientInfo.age}</span>
                  </div>
                </div>
              </Link>
            </CardContent>
          </Card>
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
