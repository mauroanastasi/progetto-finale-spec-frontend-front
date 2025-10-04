import React from 'react'
import { Link } from 'react-router-dom'
import { useFetchContext } from '../context/GlobalContext'

const VideogamesItem = ({ title, category, id }) => {

    const { favoritesVideogames } = useFetchContext()

    const handleFav = (game) => {
        favoritesVideogames(game);
    }

    return (
        <tr>
            <td>{title}</td>
            <td>{category}</td>
            <td>
                <button>
                    <Link to={`/details/${id}`}>Scopri di più</Link>
                </button>
                <button onClick={() => handleFav({ id, title })}>⭐ Aggiungi ai preferiti</button>
            </td>
        </tr>
    )
}

export default VideogamesItem
