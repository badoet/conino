import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Select2 from 'react-select2-wrapper';
import {Panel} from 'react-bootstrap';
import { Button} from 'reactstrap';

class AddPrescriptions extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

    static contextTypes = {
        router: PropTypes.object
    };

    constructor() {
        super();
        this.state = {drugList:
                [
                    {text: 'Amoxicillin', id:1},
                    {text: 'Amoxicillin/Clavulanate', id:2},
                    {text: 'Ampicillin/Sulbactam', id:3},
                    {text: 'Piperacillin/Tazobactam', id:4},
                    {text: 'Ticarcillin/Clavulanate', id:5},
                    {text: 'Cefadroxil', id:6},
                    {text: 'Cefazolin', id:7},
                    {text: 'Cefalexin', id:8},
                    {text: 'Cefaclor', id:9},
                    {text: 'Cefprozil', id:10},
                    {text: 'Cefotaxime', id:11},
                    {text: 'Cefixime', id:12},
                    {text: 'Cefdinir', id:13},
                    {text: 'Cefditoren', id:14},
                    {text: 'Cefotaxime', id:15},
                    {text: 'Azithromycin', id:16},
                    {text: 'Clarithromycin', id:17},
                    {text: 'Erythromycin', id:18},
                    {text: 'Telithromycin', id:19},
                    {text: 'Spiramycin', id:20},
                    {text: 'Ciprofloxacin', id:21},
                    {text: 'Enoxacin', id:22},
                    {text: 'Gatifloxacin', id:23},
                    {text: 'Gemifloxacin', id:24},
                    {text: 'Levofloxacin', id:25},
                    {text: 'Lomefloxacin', id:26},
                    {text: 'Moxifloxacin', id:27},
                    {text: 'Nalidixic acid', id:28},
                    {text: 'Norfloxacin', id:29},
                    {text: 'Demeclocycline', id:30},
                    {text: 'Doxycycline', id:31},
                    {text: 'Minocycline', id:32},
                    {text: 'Oxytetracycline', id:33},
                    {text: 'Tetracycline', id:34},
                    {text: 'Amikacin', id:35},
                    {text: 'Gentamicin', id:36},
                    {text: 'Kanamycin', id:37},
                    {text: 'Neomycin', id:38},
                    {text: 'Netilmicin', id:39},
                    {text: 'Tobramycin', id:40},
                    {text: 'Paromomycin', id:41},
                    {text: 'Spectinomycin', id:42},
                    {text: 'Mafenide', id:43},
                    {text: 'Sulfacetamide', id:44},
                    {text: 'Sulfadiazine', id:45},
                    {text: 'Silver sulfadiazine', id:46},
                    {text: 'Sulfadimethoxine', id:47},
                    {text: 'Sulfamethizole', id:48},
                    {text: 'Sulfamethoxazole', id:49},
                    {text: 'Sulfasalazine', id:50},
                    {text: 'Sulfisoxazole', id:51},
                    {text: 'Carbamazepine', id:52},
                    {text: 'Phenytoin', id:53},
                    {text: 'Phenobarbital', id:54},
                    {text: 'Lamotrigine', id:55},
                    {text: 'Fosphenytoin', id:56},
                    {text: 'Valproic acid', id:57},
                    {text: 'Paracetomol', id:57}
                ],
            prescriptions: [],
            currentSelection: "",
            currentQty:""
        };
    }

    prescriptionOnSelect(e){
        let currSel = e.params.data.text;
        this.setState({currentSelection : currSel});
    };

    onQtyChange(e){
        this.setState({currentQty:e.target.value});
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){

            let newItem = [this.state.currentSelection, this.state.currentQty];

            if(newItem[0]==="Paracetomol"){
                alert("This patient is alergic to Paracetomol");
            }else{
                this.setState({prescriptions:[...this.state.prescriptions, newItem]});
            }

        }

    };

    getSelectedPrescriptions = () => {
        let table = [];
        for(let i = 0; i < this.state.prescriptions.length; i++){
            let children = [];
            for(let j = 0 ; j < 2 ; j++){
                children.push(<td>{this.state.prescriptions[i][j]}</td>);
            }
            table.push(<tr>{children}</tr>);
        }
        return table;
    }


    render() {
        return (
            <div>

                <div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="form-group">
                                <label className="fieldHeader">Symptoms</label>
                                <textarea className="form-control" id="symptomsTextArea" rows="3"></textarea>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="form-group">
                                <label className="fieldHeader">Diagnosis</label>
                                <textarea className="form-control" id="diagnosisTextArea" rows="3"></textarea>
                            </div>
                        </div>
                    </div>


                    <div className="row">

                        <div className="col-xl-4 col-lg-4">
                            <div className="form-group">
                                <label className="fieldHeader">Prescriptions</label>

                                <div className="select2">
                                    <Select2
                                        ref="tags"
                                        data={this.state.drugList}
                                        options={{placeholder: 'Search for prescription'}}
                                        onSelect={this.prescriptionOnSelect.bind(this)}
                                        />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-2">
                            <label className="fieldHeader">Qty</label>
                            <input type="text" className="form-control qtyStyle" id="qty" onChange={e => this.onQtyChange(e)} onKeyPress={this.handleKeyPress.bind(this)}></input>
                        </div>

                        <div className="col-xl-6 col-lg-6">

                            <Panel>
                                <Panel.Heading className="fieldHeader">Selected Prescriptions</Panel.Heading>
                                <Panel.Body>
                                    <table>
                                        {this.getSelectedPrescriptions()}
                                    </table>
                                </Panel.Body>
                            </Panel>

                        </div>


                    </div>

                    <div className="floatRight">
                        <Button bsstyle="primary" bssize="large" active>
                            Submit
                        </Button>
                        </div>

                </div>
            </div>
        );
    }

;
}

function mapStateToProps() {
  return {

  }
}

export default connect(mapStateToProps, {})(AddPrescriptions);
