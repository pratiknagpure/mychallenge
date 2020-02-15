import React from "react";

export const Transactions = props => {
  const { transactions } = props;
  return (
    <div className="table-content">
      <table cellPadding="15">
        <tbody>
          <tr>
            <th>ACCOUNT NO.</th>
            <th>ACCOUNT NAME</th>
            <th>CURRENCY</th>
            <th>AMOUNT</th>
            <th>TRANSACTION TYPE</th>
          </tr>
          {transactions.map(transaction => {
            return (
              <tr key={transaction["account"]}>
                <td>
                  <a href={`/profile/${transaction["account"]}`}>
                    {transaction["account"]}
                  </a>
                </td>
                <td>{transaction["accountName"]}</td>
                <td>{transaction["currencyCode"]}</td>
                <td>{transaction["amount"]}</td>
                <td>{transaction["transactionType"]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
