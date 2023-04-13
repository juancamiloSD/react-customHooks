import { useCounter, useFetch } from "../hooks"
import { LoadingCharacter, ErrorCharacter, Character } from "../03-examples";

export const Layout = () => {

    const { counter, increment, decrement } = useCounter()
    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${ counter }`)
    const { name, status, species, gender, error } = !!data && data;
    
    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />
            {
                (error) && <ErrorCharacter error={ error }/>
            }

            {
                (isLoading)
                ? (
                    <LoadingCharacter />
                )
                : (
                    <Character name={ name } status={ status } species={ species } gender={ gender }/>
                )
            }
                   
            <button 
                className="btn btn-primary" 
                disabled= { isLoading }
                onClick={ () => decrement() 
            }>
                Back
            </button>
            <button 
                className="btn btn-primary" 
                disabled= { isLoading }
                onClick={ () => increment() 
            }>
                Next
            </button>
        </>
    )
}
