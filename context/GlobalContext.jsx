import { createContext, useContext, useEffect, useState } from 'react'
import useVideogames from '../customHook/useVideogames'

const FetchContext = createContext()

const FetchProvider = ({ children }) => {

    const { videogames, setVideogames, fullVideogames } = useVideogames()

    return (
        <FetchContext.Provider value={{ videogames, setVideogames, fullVideogames }} >
            {children}
        </FetchContext.Provider>
    )

}

const useFetchContext = () => {
    const context = useContext(FetchContext)
    return context
}

export { FetchProvider, useFetchContext }
