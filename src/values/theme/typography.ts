const fonts = {
  lato: {
    default: "Lato-Regular",
    light: "Lato-Thin",
    normal: "Lato-Regular",
    semibold: "Lato-Semibold",
    bold: "Lato-Bold",
    latoThinItalic: "Lato-Thinitalic",
    latoItalic: "Lato-Italic",
  },
  rupee: {
    rupeeForadian: "RupeeSymbol",
  }
}

export const typography = {
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts,
  /**
   * The primary font. Used in most places.
   */
  primary: fonts.lato,
}

export const fontSize = {
  h1: 20,
  h2: 18,
  h3: 16,
  h4: 15,
  h5: 14,
  h6: 13,
  h7: 12,
  h8: 11,
  h9: 10,
  h10: 9,
}
