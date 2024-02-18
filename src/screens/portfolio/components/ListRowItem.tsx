import React from "react"
import { StyleSheet, View } from "react-native"
import { spacing, colors, typography } from "src/values"
import { Text } from "src/components"
import { IRowItem } from "src/screens/portfolio"

export function RowItem(props: IRowItem) {
  const { leftText, rightTitleText, rightValueText } = props

  return (
    <View style={styles.summary}>
      <View style={styles.summaryItem}>
        <Text text={leftText} style={{ fontFamily: typography.primary.bold }} />
        <View style={{ flexDirection: "row" }}>
          <Text text={rightTitleText} />
          <Text style={{ fontFamily: typography.primary.bold }} text={rightValueText} />
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
