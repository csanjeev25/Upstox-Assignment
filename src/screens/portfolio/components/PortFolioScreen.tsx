import React from "react"
import { View, StyleSheet } from "react-native"
import { Header, EmbryonicComponent } from "src/components"
import { strings, colors } from "src/values"
import { useFetch } from "src/hooks"
import { apiUrls } from "src/services"
import { MemoizedPortfolioContainer } from "src/screens/portfolio"

export function PortfolioScreen(): React.JSX.Element {
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
      />
    )
  }

  return (
    <View style={styles.container}>
      <Header title={strings.headerTitle} />
      <MemoizedPortfolioContainer stockData={stockData} reload={retry} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.palette.greyish, flex: 1, flexDirection: "column" },
})
