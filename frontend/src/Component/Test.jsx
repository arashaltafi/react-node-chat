import { Axios } from 'axios'
import React from 'react'
import { useState, useEffect, useRef } from 'react'

const Test = () => {

    const [test, setTest] = useState(0)
    useEffect(() => {
        console.log('call in created');

        return () => {
            console.log('call in destroyed');
        }
    }, [])

    useEffect(() => {
        Axios.get('https://catfact.ninja/fact').then((res) => {
            setTest(res.data.fact)
        }).catch((err) => {
            console.log(err.message);
        });
    }, [])

    return (
        <div>
            <h1>{test}</h1>
        </div>
    )
}

export default Test