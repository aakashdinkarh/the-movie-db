// Convert time to hours and minutes
export const calcTime = (time: number) => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};
// Convert a number to money formatting
export const convertMoney = (money: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};

export const persistedState = (stateName: string | number) => {
  const sessionState = sessionStorage.getItem(stateName.toString());
  return sessionState && JSON.parse(sessionState);
};

export const persistState = (stateName: string | number, state: any) => {
  sessionStorage.setItem(stateName.toString(), JSON.stringify(state))
} 