import React from "react"
import { StyleSheet, View } from "react-native"
import { spacing } from "../../../values/theme/spacing"
import { Text } from "../../../components"
import { colors, typography } from "../../../values/theme"

interface Props {
  leftText: string
  rightTitleText: string
  rightValueText: string
}

function RowItem(props: Props) {
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

export default RowItem;

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
