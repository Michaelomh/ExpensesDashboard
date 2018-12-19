import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import ExpensesRow from './ExpensesRow';


class ExpensesPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    let { expensesData } = this.props;

    return (
      <div className="expenses-panel record-panel">
        <h1>Total Expenses</h1>
        <div className="record-table">
          <Table condensed hover responsive>
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {expensesData.map(data => (
                <ExpensesRow
                  key={data.timestamp + '-' + data.amount + '-' + data.description + '-' + data.category}
                  timestamp = {data.timestamp}
                  amount = {data.amount}
                  category = {data.category}
                  notes = {data.description}
                />
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    )
  }
}

export default ExpensesPanel;
