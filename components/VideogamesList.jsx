import React, { useState, useEffect } from 'react'
import { useFetchContext } from '../context/GlobalContext'

const VideogamesList = () => {

    const { videogames } = useFetchContext();

    return (
        <div>
            <h1>Videogames</h1>
            <ul>
                {videogames.map((game) => (
                    <li key={game.id}>
                        <h2>{game.title}</h2>
                        <p>{game.category}</p>
                    </li>
                ))}
            </ul>
        </div >
    )
}

export default VideogamesList
