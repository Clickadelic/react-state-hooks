import React, {useEffect, useState} from 'react'

export default function ObjectState(){

    const [member, setMember] = useState({})

    const [memberList, setMemberList] = useState([])

    // function handleChange(event){
    //     const name = event.target.name
    //     const value = event.target.value
    //     console.log(name, value);
    // }

    // Object Destruction used {target} == event.target
    function handleChange({target}){
        // Take key + value from object
        const {name, value} = target
        // Klammern umgeben das leere Objekt, sonst wird Funktion ausgeführt
        // [key] nimmt direkt den Wert mit
        setMember(prevValue => ({...prevValue, [name]: value}))
    }
    // Updated Object
    console.log(member)

    function addMember(e){
        e.preventDefault()
        setMemberList(prev => [...prev, member])
    }

    console.log(memberList)

    // Nur beim initialen laden der Seite
    // useEffect(()=> {
    //     const memberShip = memberList.map((member, index) => {
    //         return (
    //             <div key={index}>{member}</div>
    //         )
    //     })
    // }, [])

    const memberShip = memberList.map((member, index) => {
        return (
            <div key={index}>{member}</div>
        )
    })

    // Return statement
    return (
        <div>
            <h1>Membership</h1>
            <form className="block w-80">
                <input type="text" name="fistname" placeholder="Firstname" onChange={handleChange} />
                <input type="text" name="lastname" placeholder="Lastname" onChange={handleChange} />
                <input type="text" name="country" placeholder="Firstname" onChange={handleChange} />
                <button onClick={addMember}>Add member</button>
            </form>
            {/* <div>{memberShip ? : }</div> */}
            <div>{memberShip ? <h1>No Members</h1>: memberShip}</div>
        </div>
    )
}