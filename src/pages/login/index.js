import TextInput from '@/components/functional/Inputs/TextInput'
import React from 'react'
import { useFormik } from 'formik';
import { Button } from 'primereact/button';

const index = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className='flex items-center justify-center flex-col gap-5'>
            <TextInput label="Mail" name="email" value={formik.values.email} onChange={formik.handleChange} />
            <TextInput label="Password" name="password" value={formik.values.password} onChange={formik.handleChange} />
            <Button label="Giriş Yap" type='submit' />
        </form>
    )
}

export default index