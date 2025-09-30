import { createContext, useContext, useEffect, useState } from 'react'

const FetchContext = createContext()

const FetchProvider = ({ children }) => {

    const [videogames, setVideogames] = useState([])

    useEffect(() => {
        const apiUrl = import.meta.env.VITE_API_URL
        fetch(`${apiUrl}/videogames`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setVideogames(data)
            })
            .catch(error => console.error(error))
    }, [])

    return (
        <FetchContext.Provider value={{ videogames, setVideogames }} >
            {children}
        </FetchContext.Provider>
    )

}

const useFetchContext = () => {
    const context = useContext(FetchContext)
    return context
}

export { FetchProvider, useFetchContext }
