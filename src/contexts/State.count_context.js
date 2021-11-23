
/**
 * createContextとuseStateで作成するのが目標
 * createContextの汎用的構造
 */


import React, {createContext, useState} from 'react';




// createContext
export const countContext = createContext()



// Provider
export const CountProvider = ({ children }) => {

    const [count, setCount] = useState(100)

    const value = {
        count,
        setCount,
    }


    return (
        <countContext.Provider value={value}>
            {children}
        </countContext.Provider>
    )
}
