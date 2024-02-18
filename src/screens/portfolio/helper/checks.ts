import { UserHoldings } from "src/screens/portfolio"

export const checkIfValidStock = (stock: UserHoldings | null | undefined) => {
  return (
    !stock?.symbol ||
    !(stock.avgPrice > 0) ||
    !(stock.close > 0) ||
    !(stock.ltp > 0) ||
    !(stock.quantity > 0)
  )
}
