import React, {memo} from 'react'
import C from './C'
import D from './D'
const B = memo(() => {
    console.log('B')
    return (
        <div
            style={{display: 'flex',justifyContent:'space-between'}}>
            <div
                style={{padding:'5px',backgroundColor:'red',width:'30%'}}>
                <div>B Components</div>
                <C/>
            </div>

            <div style={{padding:'5px',backgroundColor:'red',width:'30%'}}>
                <div>D components</div>
                <D/>
            </div>
        </div>

    )
})

export default B
