import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class PatientInfo extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor() {
    super()
    this.state = {

    }
  }

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

function mapStateToProps() {
  return {

  }
}

export default connect(mapStateToProps, {})(PatientInfo);
