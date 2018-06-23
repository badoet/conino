import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class PatientInfo extends Component {

  render() {
    return (
      <Card className={this.props.className} onClick={this.props.onClick}>
        <CardContent className="patientInfo">
          <img className="patientImg" alt="" src={this.props.patient.imageUrl} />
          <div className="patientDetails">
            <div className="patientId">
              <label>Patient ID:</label>
              <span>{this.props.patient.id}</span>
            </div>
            <div className="patientName">
              <label>Name:</label>
              <span>{this.props.patient.name}</span>
            </div>
            <div className="patientAge">
              <label>Age:</label>
              <span>{this.props.patient.age}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }
}

export default PatientInfo;
