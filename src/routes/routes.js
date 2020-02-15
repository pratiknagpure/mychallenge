import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch } from "react-router-dom";
import { data } from "../utils/data";
import { Main } from "../components/main/main";
import { getAllTransactions } from "../redux/actions";
import TransactionDetails from "../components/transactions-details/transactionDetails";

class Routes extends Component {
  componentDidMount() {
    this.props.loadAllTransactionData();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/details/:transactionId" component={TransactionDetails} />
      </Switch>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadAllTransactionData() {
      dispatch(getAllTransactions(data));
    }
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Routes));
