import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import { filterByTypes } from "../filters";
import TransactionService from "../../utils/services/transactionsService";
import { AccountTypes } from "../accountTypes";
import { TransactionTypes } from "../transactionTypes";
import { Transactions } from "../transactions";

export class TransactionsSections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountType: [],
      transactionType: [],
      loading: true
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const transactions = await TransactionService.getAllTransactions();
    this.setState({
      loading: false,
      transactions
    });
  };

  handleAccountClick = evt => {
    let account = evt.target.value + " Account";
    let accountArr = this.state.accountType;
    if (account === this.state.accountType[this.state.accountType.length - 1]) {
      accountArr.pop();
    } else {
      accountArr.push(account);
    }
    this.setState({
      accountType: accountArr
    });
  };

  handleTransactionClick = evt => {
    let transaction = evt.target.value.toLowerCase();
    let transactionArr = this.state.transactionType;
    if (
      transaction ===
      this.state.transactionType[this.state.transactionType.length - 1]
    ) {
      transactionArr.pop();
    } else {
      transactionArr.push(transaction);
    }
    this.setState({
      transactionType: transactionArr
    });
  };

  renderLoading = () => {
    return (
      <div className="tr-loader">
        <CircularProgress disableShrink />
      </div>
    );
  };

  render() {
    const { transactions, accountType, transactionType, loading } = this.state;

    if (loading) {
      return this.renderLoading();
    }

    return (
      <div className="main">
        <div className="left-content">
          <h4>Filters</h4>
          <AccountTypes handleAccountClick={this.handleAccountClick} />
          <br />
          <TransactionTypes
            handleTransactionClick={this.handleTransactionClick}
          />
        </div>
        <div className="right-content">
          <Transactions
            transactions={filterByTypes(
              transactions,
              accountType,
              transactionType
            )}
          />
        </div>
      </div>
    );
  }
}
