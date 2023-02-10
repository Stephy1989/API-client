import React from 'react'
import TextField from '@mui/material/TextField';


function Form() {
    const handleForm = (e)=>{
        e.preventDefault();
        const data = new FormData(e.target);
        
        const newCharacter = {
            fullName: data.get("fullName"),
            species: data.get("species"),
            age: data.get("age"),
            gender: data.get("gender"),
            status: data.get("status"),
            image: data.get("image"),
            occupation: data.get("occupation")
        }
        fetch("http://localhost:3030/api/characters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"},
            body: JSON.stringify(newCharacter),
        }).then((response)=> response.json())
        .catch((error)=> console.log(error))
     
        
    }
    return (
        <div>
            <form onSubmit={(e)=>{handleForm(e)}}>
           <label htmlFor="fullName">Fullname</label><input type="text" id='fullName' name='fullName'/>
            <label htmlFor="species">Species</label><input type="text" id='species' name='species'/>
            <label htmlFor="age">Age</label><input type="text" id="age" name='age'/>
            <label htmlFor="gender">Gender</label><input type="text" id="gender" name='gender' />
            <label htmlFor="status">Status</label><input type="text" id="status" name='status' />
            <label htmlFor="image">Image</label><input type="text" id="image" name='image' />
            <label htmlFor="occupation">Occupation</label><input type="text" id="occupation" name='occupation' />
            <button type="submit">Submit</button>

        </form>
        </div>
    )
}

export default Form
