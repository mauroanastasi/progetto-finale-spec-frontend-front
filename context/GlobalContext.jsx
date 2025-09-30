import { createContext, useContext, useEffect, useState } from 'react'
import useVideogames from '../customHook/useVideogames'

const FetchContext = createContext()

const FetchProvider = ({ children }) => {

    const { videogames, setVideogames } = useVideogames()

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
