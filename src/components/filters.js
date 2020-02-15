export const getTransactionById = (data, accountNumber) => {
  console.log("data", data);
  return data["transactions"].reduce((result, id) => {
    if (accountNumber === id["account"]) {
      result.push(id);
      return result;
    }
    return result;
  }, []);
};

export const filterByTypes = (data, accountType, transactionType) => {
  if (!accountType.length && !transactionType.length) {
    return data["transactions"];
  }

  if (accountType.length && transactionType.length) {
    return data["transactions"].reduce((result, id) => {
      accountType.forEach(account => {
        transactionType.forEach(transaction => {
          if (
            account === id["accountName"] &&
            transaction === id["transactionType"]
          ) {
            result.push(id);
            return result;
          }
        });
      });
      return result;
    }, []);
  } else if (accountType.length) {
    return data["transactions"].reduce((result, id) => {
      accountType.forEach(account => {
        if (account === id["accountName"]) {
          result.push(id);
          return result;
        }
      });

      return result;
    }, []);
  } else if (transactionType.length) {
    return data["transactions"].reduce((result, id) => {
      transactionType.forEach(transaction => {
        if (transaction === id["transactionType"]) {
          result.push(id);
          return result;
        }
      });
      return result;
    }, []);
  }
};
