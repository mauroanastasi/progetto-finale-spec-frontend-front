import React from 'react'
import { Link } from 'react-router-dom'

const VideogamesItem = ({ title, category, id }) => {
    return (

        <div>
            <h2>{title}</h2>
            <h2>{category}</h2>
            <button>
                <Link to={`/details/${id}`}>{title}</Link>
            </button>
        </div>
    )
}

export default VideogamesItem
