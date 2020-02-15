import React from "react";
import "../../styles/main.scss";
import { TransactionsSections } from "./transactionsSections";

export const Main = props => {
  return (
    <div className="container">
      <div className="content-area">
        <header>
          <h1 style={{ "text-align": "left" }}>My Transactions</h1>
        </header>
        <hr />
        <TransactionsSections />
      </div>
    </div>
  );
};
