import React ,{useState} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { decrement, increment, setCounter } from '../counter/counterSlice';


export function Input() {
    const count = useSelector(state => state.counter.value)
    const [input, setinput] = useState(count)
    const dispatch = useDispatch()

    const handleUpdateInput = (event)=>{
        setinput(Number(event.target.value))
    }

    const handleUpdate = () => {
        dispatch(setCounter(input))
      }


  return (
    <div>
      <div>
        <input
        type='number'
        value={input}
        onChange={handleUpdateInput}
        >
        </input>
        <button onClick={handleUpdate}>
            SET
        </button>
      </div>
    </div>
  )
}
