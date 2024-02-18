import React from "react"
import { StyleSheet, View } from "react-native"
import { BreakDownRowItem, IPortfolioSummary, PortfolioBreakdown, getTotalProfitLoss } from "src/screens/portfolio"
import { spacing } from "src/values"

export function PortfolioSummary(props: IPortfolioSummary) {
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
