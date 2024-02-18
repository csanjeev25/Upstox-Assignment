import React from "react"
import { View, StyleSheet, StyleProp, ViewStyle, TextStyle, TextProps } from "react-native"
import { Text } from "../components/Text"
import { ExtendedEdge, useSafeAreaInsetsStyle } from "../hooks/useSafeAreaInsetsStyle"
import { colors, fontSize, spacing, typography } from "../values/theme"
import { IosUtils } from "../utils/ios.utils";

export interface HeaderProps {
  /**
   * Optional title style override.
   */
  titleStyle?: StyleProp<TextStyle>
  /**
   * Optional inner header wrapper style override.
   */
  style?: StyleProp<ViewStyle>
  /**
   * Title text to display
   */
  title?: TextProps["text"]
  /**
   * Optional inner header wrapper style override.
   */
  containerStyleOverride?: StyleProp<ViewStyle>
  /**
   * Optional inner header wrapper style override.
   */
  titleStyleOverride?: StyleProp<ViewStyle>
  /**
   * Override the default edges for the safe area.
   */
  safeAreaEdges?: ExtendedEdge[]
}

export function Header(props: HeaderProps) {
  const {
    title,
    titleStyle,
    titleStyleOverride,
    containerStyleOverride,
    safeAreaEdges,
  } = props
  const $containerInsets = useSafeAreaInsetsStyle(safeAreaEdges)
  return (
    <View style={[$containerInsets, containerStyleOverride ? containerStyleOverride : styles.container]}>
      <Text
        size="md"
        text={title}
        style={[titleStyleOverride ? titleStyleOverride : styles.title, titleStyle]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: 'purple',
    height: spacing.grid_7,
    elevation: 2,
    ...IosUtils.getIosElevation(spacing.xxxs),
  },
  title: {
    fontSize: fontSize.h2,
    color: colors.palette.white,
    fontFamily: typography.primary?.bold,
    marginLeft: spacing.grid_2,
  },
})
