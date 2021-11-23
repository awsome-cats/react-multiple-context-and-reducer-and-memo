import React from 'react'
import B from './B'


const A = () => {
    console.log('A')
    return (
        <div>
            <div> A Components</div>
            <div style={{ width: '800px',height: '100%',backgroundColor:'pink',padding:'5rem',display: 'flex',justifyContent: 'center',flexDirection: 'column'}}>
                <B/>
            </div>
        </div>
    )
}

export default A
