import React, { useReducer } from 'react'
import { factReducer, initialState } from '../reducer/factReducer'
import { ACTION_TYPES } from '../reducer/FactEnums'

const Reducer = () => {

    //send data in dispatch function to reducer and reducer will return new state object.
    //useReducer takes two arguments 1. reducer function 2. initial state
    const [state, dispatch] = useReducer(factReducer, initialState)

    const fetchFact = async () => {
        try {
            dispatch({ type: ACTION_TYPES.FETCH_REQUEST })
            const response = await fetch('https://catfact.ninja/fact')
            const data = await response.json()
            dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data.fact })
        } catch (error) {
            dispatch({ type: ACTION_TYPES.FETCH_FAIL, payload: error.message })
        }
    }

    return (
        <>
            <div className='my-4 text-xl bg-red-500 p-4 text-white rounded-lg'>Reducer</div>
            {state.error && <h1>{state.error}</h1>}
            <h1>{state.loading ? 'Loading...' : state.fact}</h1>
            <button className='my-4 p-4 bg-sky-500 text-white text-2xl' onClick={fetchFact}>Fetch Fact</button>
        </>
    )
}

export default Reducer