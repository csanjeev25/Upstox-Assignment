import React from "react"
import { StyleSheet, Text, View } from "react-native"
import StockItem from "./StockItem"
import { colors, spacing } from "../../../values/theme/"
import { IStockList, UserHoldings } from "../types"
import ListEmptyScreen from "../../../components/ListEmptyScreen"
import { isNullOrEmptyArray } from "../../../utils/common.utils"
import { ScrollView } from "react-native-gesture-handler"

interface IRenderItem {
  item: UserHoldings | null | undefined
  index: number
}

function StockList(props: IStockList) {
  const { stockData, reload } = props

  const rowRenderer = ({ item, index }: IRenderItem) => {
    if (!item) {
      return null
    }
    return (
      <View key={item?.symbol}>
        <StockItem stockData={item} index={index} />
        {renderSeparator(index)}
      </View>
    )
  }

  const renderSeparator = (index) => {
    if (index < stockData.length - 1) {
      return (
        <View style={styles.separator} />
      )
    }
  }

  return (
    <View style={styles.containerStyle}>
      {isNullOrEmptyArray(stockData) ? (
        <ListEmptyScreen onClickHandler={reload} />
      ) : (
        <ScrollView contentContainerStyle={styles.container}>
          {stockData?.map((item, index) => (
            rowRenderer({item, index})
          ))}
        </ScrollView>
      )}
    </View>
  )
}

export default StockList

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: colors.palette.white,
  },
  separator: {
    height: 1,
    backgroundColor: colors.palette.whiteFive,
    marginLeft: spacing.grid_5_half,
    marginRight: spacing.grid_5_half,
  },
  container: {
    width: '100%',
    flexDirection: 'column',
  }
})
