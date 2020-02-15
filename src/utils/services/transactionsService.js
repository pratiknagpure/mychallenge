import { data } from "../data";

class TransactionService {
  constructor(data) {
    this.data = data;
  }

  getAllTransactions = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
      }, 250);
    });
  };
}

export default new TransactionService(data);
