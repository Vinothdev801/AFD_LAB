export const CHECK_STOCK_START = 'CHECK_STOCK_START'
export const CHECK_STOCK_SUCCESS = 'CHECK_STOCK_SUCCESS'
export const RESET_STOCK = 'RESET_STOCK'

export const checkStock = () => {
    return dispatch => {
        dispatch({type: CHECK_STOCK_START})

        setTimeout(() => {
            const randomStock = Math.floor(Math.random() * 100)
            dispatch({type: CHECK_STOCK_SUCCESS, payload: randomStock})
        }, 2000)
    }
}

export const resetStock = () => {
    return {type: RESET_STOCK}
}