import React from "react";
import { transactionTypes } from "../utils/data";

export const TransactionTypes = props => {
  const { handleTransactionClick } = props;
  return (
    <div className="filter-container">
      <h4>Transaction Type</h4>
      {transactionTypes.map(transaction => (
        <div key={transaction} className="transaction-type">
          <input
            className="options-wrapper"
            type="checkbox"
            name={transaction}
            value={transaction}
            onClick={handleTransactionClick}
          />
          <label>{transaction}</label>
        </div>
      ))}
    </div>
  );
};
