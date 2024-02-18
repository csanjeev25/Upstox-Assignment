import React from "react"
import isEqual from "lodash/isEqual"
import { IStockList, PortfolioSummary, StockList } from "src/screens/portfolio"

function PortfolioContainer(props: IStockList): React.JSX.Element {
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

export const MemoizedPortfolioContainer = React.memo(PortfolioContainer, areItemsEqual);
