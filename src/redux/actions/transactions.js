import { GET_TRANSACTIONS } from "../actionTypes";

export const getAllTransactions = transactions => {
  return {
    type: GET_TRANSACTIONS,
    transactions
  };
};
