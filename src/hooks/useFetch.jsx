import React from "react";
import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:3030/api/";

function UseFetch(endpoint) {
    const [state, setState]= useState({
        loading: true,
        data: [],
        error: false
    });
    const getData = async(endpoint) =>{
        try{
            const res = await fetch(BASE_URL+endpoint);
            const json = await res.json()
            setState({
                ...state,
                loading: false,
                data: json
            })
        }catch(error){
            setState({
                ...state,
                loading: false,
                error: true
            })
        }
    }
    useEffect(()=>{
        getData(endpoint)
    }, [endpoint])
    return state
        
    
}

export default UseFetch

