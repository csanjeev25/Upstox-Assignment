import React from "react"
import { render, fireEvent } from "@testing-library/react-native"
import PortfolioBreakdown from "../../../src/screens/portfolio/components/PortfolioBreakdown" // Adjust the import path accordingly
import { useSummary } from "src/screens/portfolio"
import renderer from "react-test-renderer"

jest.mock("src/screens/portfolio", () => ({
  ...jest.requireActual("src/screens/portfolio"),
  useSummary: jest.fn(),
}))

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

describe("PortfolioBreakdown Component", () => {
  const mockUseSummary = {
    expanded: false,
    onClickArrow: jest.fn(),
    breakdownItems: [
      {
        leftText: "Current Value:",
        rightText: "8732",
      },
      {
        leftText: "Total Investment: ",
        rightText: "9872",
      },
      {
        leftText: "Today's Profit & Loss: ",
        rightText: "98789",
      },
    ],
  }

  beforeEach(() => {
    useSummary.mockImplementation(() => mockUseSummary)
  })

  it("renders correctly", () => {
    const tree = renderer.create(<PortfolioBreakdown stockData={mockStockData} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("toggles expanded state on arrow press", () => {
    const { getByTestId } = render(<PortfolioBreakdown stockData={mockStockData} />)
    const arrowButton = getByTestId("portfolio-popup-pull")
    fireEvent.press(arrowButton)

    expect(mockUseSummary.onClickArrow).toHaveBeenCalled()
  })

  it("renders breakdown items when expanded", () => {
    useSummary.mockImplementation(() => ({ ...mockUseSummary, expanded: true }))

    const { getByText } = render(<PortfolioBreakdown stockData={mockStockData} />)

    expect(getByText("Current Value:")).toBeDefined()
    expect(getByText("8732")).toBeDefined()
    expect(getByText("Total Investment: ")).toBeDefined()
    expect(getByText("9872")).toBeDefined()
    expect(getByText("Today's Profit & Loss: ")).toBeDefined()
    expect(getByText("98789")).toBeDefined()
  })
})
