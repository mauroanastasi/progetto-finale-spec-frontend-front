import { createContext, useContext, useEffect, useState } from 'react'
import useVideogames from '../customHook/useVideogames'

const FetchContext = createContext()

const FetchProvider = ({ children }) => {

    // destrutturo i metodi del customHook

    const { videogames, fullVideogames, compare, fav, compareVideogames, clearCompare, favoritesVideogames, deleteFav, clearFavorites } = useVideogames()

    return (
        <FetchContext.Provider value={{ videogames, fullVideogames, compare, fav, compareVideogames, clearCompare, favoritesVideogames, deleteFav, clearFavorites }} >
            {children}
        </FetchContext.Provider>
    )

}

const useFetchContext = () => {
    const context = useContext(FetchContext)
    return context
}

export { FetchProvider, useFetchContext }
