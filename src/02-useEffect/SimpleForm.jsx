import { useState, useEffect } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'Juan',
    email: 'juan@gmail.com'
  })

  const { username, email } = formState

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
        ...formState,
        [ name ]: value
    })
  }

  
  

  return (
    <>
        <h1>Formulario simple</h1>
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
        {
          (username === 'juan2') && <Message />
        }
        
    </>
  )
}
