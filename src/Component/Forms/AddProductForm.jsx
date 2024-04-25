import React from 'react'
import { useForm } from 'react-hook-form'

export default function AddProductForm() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    const Submit = (data) => {
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(Submit)}>
                <input type="text" placeholder='Name' {...register("Name", { required: true })} />
                {errors.Name && <p>Name is required</p>}<br />
                <input type="number" placeholder='Price' {...register("Price", { required: true })} />
                {errors.Price && <p>Name is required</p>}<br />
                <input type="number" placeholder='Quantity' {...register("Quantity", { required: true })} />
                {errors.Quantity && <p>Name is required</p>}<br />
                <textarea id="" placeholder='Description' cols="30" rows="10"{...register("Description", { required: true })}></textarea>
                {errors.Description && <p>Name is required</p>}<br />
                <button type='submit'>Add Product</button>
            </form>
        </div>
    )
}
