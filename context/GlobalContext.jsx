import { createContext, useContext, useEffect, useState } from 'react'
import useVideogames from '../customHook/useVideogames'

const FetchContext = createContext()

const FetchProvider = ({ children }) => {

    // destrutturo i metodi del customHook

    const { videogames, fullVideogames, compare, compareVideogames, clearCompare } = useVideogames()

    return (
        <FetchContext.Provider value={{ videogames, fullVideogames, compare, compareVideogames, clearCompare }} >
            {children}
        </FetchContext.Provider>
    )

}

const useFetchContext = () => {
    const context = useContext(FetchContext)
    return context
}

export { FetchProvider, useFetchContext }
