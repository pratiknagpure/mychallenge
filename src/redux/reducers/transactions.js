import { GET_TRANSACTIONS } from "../actionTypes";

export const transactions = (state = {}, action) => {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return {
        transactions: action.transactions
      };
    default:
      return state;
  }
};
