
import React from 'react'
import {useState} from 'react'

function StringState(){

    const [newTopping, setNewTopping] = useState('')

    console.log('Before', newTopping);

    function handleChange(e){
        setNewTopping(e.target.value)
    }

    console.log('After', newTopping)

    return (
        <div className='w-48 m-auto'>
            <h1 className='text-2xl'>Pizza Toppings</h1>
            <input type="text" name="topping" placeholder="Add new topping" onChange={handleChange} />
        </div>
    )
}

export default StringState