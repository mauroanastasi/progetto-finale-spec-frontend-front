import React from 'react'
import { useFetchContext } from '../context/GlobalContext'
import { useParams } from 'react-router-dom'

const VideogamesDetails = () => {

    const { videogames } = useFetchContext()

    const { id } = useParams()

    const videogame = videogames.find(v => String(v.id) === id)

    return (
        <div>

            <h1>dettagli videogames</h1>
            <h2>{videogame.title}</h2>
            <h2>{videogame.category}</h2>
            <h2>{videogame.price}</h2>
            <h2>{videogame.rating}</h2>
        </div>
    )
}

export default VideogamesDetails
