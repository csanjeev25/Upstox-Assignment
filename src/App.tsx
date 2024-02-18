import React from "react"
import { StatusBar, StyleSheet } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import PortfolioScreen from "./screens/portfolio/components/PortfolioScreen"

function App(): React.JSX.Element {

  //TODO: Can Implement Navigation later as more screens are added
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={"light-content"} backgroundColor='white' />
      <PortfolioScreen />
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({})

export default App
