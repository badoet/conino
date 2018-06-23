import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Card,
  CardText,
  CardBody,
  CardTitle
} from 'reactstrap';

class ViewAllergies extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    constructor() {
        super();
        this.state = {
            allergies: [
                [
                    '20/06/2018',
                    'Amoxicillin'
                ],
                [
                    '20/02/2017',
                    'Piperacillin'
                ]
            ]

        };
    }

    getAllergies = () => {
        let children = [];
        for (let i = 0; i < this.state.allergies.length; i++) {
            children.push(
                <div key={i}>
                  <Card>
                      <CardBody>
                          <CardTitle>{this.state.allergies[i][0]}</CardTitle>

                          <CardText>
                              {this.state.allergies[i][1]}
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
              { this.getAllergies() }
          </div>
      );
    }
}

function mapStateToProps() {
    return {

    }
}

export default connect(mapStateToProps, {})(ViewAllergies);
