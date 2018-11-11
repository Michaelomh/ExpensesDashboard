import React, { Component } from 'react';

class RecordsRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.monthyear}</td>
        <td>{this.props.amount}</td>
        <td>{this.props.notes}</td>
      </tr>
    );
  }
}

export default RecordsRow;
