import React, { SetStateAction } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { colors, spacing, strings } from "src/values";
import { ListEmptyScreen } from "src/components";
import { testIdProps } from "src/utils";

export interface EmbryonicComponentProps {
  /**
   * Optional to retry on network
   */
  setConnectivityToggle?: SetStateAction<boolean>
  /**
   * Optional check if loading
   */
  isLoading?: boolean
  /**
   * data to display
   */
  data?: object | Array<any> | undefined | null
  /**
   * Optional check if internet is connected.
   */
  hasInternetConnection?: boolean | null
  /**
   * Optional check if any error.
   */
  hasError?: boolean
  /**
   * Override try again operation.
   */
  tryAgain?: () => void
}

export const EmbryonicComponent = ({
  setConnectivityToggle,
  isLoading,
  data,
  hasInternetConnection,
  hasError,
  tryAgain,
}: EmbryonicComponentProps) => {
  const tryAgainHandler = () => {
    typeof tryAgain === "function" ? tryAgain() : setConnectivityToggle?.((prev) => !prev)
  }

  if (isLoading) {
    return (
        <View style={styles.container} {...testIdProps("loading-component")}>
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
      <ListEmptyScreen displayText={strings.somethingWentWrong} onClickHandler={tryAgainHandler} {...testIdProps("list-empty-component")}/>
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
