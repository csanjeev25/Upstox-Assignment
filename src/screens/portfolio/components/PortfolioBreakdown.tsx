import React, { useState } from "react"
import { UserHoldings } from "../types"
import { StyleSheet, View } from "react-native"
import TouchableButton from "../../../components/TouchableButton"
import { testIdProps } from "../../../utils/test.util"
import { colors, spacing, typography } from "../../../values/theme"
import Arrow from "../../../svg/Arrow"
import { Text } from "../../../components/Text"
import BreakDownRowItem, { IBreakDownRowItem } from "./BreakdownItemRow"
import useSummary from "../hooks/useSummary"

interface IPortfolioSummary {
  stockData: UserHoldings[]
}

function PortfolioBreakdown(props: IPortfolioSummary) {
  const { stockData } = props
  const { expanded, onClickArrow, breakdownItems } = useSummary({ stockData })

  const getBreakdown = (item: IBreakDownRowItem) => {
    return <BreakDownRowItem leftText={item.leftText} rightText={item.rightText} />
  }

  return (
    <View style={{ width: "100%" }}>
      <TouchableButton
        activeOpacity={1}
        onPress={() => {
          onClickArrow()
        }}
        style={{ alignItems: "center" }}
        {...testIdProps("portfolio-popup-pull")}
      >
        <View
          pointerEvents="box-only"
          style={[
            {
              transform: [{ rotate: expanded ? "180deg" : "360deg" }],
            },
            styles.arrowStyle,
            styles.arrowWrapper,
          ]}
        >
          <Arrow />
        </View>
      </TouchableButton>
      {expanded ? <View>{breakdownItems?.map((item, _) => getBreakdown(item))}</View> : null}
    </View>
  )
}

export default PortfolioBreakdown

const styles = StyleSheet.create({
  arrowWrapper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  arrowStyle: {
    marginLeft: spacing.grid_1,
    backgroundColor: colors.palette.white,
    width: "100%",
    height: spacing.grid_5_half,
  },
  summary: {
    paddingVertical: spacing.grid_1,
    paddingHorizontal: spacing.grid_2,
    backgroundColor: colors.palette.white,
  },
  summaryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
})
