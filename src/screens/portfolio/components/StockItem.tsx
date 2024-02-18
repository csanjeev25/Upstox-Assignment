import React from "react"
import { StyleSheet, View } from "react-native"
import { UserHoldings } from "../types"
import { spacing } from "../../../values/theme/spacing"
import { Text } from "../../../components"
import { colors, typography } from "../../../values/theme"
import { strings } from "../../../values/strings"
import { calculateProfitLoss } from "../helper/finance"

interface Props {
  stockData: UserHoldings
  index: number
}

function StockItem(props: Props) {
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

export default StockItem

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
