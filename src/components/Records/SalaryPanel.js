import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class SalaryPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="active-panel record-panel">
        <h1>Salary Records</h1>
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
                <td>$4000.00</td>
                <td>Salary</td>
              </tr>
              <tr>
                <td>Oct-2018</td>
                <td>$4000.00</td>
                <td>Salary</td>
              </tr>
              <tr>
                <td>Nov-2018</td>
                <td>$4000.00</td>
                <td>Salary</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    )
  }
}

export default SalaryPanel;
