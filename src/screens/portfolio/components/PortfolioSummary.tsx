import React from "react"
import { UserHoldings } from "../types"
import { StyleSheet, View } from "react-native"
import { getTotalProfitLoss } from "../helper/finance"
import PortfolioBreakdown from "./PortfolioBreakdown"
import { strings } from "src/values/strings"
import BreakDownRowItem from "./BreakdownItemRow"
import { spacing } from "src/values/theme"

export interface IPortfolioSummary {
  stockData: UserHoldings[]
}

function PortfolioSummary(props: IPortfolioSummary) {
  const { stockData } = props

  return (
    <View style={[styles.wrapper]}>
      <View style={{ flexDirection: "column" }}>
        <PortfolioBreakdown stockData={stockData} />
        <BreakDownRowItem
          leftText={"Profit & Loss: "}
          rightText={`${getTotalProfitLoss(stockData)}`}
          style={{ marginTop: spacing.grid_2 }}
        />
      </View>
    </View>
  )
}

export default PortfolioSummary

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    zIndex: 2,
    width: "100%",
    right: 0,
    left: 0,
    bottom: 0,
    flex: 1,
    backgroundColor: "white",
  },
})
