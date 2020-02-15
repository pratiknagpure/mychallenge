import React, { Component } from "react";
import "../scss/profile.scss";
import { connect } from "react-redux";
import { getIndividualTransaction } from "../redux/selector";

class TransactionDetails extends Component {
  render() {
    const { transactions } = this.props;
    if (!transactions) {
      return null;
    }

    let individualTransaction = getIndividualTransaction(
      transactions,
      window.location.pathname.split("/").pop()
    )[0];

    const {
      account,
      accountName,
      currencyCode,
      amount,
      transactionType
    } = individualTransaction;

    return (
      <div className="account-area">
        <h1>Transaction {account}</h1>
        <hr />
        <div className="account-information">
          <h4>Account No.: {amount}</h4>
          <h4>Account Name: {accountName}</h4>
          <h4>Currency Code: {currencyCode}</h4>
          <h4>Ammount: {amount}</h4>
          <h4>Transaction Type: {transactionType}</h4>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  transactions: state.transactions.transactions
});

export default connect(mapStateToProps)(TransactionDetails);
