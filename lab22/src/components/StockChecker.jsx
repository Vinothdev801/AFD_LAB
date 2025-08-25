import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkStock, resetStock } from '../actions/stockStock';

const StockChecker = () => {
    const {status, stock}= useSelector(state => state);
    const dispatch = useDispatch();

  return (
    <div>
        <h2>Stock Checker (used Redux + Thunk)</h2>
        <p>
            {status === 'idle' && 'No stock Information !'}
            {status === 'loading' && 'Stock update will shown in 2s ⌛'}
            {status === 'loaded' && `Stock: ${stock} are available ✅`}
        </p>

        <button onClick={() => {dispatch(checkStock())}} disabled={status === 'loading'}>check stock</button>&nbsp;&nbsp;
        <button onClick={() => {dispatch(resetStock())}}>Reset</button>
    </div>
  )
}

export default StockChecker