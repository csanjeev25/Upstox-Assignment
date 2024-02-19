import React from "react"
import { render, fireEvent } from "@testing-library/react-native"
import { PortfolioScreen } from "../../../src/screens/portfolio/components/PortfolioScreen"
import { useFetch } from ".../../../src/hooks/useFetch"
import { SafeAreaProvider } from "react-native-safe-area-context"

// Mock the useFetch hook
jest.mock("../../../src/hooks/useFetch")

describe("PortfolioScreen", () => {
  it("should render EmbryonicComponent when loading", () => {
    useFetch.mockReturnValue({
      hasInternetConnection: true,
      hasError: false,
      isLoading: true,
      data: null,
      isConnectionTimeout: false,
      reload: jest.fn(),
    })

    const { getByTestId } = render(<PortfolioScreen />)
    expect(getByTestId("loading-component")).toBeTruthy()
  })

  it("should render PortfolioContainer when data is loaded", () => {
    useFetch.mockReturnValue({
      hasInternetConnection: true,
      hasError: false,
      isLoading: false,
      data: {
        userHolding: [
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
        ],
      },
      isConnectionTimeout: false,
      reload: jest.fn(),
    })

    const { getByTestId } = render(<PortfolioScreen />)
    expect(getByTestId("portfolio-screen")).toBeTruthy()
  })
})
