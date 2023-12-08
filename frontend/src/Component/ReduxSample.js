import React, { useState } from 'react'
import { login, logout } from '../store'
import { useDispatch, useSelector } from 'react-redux'

const ReduxSample = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.user);

    const [newUsername, setNewUsername] = useState('');

    return (
        <>
            <div className='mt-16 mb-4 text-xl bg-pink-500 p-4 text-white rounded-lg'>ReduxSample {selector.username}</div>
            <input className='p-4 m-2 text-lg' onChange={(e) => setNewUsername(e.target.value)} type="text" />
            <button className='my-4 p-4 bg-sky-500 text-white text-2xl' onClick={() => dispatch(login({ username: newUsername }))}>login</button>
            <button className='my-4 p-4 bg-red-500 text-white text-2xl' onClick={() => dispatch(logout())}>logout</button>
        </>
    )
}

export default ReduxSample