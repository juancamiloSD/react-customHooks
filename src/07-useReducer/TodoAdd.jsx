import { useForm } from '../hooks/useForm'

export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm} = useForm({
        description: ''
    })

    const onformSubmit = (e) => {
        e.preventDefault()

        if(description.lenght <= 1) return


        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        }

        onNewTodo(newTodo)
        onResetForm()
    }

    return (
        <>
            <form onSubmit={ onformSubmit }>
                <input 
                    type="text" 
                    placeholder="Que hay que hacer?"
                    className="form-control"
                    name="description"
                    value={ description }
                    onChange={ onInputChange }
                />
                <button 
                    type="submit"
                    className="btn btn-primary mt-3"
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
