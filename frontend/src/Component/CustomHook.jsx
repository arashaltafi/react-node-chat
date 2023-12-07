import React from 'react'
import { useGetCat } from '../Hook/useGetCat'

function CustomHook() {

    const { data, isLoading, error, refetchData: refetch } = useGetCat();

    return (
        <>
            <div className='my-4 text-xl bg-red-500 p-4 text-white rounded-lg'>CustomHook</div>
            <h1>data: {data?.fact}</h1>
            {error && <h1>{error}</h1>}
            {isLoading && <h1>Loading...</h1>}
            <button className='m-4 p-4 bg-sky-500 text-white text-2xl' onClick={() => refetch()}>refetch api</button>
        </>
    )
}

export default CustomHook