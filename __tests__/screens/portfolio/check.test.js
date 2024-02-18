import { checkIfValidStock } from '../../../src/screens/portfolio/helper/checks';

describe('checkIfValidStock Function Tests', () => {
  test('returns false for valid stock', () => {
    const validStock = { symbol: 'TCS', avgPrice: 150, close: 148, ltp: 149, quantity: 10 };
    expect(checkIfValidStock(validStock)).toBe(false);
  });

  test('returns true for stock without symbol', () => {
    const stockWithoutSymbol = { avgPrice: 150, close: 148, ltp: 149, quantity: 10 };
    expect(checkIfValidStock(stockWithoutSymbol)).toBe(true);
  });

  test('returns true for stock with non-positive avgPrice', () => {
    const stockWithInvalidAvgPrice = { symbol: 'TCS', avgPrice: 0, close: 148, ltp: 149, quantity: 10 };
    expect(checkIfValidStock(stockWithInvalidAvgPrice)).toBe(true);
  });

  test('returns true for stock with non-positive close', () => {
    const stockWithInvalidClose = { symbol: 'TCS', avgPrice: 150, close: 0, ltp: 149, quantity: 10 };
    expect(checkIfValidStock(stockWithInvalidClose)).toBe(true);
  });

  test('returns true for stock with non-positive ltp', () => {
    const stockWithInvalidLtp = { symbol: 'TCS', avgPrice: 150, close: 148, ltp: 0, quantity: 10 };
    expect(checkIfValidStock(stockWithInvalidLtp)).toBe(true);
  });

  test('returns true for stock with non-positive quantity', () => {
    const stockWithInvalidQuantity = { symbol: 'TCS', avgPrice: 150, close: 148, ltp: 149, quantity: 0 };
    expect(checkIfValidStock(stockWithInvalidQuantity)).toBe(true);
  });

  test('returns true for null stock', () => {
    expect(checkIfValidStock(null)).toBe(true);
  });

  test('returns true for undefined stock', () => {
    expect(checkIfValidStock(undefined)).toBe(true);
  });
});
