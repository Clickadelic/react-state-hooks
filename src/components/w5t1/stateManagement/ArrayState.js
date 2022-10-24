import React from 'react'
import {useState} from 'react'

export const initialToppings = ["Cheese", "Tomato"]

function ArrayState(){

    const [newTopping, setNewTopping] = useState('')
    const [listOfToppings, setListOfToppings] = useState(initialToppings)

    function handleChange(e){
        setNewTopping(e.target.value)
    }

    function addNewTopping(){
        setListOfToppings(prevValue => [...prevValue, newTopping])
    }
    
    function removeTopping(e){
        // Get identifier => String innerhalb des Div
        const selectedTopping = e.target.innerText
        setListOfToppings(prev => {
            if(prev.includes(selectedTopping)){
                // Return all values except selected topping
                return prev.filter(topping => topping !== selectedTopping)
            }
        })
        console.log(selectedTopping)
    }

    const toppingList = listOfToppings.map((topping, index) => {
        return <div key={index} onClick={removeTopping}>{topping}</div>
    })

    return (
        <div>
            <h1 className=''>Pizza Toppings - ArrayState</h1>
            <input type="text" name="topping" placeholder="Add new topping" onChange={handleChange} />
            <button onClick={addNewTopping}>Add new topping</button>
            <div id="listOfToppings">
                <div>{toppingList}</div>
            </div>
        </div>
    )
}

export default ArrayState