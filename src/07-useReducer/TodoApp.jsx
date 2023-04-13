import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodos } from "../hooks/useTodos"

export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodos()

    return (
        <>
            <div className="container">
                <h1>TodoApp: { todosCount } </h1>
                <h3>pendientes: { pendingTodosCount }</h3>
                <hr />
                <div className="row">
                    <div className="col-7">
                        <TodoList 
                            todos={ todos } 
                            onDeleteTodo={ handleDeleteTodo }
                            onToggleTodo={ handleToggleTodo }
                        />
                    </div>
                    <div className="col-5">
                        <h4>Agregar TODO</h4>
                        <hr />
                        <TodoAdd 
                            onNewTodo={ handleNewTodo }
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
