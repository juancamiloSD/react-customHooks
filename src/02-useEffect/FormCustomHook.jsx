import { useState, useEffect } from "react"
import { useForm } from "../hooks/useForm"

export const FormCustomHook = () => {

    const { formState, onInputChange, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    })
    
    const { username, email, password } = formState

    return (
    <>
        <h1>Formulario custom hook</h1>
        <hr />
        <input 
            type="text" 
            className="form-control"
            placeholder="demo"
            name="username"
            value={ username }
            onChange={ onInputChange }

        />
        <input 
            type="email" 
            className="form-control mt-3"
            placeholder="demo@gmail.com"
            name="email"
            value={ email }
            onChange={ onInputChange }
        />
        <input 
            type="password" 
            className="form-control mt-3"
            placeholder="Contraseña"
            name="password"
            value={ password }
            onChange={ onInputChange }
        />
        <button
            className="btn btn-primary mt-3"
            onClick={ onResetForm }
        >Borrar</button>


        {/* {
          (username === 'juan2') && <Message />
        } */}
        
    </>
  )
}
