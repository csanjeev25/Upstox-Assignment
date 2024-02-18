import React from "react"
import { StyleProp, Text as RNText, TextProps as RNTextProps, TextStyle } from "react-native"
import { colors, typography } from "../values/theme"

type Presets = keyof typeof $presets
type Sizes = keyof typeof $sizeStyles

export interface TextProps extends RNTextProps {
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<TextStyle>
  /**
   * One of the different types of text presets.
   */
  preset?: Presets
  /**
   * Children components.
   */
  children?: React.ReactNode
  /**
   * Text size modifier.
   */
  size?: Sizes
}

export function Text(props: TextProps) {
  const { size, text, children, style: $styleOverride, ...rest } = props

  const content = text || children

  const preset: Presets = props.preset ?? "default"
  const $styles: StyleProp<TextStyle> = [
    $presets[preset],
    $styleOverride,
    size && $sizeStyles[size],
  ]

  return (
    <RNText {...rest} style={$styles}>
      {content}
    </RNText>
  )
}

const $sizeStyles = {
  xxl: { fontSize: 36, lineHeight: 44 } satisfies TextStyle,
  xl: { fontSize: 24, lineHeight: 34 } satisfies TextStyle,
  lg: { fontSize: 20, lineHeight: 32 } satisfies TextStyle,
  md: { fontSize: 18, lineHeight: 26 } satisfies TextStyle,
  sm: { fontSize: 16, lineHeight: 24 } satisfies TextStyle,
  xs: { fontSize: 14, lineHeight: 21 } satisfies TextStyle,
  xxs: { fontSize: 12, lineHeight: 18 } satisfies TextStyle,
}

const $baseStyle: StyleProp<TextStyle> = [
  $sizeStyles.sm,
  {fontFamily: typography.primary.default },
  { color: colors.text },
  
]

const $presets = {
  default: $baseStyle,
  bold: [$baseStyle, { fontFamily: typography.primary.bold }] as StyleProp<TextStyle>,
  heading: [$baseStyle, $sizeStyles.xxl, typography.primary.bold, { color: colors.palette.white }] as StyleProp<TextStyle>,
  subheading: [$baseStyle, $sizeStyles.lg, typography.primary.default] as StyleProp<TextStyle>,
}
