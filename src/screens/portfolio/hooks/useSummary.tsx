import { useState } from "react"
import { UserHoldings } from "../types"
import { getTodayPNL, getTotalCurrentValue, getTotalInvestment } from "../helper/finance"

type Props = {
  stockData: UserHoldings[]
}

const useSummary = (props: Props) => {
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
    }
  ]

  return {
    expanded,
    onClickArrow,
    breakdownItems,
  }
}

export default useSummary
