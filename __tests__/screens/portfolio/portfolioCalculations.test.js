import { calculateProfitLoss, getTodayPNL, getTotalCurrentValue, getTotalInvestment, getTotalProfitLoss } from '../../../src/screens/portfolio/helper/finance';

// Mock data for testing
const mockStockData = [
  { close: 100, ltp: 95, quantity: 10, avgPrice: 90 },
  { close: 50, ltp: 55, quantity: 20, avgPrice: 45 }
];

describe('Portfolio Calculations', () => {
  test('calculates profit/loss correctly', () => {
    const ltp = 100;
    const avgPrice = 90;
    const quantity = 10;
    const expectedProfitLoss = 100;
    const profitLoss = calculateProfitLoss(ltp, avgPrice, quantity);
    expect(profitLoss).toBe(expectedProfitLoss);
  });

  test('calculates today\'s PNL correctly', () => {
    const expectedTodaysPNL = '-50.00';
    const todaysPNL = getTodayPNL(mockStockData);
    expect(todaysPNL).toBe(expectedTodaysPNL);
  });

  test('calculates total current value correctly', () => {
    const expectedTotalCurrentValue = '2050.00';
    const totalCurrentValue = getTotalCurrentValue(mockStockData);
    expect(totalCurrentValue).toBe(expectedTotalCurrentValue);
  });

  test('calculates total investment correctly', () => {
    const expectedTotalInvestment = '1800.00';
    const totalInvestment = getTotalInvestment(mockStockData);
    expect(totalInvestment).toBe(expectedTotalInvestment);
  });

  test('calculates total profit/loss correctly', () => {
    const expectedTotalProfitLoss = '250.00';
    const totalProfitLoss = getTotalProfitLoss(mockStockData);
    expect(totalProfitLoss).toBe(expectedTotalProfitLoss);
  });
});
