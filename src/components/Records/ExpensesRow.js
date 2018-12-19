import React, { Component } from 'react';

class ExpensesRow extends Component {
  convertSecondsToDate(seconds) {
    console.log(seconds);
    var d = new Date(0);
    d.setUTCSeconds(seconds);
    console.log(d);
    return d.getMonth() + "-" + d.getFullYear();
  }

//   <td>05/11/18 20:30</td>

  render() {
    console.log(this.props.timestamp);

    return (
      <tr>
        <td>{this.convertSecondsToDate(this.props.monthyear)}</td>
        <td>{this.props.category}</td>
        <td>${this.props.amount}</td>
        <td>{this.props.notes}</td>
      </tr>
    );
  }
}

export default ExpensesRow;
