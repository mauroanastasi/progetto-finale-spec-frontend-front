import React, { useState, useEffect } from 'react'
import { useFetchContext } from '../context/GlobalContext'
import VideogamesItem from './VideogamesItem';

const VideogamesList = () => {

    const { videogames } = useFetchContext();

    const [search, setSearch] = useState("");

    const filteredArray = videogames.filter(v =>
        v.title.toLowerCase().includes(search.toLowerCase())
    )

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div>
            <h1>Videogames</h1>
            <input type="text" value={search} onChange={handleChange} />
            <ul>

                {filteredArray.map((game) => (
                    <li key={game.id}>
                        <VideogamesItem id={game.id} title={game.title} category={game.category} />
                    </li>
                ))}

            </ul>
        </div >
    )
}

export default VideogamesList
