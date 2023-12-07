import { fa } from '@faker-js/faker'
import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {

    const { name, family } = useParams()

    return (
        <div>{name && family ? 'Profile name = ' + name + ' Profile family = ' + family : 'No name'}</div>
    )
}

export default Profile