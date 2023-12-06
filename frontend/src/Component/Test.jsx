import Axios from 'axios'
import React from 'react'
import { useState, useEffect, useRef } from 'react'

const Test = () => {

    const [catFact, setCatFact] = useState(0)
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    useEffect(() => {
        console.log('call in created');

        return () => {
            console.log('call in destroyed');
        }
    }, [])

    useEffect(() => {
        fetchCatFact()
    }, [])

    const fetchCatFact = () => {
        Axios.get('https://catfact.ninja/fact').then((res) => {
            setCatFact(res.data.fact)
        }).catch((err) => {
            console.log(err.message);
        });
    }

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const fetchAgeGuess = () => {
        Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
            setAge(res.data.age)
        }).catch((err) => {
            console.log(err.message);
        });
    }

    return (
        <div>
            <h1>{catFact}</h1>
            <button className='bg-red-500 p-2 m-2' onClick={fetchCatFact}>fetch cat fact</button>

            <h1 className='mt-8'>guess age by name</h1>
            <input className='p-2 text-lg text-center' placeholder='enter your name' type="text" onChange={handleChange} />
            <button className='bg-red-500 p-2 m-2' onClick={fetchAgeGuess}>fetch cat fact</button>
        <p className='mb-8'>{age > 0 && `your age is: ${age}`}</p>
        </div>
    )
}

export default Test