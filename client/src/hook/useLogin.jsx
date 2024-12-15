import { useAuthContext } from "./useAuthContext"
import { useState } from 'react'

export const useLogin =()=>{
    const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext();

const login = async(email,password) =>{
    setIsLoading(true)
    setError(null)

    const response = await fetch ('http://localhost:5000/api/users/login',{
        method:'POST',
        headers:{
            'Content-Type' :'application/json'
        },
        body:JSON.stringify({email,password})
    })

    const json = await response.json()

    if(!response.ok){
        setIsLoading(false)
        setError(json.error)
    }


    if(response.ok){
        //save the user to local storage
        localStorage.setItem('user',JSON.stringify(json))

        //update the auth context
        dispatch({type:'LOGIN',payload:json})

        //update
        setIsLoading(false)
    }
}

return{isLoading,error,login}
}