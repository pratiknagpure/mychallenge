import React from "react";
import { accountTypes } from "../utils/data";

export const AccountTypes = props => {
  const { handleAccountClick } = props;
  return (
    <div className="filter-container">
      <h4>Account Name</h4>
      {accountTypes.map(account => (
        <div key={account} className="account-name">
          <input
            className="options-wrapper"
            type="checkbox"
            name={account}
            value={account}
            onClick={handleAccountClick}
          />
          <label>{account} Account</label>
        </div>
      ))}
    </div>
  );
};
