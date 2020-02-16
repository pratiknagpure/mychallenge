import React from "react";
import ReactDOM from "react-dom";
import { TransactionDetails } from "../transactionDetails";

it("renders TransactionDetails without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TransactionDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});
