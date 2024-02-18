import React from "react"
import { View, StyleSheet } from "react-native"
import { Header } from "../../../components/Header"
import { strings } from "../../../values/strings"
import useFetch from "../../../hooks/useFetch"
import apiUrls from "../../../services/network/api.urls"
import { colors } from "../../../values/theme"
import EmbryonicComponent from "../../../components/EmbryonicComponent"
import PortfolioContainer from "./PortfolioContainer"

function PortfolioScreen(): React.JSX.Element {
  const {
    hasInternetConnection,
    hasError,
    isLoading,
    data: stockData,
    isConnectionTimeout,
    reload,
  } = useFetch({
    url: apiUrls.getUserHoldings(),
  })

  const retry = () => {
    reload()
  }

  if (!stockData || isLoading || hasError) {
    return (
      <EmbryonicComponent
        isLoading={isLoading}
        hasError={hasError}
        hasInternetConnection={hasInternetConnection && !isConnectionTimeout}
        tryAgain={reload}
        showHeader
      />
    )
  }

  return (
    <View style={styles.container}>
      <Header title={strings.headerTitle} />
      <PortfolioContainer stockData={stockData} reload={retry} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.palette.greyish, flex: 1, flexDirection: "column" },
})

export default PortfolioScreen
