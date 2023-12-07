import React from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const ReactFormHook = () => {

    const schema = yup.object().shape({
        name: yup.string().required('نام را وارد نمایید.'),
        email: yup.string().email('ایمیل را صحیح وارد نمایید.').required('ایمیل را وارد نمایید.'),
        age: yup.number().positive().min(18).max(100).integer().required('سن را وارد نمایید.'),
        password: yup.string().min(4).max(15).matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/).required('رمز عبور را وارد نمایید.'),
        confirmPassword: yup.string().min(4).max(15).oneOf([yup.ref('password')], 'رمز عبور با تکرار آن یکسان نیست.').matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/).required('تکرار رمز عبور را وارد نمایید.'),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onFormSubmit = (data) => {
        console.log(data)
    }

    return (
        <>
            <h1 className='my-4 text-xl bg-red-500 p-4 text-white rounded-lg'>React Form Hook</h1>
            <form onSubmit={handleSubmit(onFormSubmit)} className='flex flex-col gap-4'>
                <input className='p-4 m-2 text-lg' type="text" placeholder='Enter Name ...' {...register('name')} />
                {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                <input className='p-4 m-2 text-lg' type="email" placeholder='Enter Email ...' {...register('email')} />
                {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                <input className='p-4 m-2 text-lg' type="number" placeholder='Enter Age ...' {...register('age')} />
                {errors.age && <p className='text-red-500'>{errors.age?.message}</p>}
                <input className='p-4 m-2 text-lg' type="password" placeholder='Enter Password ...' {...register('password')} />
                {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                <input className='p-4 m-2 text-lg' type="password" placeholder='Confirm Password ...' {...register('confirmPassword')} />
                {errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword?.message}</p>}
                <button className='m-4 p-4 bg-sky-500 text-white text-2xl' type="submit">Submit</button>
            </form>
        </>
    )
}

export default ReactFormHook