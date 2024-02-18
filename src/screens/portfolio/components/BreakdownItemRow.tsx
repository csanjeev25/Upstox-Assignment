import React from "react"
import { StyleSheet, View, ViewStyle, StyleProp } from "react-native"
import { spacing } from "../../../values/theme/spacing"
import { Text } from "../../../components"
import { colors, typography } from "../../../values/theme"
import { strings } from "src/values/strings"

export interface IBreakDownRowItem {
  leftText: string
  rightText: string
  style?: StyleProp<ViewStyle>
}

function BreakDownRowItem(props: IBreakDownRowItem) {
  const { leftText, rightText, style } = props

  return (
    <View style={[styles.summary, { marginVertical: spacing.grid_1 }, style]}>
      <View style={styles.summaryItem}>
        <Text text={leftText} style={{ fontFamily: typography.primary.bold }} />
        <Text text={`${strings.rupeeSymbol} ${rightText}`} />
      </View>
    </View>
  )
}

export default BreakDownRowItem;

const styles = StyleSheet.create({
  summary: {
    paddingHorizontal: spacing.grid_2,
    backgroundColor: colors.palette.white,
  },
  summaryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
})
