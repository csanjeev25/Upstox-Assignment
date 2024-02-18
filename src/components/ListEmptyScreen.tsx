import React from "react"
import { View, StyleSheet, TouchableOpacity } from "react-native"
import { Text } from "./Text"
import { colors, spacing, typography } from "../values/theme"

interface IProps {
  displayText?: string
  onClickHandler: () => void
}
function ListEmptyScreen(props: IProps) {
  const { displayText, onClickHandler } = props
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClickHandler}>
        <Text style={styles.displayText} text={displayText} size="md"></Text>
        <Text style={styles.button} size="lg" text="Retry"></Text>
      </TouchableOpacity>
    </View>
  )
}

export default ListEmptyScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  displayText: {
    color: colors.palette.greyish,
    fontFamily: typography.primary.normal,
    marginVertical: spacing.grid_2,
  },
  button: { color: colors.palette.seafoamBlue, fontFamily: typography.primary.semibold },
})
