import React from 'react'
import { Link } from 'react-router-dom'

const VideogamesItem = ({ title, category, id }) => {

    return (
        <tr>
            <td>{title}</td>
            <td>{category}</td>
            <td>
                <button>
                    <Link to={`/details/${id}`}>Scopri di più</Link>
                </button>
            </td>
        </tr>
    )
}

export default VideogamesItem
