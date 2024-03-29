import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { IRenderItem, IStockList, StockItem } from "src/screens/portfolio";
import { colors, spacing } from "src/values";
import { ListEmptyScreen } from "src/components";
import { isNullOrEmptyArray, testIdProps } from "src/utils";
import { checkIfValidStock } from "src/screens/portfolio/helper/checks";

export function StockList(props: IStockList) {
  const { stockData, reload } = props

  const rowRenderer = ({ item, index }: IRenderItem) => {
    if (checkIfValidStock(item)) {
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
        <ListEmptyScreen onClickHandler={reload} {...testIdProps("stock-list-empty")}/>
      ) : (
        <ScrollView contentContainerStyle={styles.container} {...testIdProps("stock-list-scroll")}>
          {stockData?.map((item, index) => (
            rowRenderer({item, index})
          ))}
        </ScrollView>
      )}
    </View>
  )
}

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
});

