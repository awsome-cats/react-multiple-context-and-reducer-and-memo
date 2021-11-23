import React, {useContext,memo} from 'react'
import {inputContext}from '../contexts/Input.context'

// components
import InputItem from './InputItem'
const InputList = memo(() => {
    const {todos, toggleTodo} = useContext(inputContext)
    console.log('InputList')


    return (
        <div>
            Hello
            {
                todos.map(todo => (
                    <InputItem
                    name={todo.name}
                    body={todo.body}
                    complete={todo.complete}
                    key={todo.id}
                    onClickToToggle={() => toggleTodo(todo.id)}/>
                ))
            }
        </div>
    )
})

export default InputList
