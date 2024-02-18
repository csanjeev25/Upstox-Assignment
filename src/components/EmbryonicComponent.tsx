import React from "react"
import { ActivityIndicator, StyleSheet, View } from "react-native"
import { colors, spacing } from "../values/theme"
import ListEmptyScreen from "./ListEmptyScreen"
import { strings } from "../values/strings"

const EmbryonicComponent = ({
  setConnectivityToggle,
  isLoading,
  data,
  hasInternetConnection,
  hasError,
  tryAgain,
}: any) => {
  const tryAgainHandler = () => {
    typeof tryAgain === "function" ? tryAgain() : setConnectivityToggle?.((prev) => !prev)
  }

  if (isLoading) {
    return (
        <View style={styles.container}>
          <ActivityIndicator style={styles.container} size="large" color='purple' />
        </View>
      )
  }

  if (!data && !hasInternetConnection) {
    return (
      <ListEmptyScreen
        displayText={strings.noInternetConnection}
        onClickHandler={tryAgainHandler}
      />
    )
  }

  if (hasError) {
    return (
      <ListEmptyScreen displayText={strings.somethingWentWrong} onClickHandler={tryAgainHandler} />
    )
  }

  return null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    zIndex: 3,
    backgroundColor: colors.palette.white,
  },
  scrollableContainer: {
    flexGrow: 1,
    paddingBottom: spacing.grid_13_half,
  },
})

export default EmbryonicComponent
