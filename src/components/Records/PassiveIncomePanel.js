import React, { Component } from 'react';
import { Table, Glyphicon } from 'react-bootstrap';
import RecordsModal from './RecordsModal';
import RecordsRow from './RecordsRow';

class PassiveIncomePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showRecordsModal: false,
        passiveIncomeData: []
    };

    this.showRecordsModal = this.showRecordsModal.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    document.getElementById("root").style.filter = "blur(0px)";
    this.setState({ showRecordsModal: false });
  }

  showRecordsModal() {
    document.getElementById("root").style.filter = "blur(5px)";
    this.setState({ showRecordsModal: true });
    console.log(this.state.passiveIncomeData);
  }



  render() {
    let { passiveIncomeData } = this.props;

    return (
      <div className="passive-panel record-panel">
          <h1>
            Passive Income Records
            <Glyphicon glyph="plus" className="pull-right" onClick={this.showRecordsModal}/>
          </h1>
        <div className="record-table">
          <Table condensed hover responsive>
            <thead>
              <tr>
                <th>Month-Year</th>
                <th>Amount</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
                {
                  passiveIncomeData.map((item,i) => {
                     return(
                       <tr key={i}>
                         <td>{item.monthyear}</td>
                         <td>{item.amount}</td>
                         <td>{item.notes}</td>
                       </tr>
                     );
                  })
                }
            </tbody>
          </Table>
        </div>

        <RecordsModal
          show={this.state.showRecordsModal}
          handleClose = {this.handleClose}
          dbToConnect = 'PassiveIncome'
        />

      </div>
    )
  }
}

export default PassiveIncomePanel;
