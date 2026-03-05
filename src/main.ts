const price: number = 1.87;

type CashSlot = [string, number];

type CID = CashSlot[];

const myDrawer: CID = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

const unitValuesCents: { [key: string]: number } = {
  PENNY: 1,
  NICKEL: 5,
  DIME: 10,
  QUARTER: 25,
  ONE: 100,
  FIVE: 500,
  TEN: 1000,
  TWENTY: 2000,
  "ONE HUNDRED": 10000,
};

const input = document.querySelector<HTMLInputElement>("#cash")!;
const div = document.querySelector<HTMLDivElement>("#change-due")!;
div.textContent = `Total: $${price}\nStatus: Waiting for cash...`;
const button = document.querySelector<HTMLButtonElement>("#purchase-btn")!;

const budgetAvailable = (): number => {
  const totalCents = myDrawer.reduce(
    (sum, item) => sum + Math.round(item[1] * 100),
    0,
  );
  const totalDollars = totalCents / 100;
  return totalDollars;
};

const checkForChange = (cash: number): void => {
  let changeDueCents: number = Math.round((cash - price) * 100);
  const totalCidCents = Math.round(budgetAvailable() * 100);
  if (totalCidCents < changeDueCents) {
    div.textContent = `Total: $${price}\nStatus: INSUFFICIENT_FUNDS`;
    return;
  }

  let changeArray: [string, number][] = [];

  for (let i = myDrawer.length - 1; i >= 0; i--) {
    let currencyName = myDrawer[i][0];
    let unitValue = unitValuesCents[currencyName];
    let amountInSlot = Math.round(myDrawer[i][1] * 100);
    let takenFromSlot = 0;

    while (changeDueCents >= unitValue && amountInSlot > 0) {
      changeDueCents -= unitValue;
      amountInSlot -= unitValue;
      takenFromSlot += unitValue;
    }

    if (takenFromSlot > 0) {
      changeArray.push([currencyName, takenFromSlot / 100]);
    }
  }

  if (changeDueCents > 0) {
    // We had enough total money, but not the right coins
    div.textContent = `Total: $${price}\nStatus: INSUFFICIENT_FUNDS`;
  } else if (totalCidCents === Math.round((cash - price) * 100)) {
    // DRAWER IS NOW EMPTY
    const formatChange = changeArray
      .map((item) => `${item[0]}: $${item[1]}`)
      .join(" ");
    div.textContent = `Total: $${price}\nStatus: CLOSED ${formatChange}`;
  } else {
    // DRAWER STILL HAS MONEY
    const formatChange = changeArray
      .map((item) => `${item[0]}: $${item[1]}`)
      .join(" ");
    div.textContent = `Total: $${price}\nStatus: OPEN ${formatChange}`;
  }
};

const purchaseButtonClicked = (): void => {
  const cash = Number(input.value);
  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
  } else if (cash === price) {
    div.textContent = `Total: $${price}\nNo change due - customer paid with exact cash`;
  } else {
    checkForChange(cash);
  }
};

button.addEventListener("click", purchaseButtonClicked);
