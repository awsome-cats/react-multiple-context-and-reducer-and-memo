import React, {createContext, useReducer} from 'react'
// reducer
import inputReducer  from '../reducers/InputReducer'
// context作成
export const inputContext = createContext()



export const InputValueProvider = (props) => {
    // 初期値

const initialState ={
    todos: []
}



    // reducer
const [state, dispatch] =
        useReducer(inputReducer, initialState)

const addTodo = (todo) => {
    //payloadを除いた場合

     dispatch({
        type:'INPUT',
        todo
    })

    // dispatch({
    //     type:'INPUT',
    //     payload:todo
    // })
}

const toggleTodo = (todoId) => {
    dispatch({
        type: 'TOGGLE',
        todoId
    })
}


    return (
        <inputContext.Provider
        value={{
            todos:state.todos,
            addTodo,
            toggleTodo
        }}>
            {props.children}
        </inputContext.Provider>
    )
}

