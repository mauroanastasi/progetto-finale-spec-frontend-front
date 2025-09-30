import React, { useState, useEffect } from 'react'
import { useFetchContext } from '../context/GlobalContext'
import VideogamesItem from './VideogamesItem';

const VideogamesList = () => {

    const { videogames } = useFetchContext();

    return (
        <div>
            <h1>Videogames</h1>
            <ul>

                {videogames.map((game) => (
                    <li key={game.id}>
                        <VideogamesItem id={game.id} title={game.title} category={game.category} />
                    </li>
                ))}

            </ul>
        </div >
    )
}

export default VideogamesList
