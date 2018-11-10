import React, { Component } from 'react';
import { Table, Glyphicon, Modal } from 'react-bootstrap';
import RecordsModal from './RecordsModal';

class PassiveIncomePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showRecordsModal: false
    };

    this.showRecordsModal = this.showRecordsModal.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ showRecordsModal: false });
  }

  showRecordsModal() {
    this.setState({ showRecordsModal: true });
  }

  render() {
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
              <tr>
                <td>Sep-2018</td>
                <td>$0.00</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Oct-2018</td>
                <td>$12.00</td>
                <td>Bank Interest</td>
              </tr>
              <tr>
                <td>Nov-2018</td>
                <td>$53.00</td>
                <td>Fx Earnings</td>
              </tr>
              <tr>
                <td>Nov-2018</td>
                <td>$12.28</td>
                <td>Bank Interest</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <RecordsModal
          show={this.state.showRecordsModal}
          handleClose = {this.handleClose}
        />

      </div>
    )
  }
}

export default PassiveIncomePanel;
