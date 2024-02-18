import { UserHoldings } from "../types"

export const calculateProfitLoss = (ltp: number, avgPrice: number, quantity: number): number => {
  return ltp * quantity - avgPrice * quantity
}

export const getTodayPNL = (stockData: UserHoldings[]) => {
  let todaysProfitLoss = 0
  for (let i = 0; i <= stockData.length - 1; i++) {
    todaysProfitLoss += (stockData[i].close - stockData[i].ltp) * stockData[i].quantity;
  }
  return `${parseFloat(todaysProfitLoss).toFixed(2)}`
}

export const getTotalCurrentValue = (stockData: UserHoldings[]) => {
  let totalCurrentValue = 0;
  for (let i = 0; i <= stockData.length - 1; i++) {
    totalCurrentValue += (stockData[i].ltp * stockData[i].quantity)
  }
  return `${parseFloat(totalCurrentValue).toFixed(2)}`
}

export const getTotalInvestment = (stockData: UserHoldings[]) => {
  let totalInvestment = 0;
  for (let i = 0; i <= stockData.length - 1; i++) {
    totalInvestment += (stockData[i].avgPrice * stockData[i].quantity)
  }
  return `${parseFloat(totalInvestment).toFixed(2)}`
}

export const getTotalProfitLoss = (stockData: UserHoldings[]) => {
  let totalInvestment = getTotalInvestment(stockData);
  let totalCurrentValue = getTotalCurrentValue(stockData);
  return `${parseFloat(totalCurrentValue - totalInvestment).toFixed(2)}`
}