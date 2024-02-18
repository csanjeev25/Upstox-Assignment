import { useState } from "react"
import {
  UserHoldings,
  getTodayPNL,
  getTotalCurrentValue,
  getTotalInvestment,
} from "src/screens/portfolio"

type Props = {
  stockData: UserHoldings[]
}

export const useSummary = (props: Props) => {
  const { stockData } = props
  const [expanded, setExpanded] = useState(false)

  const onClickArrow = () => {
    setExpanded((prevState) => !prevState)
  }

  const breakdownItems = [
    {
      leftText: "Current Value:",
      rightText: getTotalCurrentValue(stockData),
    },
    {
      leftText: "Total Investment: ",
      rightText: getTotalInvestment(stockData),
    },
    {
      leftText: "Today's Profit & Loss: ",
      rightText: getTodayPNL(stockData),
    },
  ]

  return {
    expanded,
    onClickArrow,
    breakdownItems,
  }
}
