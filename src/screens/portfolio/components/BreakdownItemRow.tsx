import React from "react";
import { StyleSheet, View } from "react-native";
import { spacing, colors, typography, strings  } from "src/values";
import { Text } from "src/components";
import { IBreakDownRowItem } from "src/screens/portfolio";

export function BreakDownRowItem(props: IBreakDownRowItem) {
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
