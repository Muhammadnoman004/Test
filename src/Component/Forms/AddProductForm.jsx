import React from 'react'
import { useForm } from 'react-hook-form'

export default function AddProductForm() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const Submit = (data) => {
        console.log(data);
    }

    return (
        <div className='mainDiv'>
            <form onSubmit={handleSubmit(Submit)}>
                <input type="text" className='form-control formInput' placeholder='Name' {...register("Name", { required: true })} />
                {errors.Name && <span className='required'>Name is required</span>}<br />
                <input type="number" className='form-control formInput' placeholder='Price' {...register("Price", { required: true })} />
                {errors.Price && <span className='required'>Price is required</span>}<br />
                <input type="number" className='form-control formInput' placeholder='Quantity' {...register("Quantity", { required: true })} />
                {errors.Quantity && <span className='required'>Quantity is required</span>}<br />
                <textarea id="" className='form-control formInput' placeholder='Description' cols="30" rows="5"{...register("Description", { required: true })}></textarea>
                {errors.Description && <span className='required'>Description is required</span>}<br />
                <button type='submit' style={{ marginTop: "15px" }} className='btn btn-dark'>Add Product</button>
            </form>
        </div>
    )
}
