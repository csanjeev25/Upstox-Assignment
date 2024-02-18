import { StyleProp, ViewStyle } from "react-native"

export interface UserHoldings {
  symbol: string
  quantity: number
  ltp: number
  avgPrice: number
  close: number
}

export interface Stocks {
  stockData: UserHoldings[] | null | undefined
}

export interface IStockList extends Stocks {
  reload: () => void
}

export interface IBreakDownRowItem {
  leftText: string
  rightText: string
  style?: StyleProp<ViewStyle>
}

export interface IRowItem {
  leftText: string
  rightTitleText: string
  rightValueText: string
}

export interface IPortfolioSummary {
  stockData: UserHoldings[]
}

export interface IStockItem {
  stockData: UserHoldings
  index: number
}

export interface IRenderItem {
  item: UserHoldings | null | undefined
  index: number
}