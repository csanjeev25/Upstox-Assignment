import React from "react"
import StockList from "./StockList"
import PortfolioSummary from "./PortfolioSummary"
import isEqual from "lodash/isEqual"
import { IStockList } from "../types"

function PortfolioScreen(props: IStockList): React.JSX.Element {
  const { stockData, reload } = props
  return (
    <>
      <StockList stockData={stockData?.userHolding} reload={reload} />
      <PortfolioSummary stockData={stockData?.userHolding} />
    </>
  )
}

function areItemsEqual(prevProps: IStockList, nextProps: IStockList) {
  return isEqual(prevProps.stockData, nextProps.stockData)
}

export default React.memo(PortfolioScreen, areItemsEqual)
