import React, { useContext, memo } from 'react'

import { countContext } from '../contexts/State.count_context'
import {numberContext} from '../contexts/Reduce.count_context'

//console.log('CountContext', countContext)


const C = memo(() => {
    console.log('C')


    // useState
    //const {count, setCount} = useCountContext()

    const {count, setCount} = useContext(countContext)

    const {state, dispatch} = useContext(numberContext)

    // useReducer
    // const [state, dispatch] = useReducer(reducer, initialState, init)

    return (
        <div style={{backgroundColor:'lightBlue',width:'80%',padding: '10px',margin:'0 auto'}}>
            <div>
                C component
            </div>
            <div style={{padding:'10px',backgroundColor:'yellow',display: 'flex',flexDirection:'column',width:'50%'}}>
               <div>
                   {count}
                   <button onClick={() => setCount(count + 1)}>click</button>
               </div>
               <div>
                   {state.num}
                   <button onClick={() => dispatch({type:'DECREASE',payload:state.num -1})}>-</button>
               </div>
            </div>
        </div>

    )
})

export default C

