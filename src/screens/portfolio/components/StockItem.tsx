import React from "react"
import { StyleSheet, View } from "react-native"
import { spacing, colors, typography, strings } from "src/values"
import { Text } from "src/components"
import { calculateProfitLoss, IStockItem } from "src/screens/portfolio"

export function StockItem(props: IStockItem) {
  const { stockData, index } = props

  const { symbol, quantity, ltp, avgPrice, close } = stockData
  if (!symbol) {
    return null
  }

  const getLTPText = (): string => {
    return `${strings.rupeeSymbol} ${parseFloat(ltp).toFixed(2)}`
  }

  const getProfitLossText = (): string => {
    return `${strings.rupeeSymbol} ${parseFloat(
      calculateProfitLoss(ltp, avgPrice, quantity),
    ).toFixed(2)}`
  }

  return (
    <View style={styles.summary}>
      <View style={styles.summaryItem}>
        <Text text={symbol} style={{ fontFamily: typography.primary.bold }} />
        <View style={{ flexDirection: 'row' }}>
          <Text text="LTP: " />
          <Text style={{ fontFamily: typography.primary.bold }} text={getLTPText()}/>
        </View>
      </View>
      <View style={styles.summaryItem}>
        <Text text={`${quantity}`} />
        <View style={{ flexDirection: 'row' }}>
          <Text text="P/L: " />
          <Text style={{ fontFamily: typography.primary.bold }} text={getProfitLossText()}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  summary: {
    paddingVertical: spacing.grid_3_half,
    paddingHorizontal: spacing.grid_2,
    backgroundColor: colors.palette.white,
  },
  summaryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
})
