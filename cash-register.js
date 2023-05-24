function checkCashRegister(price, cash, cid) {
  const currencyUnit = [
    { name: "ONE HUNDRED", value: 100.0 },
    { name: "TWENTY", value: 20.0 },
    { name: "TEN", value: 10.0 },
    { name: "FIVE", value: 5.0 },
    { name: "ONE", value: 1.0 },
    { name: "QUARTER", value: 0.25 },
    { name: "DIME", value: 0.1 },
    { name: "NICKEL", value: 0.05 },
    { name: "PENNY", value: 0.01 }
  ];

  let changeDue = cash - price;
  let totalCID = cid.reduce((total, currency) => total + currency[1], 0.0);
  let change = [];

  if (totalCID < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (totalCID === changeDue) {
    return { status: "CLOSED", change: cid };
  }

  cid = cid.reverse();

  for (let i = 0; i < currencyUnit.length; i++) {
    const { name, value } = currencyUnit[i];
    let currencyAmount = 0;

    while (changeDue >= value && cid[i][1] > 0) {
      changeDue -= value;
      changeDue = Math.round(changeDue * 100) / 100;
      cid[i][1] -= value;
      currencyAmount += value;
    }

    if (currencyAmount > 0) {
      change.push([name, currencyAmount]);
    }
  }

  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change };
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
