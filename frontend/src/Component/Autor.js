import React from 'react';
import Avatar from '@mui/material/Avatar';
import persianDate from 'persian-date';

const Author = (props) => {

    const avatar = props.faker.image.avatar()
    const firstName = props.faker.name.firstName()
    const lastName = props.faker.name.lastName()
    const date = new persianDate(props.faker.date.future().getTime()).format("dddd, MMMM DD YYYY, h:mm:ss a")

    return (
        <div
            className={`w-1/2 inline-flex flex-col justify-center items-center gap-y-4 mt-8 px-4 py-6 rounded-lg shadow-xl mb-8 ${props.color || 'bg-gray-300'}`}>
            <Avatar
                src={avatar}
                alt={firstName}
                sx={{ width: 88, height: 88 }}
            />
            <p className="text-white text-center font-bold text-xl">نام نویسنده: {firstName + ' ' + lastName}</p>
            <p className="text-white text-center text-lg">تاریخ عضویت: {date}</p>
        </div>
    )
}

export default Author;