import { useLayoutEffect, useRef, useState } from "react"

export const Character = ({ name, status, species, gender}) => {

    const pRef = useRef()

    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

    useLayoutEffect(() => {
      const { width, height } = pRef.current.getBoundingClientRect()
      setBoxSize({ width, height })
    }, [name])

    return (
        <>
            <blockquote 
                className="blockquote text-end"
                style={{ display: 'flex' }}
            >
                <p ref={ pRef } className="mb-1">{ name }</p>
                <footer className="blockquote-footer pt-2">Estado: { status } - Especie: { species } - Sexo: { gender }</footer>
            </blockquote>
            <code>
                { JSON.stringify(boxSize) }
            </code>
        </>
    )
}
