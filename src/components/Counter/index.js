import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from '../../actions/counterActions'
import './index.css'

const Counter = () => {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()

  const onClickIncrement = () => {
    dispatch(increment())
  }

  const onClickDecrement = () => {
    dispatch(decrement())
  }

  return (
    <div className='container'>
      <h1 className='heading'>Counter</h1>
      <p className='count'>{count}</p>
      <div>
        <button className='button' onClick={onClickIncrement}>
          Increase
        </button>
        <button className='button' onClick={onClickDecrement}>
          Decrease
        </button>
      </div>
    </div>
  )
}

export default Counter
