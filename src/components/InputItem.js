import React, {memo} from 'react'


const InputItem = memo(({name, body,complete, onClickToToggle}) => {
    console.log('InputItem')


    return (
        <div>
            <div

            style={{backgroundColor: 'blue', display: 'flex', justifyContent: 'space-between'}}>
                <p style={{color:complete?'green':'red'}}>name:{name}</p>
                <p>body:{body}</p>
            </div>
            <button onClick={onClickToToggle}>toggle</button>

        </div>
    )
})

export default InputItem
