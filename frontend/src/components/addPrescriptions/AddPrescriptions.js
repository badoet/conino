import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import '../../styles/styles.css';
import '../../styles/select2-bootstrap.css'
import Select2 from 'react-select2-wrapper';

class AddPrescriptions extends Component {




    static contextTypes = {
        router: PropTypes.object
    };


    constructor() {
        super();
        this.state = {drugList:
                [
                { text: 'bug', id: 1 },
                { text: 'feature', id: 2 },
                { text: 'documents', id: 3 },
                { text: 'discussion', id: 4 }
                ]
        };
    }

    render() {
        return (
            <div>
                <div className="tabTitle">Prescriptions</div>

                <div class="form-group">
                    <label>Symptoms</label>
                    <textarea class="form-control" id="symptomsTextArea" rows="3"></textarea>
                </div>

                <div class="form-group">
                    <label >Diagnosis</label>
                    <textarea class="form-control" id="diagnosisTextArea" rows="3"></textarea>
                </div>

                <Select2
                    data= {this.state.drugList}
                    options={{
                    placeholder: 'search by tags',
                  }}/>

            </div>
        );
    }

;
}

function mapStateToProps() {
    return {}
}


export default connect(mapStateToProps, {})(AddPrescriptions);
