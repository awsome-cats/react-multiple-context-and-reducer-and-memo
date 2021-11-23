
/**
 * createContextとuseReducerで作成するのが目標
 *  createContextの汎用的構造
 */


import React, {createContext, useReducer} from 'react';

import { numReducer } from '../reducers/NumReducer'


export const numberContext = createContext()

// 初期値
const initValue = {
    num: 10
}


export const NumberProvider = ({children}) => {

// reducer
const [
    state, dispatch
] = useReducer(numReducer, initValue)


    return (
        <numberContext.Provider value={{state, dispatch}}>
            {children}
        </numberContext.Provider>
    )
}
