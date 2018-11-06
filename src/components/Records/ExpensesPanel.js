import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class ExpensesPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="expenses-panel record-panel">
        <h1>Total Expenses</h1>
        <div className="record-table">
          <Table condensed hover responsive>
            <thead>
              <tr>
                <th>Date Time</th>
                <th>Category</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>05/11/18 20:30</td>
                <td>Food</td>
                <td>$3.36</td>
              </tr>
              <tr>
                <td>05/11/18 20:30</td>
                <td>Food</td>
                <td>$3.36</td>
              </tr>
              <tr>
                <td>05/11/18 20:30</td>
                <td>Food</td>
                <td>$3.36</td>
              </tr>
              <tr>
                <td>05/11/18 20:30</td>
                <td>Food</td>
                <td>$3.36</td>
              </tr>
              <tr>
                <td>05/11/18 20:30</td>
                <td>Food</td>
                <td>$3.36</td>
              </tr>
              <tr>
                <td>05/11/18 20:30</td>
                <td>Food</td>
                <td>$3.36</td>
              </tr>
              <tr>
                <td>05/11/18 20:30</td>
                <td>Food</td>
                <td>$3.36</td>
              </tr>
              <tr>
                <td>05/11/18 20:30</td>
                <td>Food</td>
                <td>$3.36</td>
              </tr>
              <tr>
                <td>05/11/18 20:30</td>
                <td>Food</td>
                <td>$3.36</td>
              </tr>
              <tr>
                <td>05/11/18 20:30</td>
                <td>Food</td>
                <td>$3.36</td>
              </tr>
              <tr>
                <td>05/11/18 20:30</td>
                <td>Food</td>
                <td>$3.36</td>
              </tr>
              <tr>
                <td>05/11/18 20:30</td>
                <td>Food</td>
                <td>$3.36</td>
              </tr>
              <tr>
                <td>05/11/18 20:30</td>
                <td>Food</td>
                <td>$3.36</td>
              </tr>
              <tr>
                <td>05/11/18 20:30</td>
                <td>Food</td>
                <td>$3.36</td>
              </tr>
              <tr>
                <td>05/11/18 20:30</td>
                <td>Food</td>
                <td>$3.36</td>
              </tr>
              <tr>
                <td>05/11/18 20:30</td>
                <td>Food</td>
                <td>$3.36</td>
              </tr>
              <tr>
                <td>05/11/18 20:30</td>
                <td>Food</td>
                <td>$3.36</td>
              </tr>
              <tr>
                <td>05/11/18 20:30</td>
                <td>Food</td>
                <td>$3.36</td>
              </tr>
              <tr>
                <td>05/11/18 20:30</td>
                <td>Food</td>
                <td>$3.36</td>
              </tr>
              <tr>
                <td>05/11/18 20:30</td>
                <td>Food</td>
                <td>$3.36</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    )
  }
}

export default ExpensesPanel;
