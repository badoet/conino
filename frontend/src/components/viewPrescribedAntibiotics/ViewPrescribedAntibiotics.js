import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';

class ViewPrescribedAntibiotics extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    constructor() {
        super();
        this.state = {
            history: [
                [
                    '20/06/2018',
                    "blood shot eyes",
                    "lack of sleep",
                    [
                        ["Amoxicillin","10"],
                        ["Piperacillin","20"]
                    ]

                ],
                [
                    '20/02/2017',
                    "blood shot eyes",
                    "lack of sleep",
                    [
                        ["Amoxicillin","10"],
                        ["Piperacillin","50"]
                    ]

                ]
            ]
        };
    };

    getHistory = () => {
      let children = [];
      for (let i = 0; i < this.state.history.length; i++) {
          children.push(
            <div key={i}>
              <Card>
                  <CardBody>
                      <CardTitle>{this.state.history[i][0]}</CardTitle>
                      <CardSubtitle>{this.state.history[i][1]} : {this.state.history[i][2]}</CardSubtitle>
                      <CardText>
                          {this.state.history[i][3][0]} <br />
                          {this.state.history[i][3][1]}
                      </CardText>
                  </CardBody>
              </Card>
              <br />
            </div>
          );
      }

      return <div>{children}</div>;
    }

    render() {
      return (
        <div className="viewPrescribedContainer">
          { this.getHistory() }
        </div>
      );
    }
}

function mapStateToProps() {
    return {

    }
}

export default connect(mapStateToProps, {})(ViewPrescribedAntibiotics);
