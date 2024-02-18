export type UserHoldings = {
    symbol: string,
    quantity: number,
    ltp: number,
    avgPrice: number,
    close: number
}

export type Stocks = {
    stockData: UserHoldings[] | null | undefined
}

export interface IStockList extends Stocks{
    reload: () => void
}