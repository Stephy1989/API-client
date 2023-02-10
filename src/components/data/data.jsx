import { Button } from 'bootstrap'
import React, {useState, useEffect} from 'react'
import UseFetch from '../../hooks/useFetch'

function Data() {
    const [endpoint, setEndpoint]= useState('characters')

    const {loading, data, error}= UseFetch(endpoint)
    const handleDelete = (id)=>{
        fetch(`http://localhost:3030/api/characters/${id}`, {
            method: "DELETE"
        }).then(()=> setEndpoint("characters"))
    }
    return (
        <div>
            <h3>Personajes</h3>
            <ul>
                {data.map(char => <li key={char.id}> {char.fullName}  <button onClick={()=>handleDelete(char.id)}>Delete</button></li>)}
            </ul>
            
        </div>
    )
}

export default Data
