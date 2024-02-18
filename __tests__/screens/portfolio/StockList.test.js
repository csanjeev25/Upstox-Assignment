import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { StockList } from '../../../src/screens/portfolio/components/StockList';

jest.mock('../../../src/screens/portfolio/helper/checks', () => ({
  checkIfValidStock: jest.fn(),
}));

jest.mock('../../../src/utils/common.utils', () => ({
  isNullOrEmptyArray: jest.fn(),
}));

jest.mock('src/components/ListEmptyScreen', () => 'ListEmptyScreen');

const mockStockData = [
  {
    symbol: "TCS",
    quantity: 10,
    ltp: 3250.5,
    avgPrice: 2480.3,
    close: 3312,
  },
  {
    symbol: "Wipro",
    quantity: 80,
    ltp: 550.2,
    avgPrice: 380.3,
    close: 580,
  },
  {
    symbol: "SBI",
    quantity: 12,
    ltp: 650.5,
    avgPrice: 680.3,
    close: 613,
  },
  {
    symbol: "TataMotors",
    quantity: 100,
    ltp: 650.5,
    avgPrice: 280.3,
    close: 780,
  },
  {
    symbol: "Reliance",
    quantity: 10,
    ltp: 2887.1,
    avgPrice: 2780.3,
    close: 2610,
  },
]

describe('<StockList />', () => {
  it('renders correctly with stock data', () => {
    const { getByText } = render(<StockList stockData={mockStockData} reload={() => {}} />);
    expect(getByText('TCS')).toBeTruthy();
    expect(getByText('Wipro')).toBeTruthy();
  });

  it('renders the empty state when no stock data is available', () => {
    const { getAllByTestId } = render(<StockList stockData={[]} reload={() => {}} />);
    expect(getAllByTestId('list-empty-component')).toBeTruthy();
  });

  it('matches snapshot with stock data', () => {
    const tree = render(<StockList stockData={mockStockData} reload={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot when empty', () => {
    const tree = render(<StockList stockData={[]} reload={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});