import React, {useState, useContext, memo} from 'react'
import {inputContext}from '../contexts/Input.context'

import InputList from './InputList'

const D = memo(() => {
    console.log('D')

    const {addTodo} = useContext(inputContext)
    const [name, setName] = useState('')
    const [body, setBody] = useState('')


    //送信
    const AddInput = (e) => {
        e.preventDefault()
        //console.log('name', name)

        const newTodo = {
            type: 'INPUT',
            id: Math.random(),
            complete:false,
            name,
            body
        }
        addTodo(newTodo)

        setName('')
        setBody('')
    }

    //onChange => state:name

    const changeName =(e) => {
        setName(e.target.value)
    }


    //onChange => state:body

    const changeBody = (e) => {
        setBody(e.target.value)
    }


    return (
        <div>
            <form onSubmit={AddInput}>
            <input
                value={name}
                type="text"
                placeholder="入力してください" style={{padding:'5px', width: '80%'}}
                onChange={changeName}
            />
            {name}
            <input
                value={body}
                type="text"
                placeholder="bodyを入力してください"
                style={{padding:'5px', width: '80%'}}
                onChange={changeBody}
            />
                {body}
            <button type="submit">送信</button>
            </form>
            <InputList/>
        </div>
    )
})

export default D
