import React, { Component } from 'react';

class RecordsRow extends Component {
  convertSecondsToDate(seconds) {
    const mthNameShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var d = new Date(0);
    d.setUTCSeconds(seconds);
    return mthNameShort[d.getMonth()] + "-" + d.getFullYear();
  }

  render() {
    return (
      <tr>
        <td>{this.convertSecondsToDate(this.props.monthyear)}</td>
        <td>$ {this.props.amount}</td>
        <td>{this.props.notes}</td>
      </tr>
    );
  }
}

export default RecordsRow;
