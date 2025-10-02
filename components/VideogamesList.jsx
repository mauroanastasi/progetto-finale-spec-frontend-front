import React, { useState, useEffect, useMemo } from 'react'
import { useFetchContext } from '../context/GlobalContext'
import VideogamesItem from './VideogamesItem';

const VideogamesList = () => {

    const { videogames } = useFetchContext();

    const [search, setSearch] = useState("");

    const [searchCategory, setSearchCategory] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleChangeCategory = (e) => {
        setSearchCategory(e.target.value)
    }


    const filteredArray = videogames.filter(v =>
        v.title.toLowerCase().includes(search.toLowerCase()) &&
        (searchCategory === "" || v.category === searchCategory)
    );

    const allCategories = videogames.map(game => game.category);

    const oneCategories = [...new Set(allCategories)];

    const [sortBy, setSortBy] = useState(`title`)
    const [sortOrder, setSortOrder] = useState(1)

    const handleSort = (field) => {
        if (sortBy === field) {
            setSortOrder(prev => prev * -1);
        } else {
            setSortBy(field)
            setSortOrder(1)
        }
    }

    const visualSort = sortOrder === 1 ? "A-Z" : "Z-A";

    const sortedVideogames = useMemo(() => {
        return [...filteredArray].sort((a, b) => {
            let comp;
            if (sortBy === "title") {
                comp = a.title.localeCompare(b.title)
            }
            return comp * sortOrder;
        })
    }, [filteredArray, sortBy, sortOrder])

    return (
        <div>
            <h1>Videogames</h1>
            <input type="text" value={search} onChange={handleChange} />

            <label for="caategorie">Scegli una categoria:</label>
            <select name="categorie" id="categorie"
                type="text"
                value={searchCategory}
                onChange={handleChangeCategory}
            >
                <option value="" ></option>
                {oneCategories.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>
            <>
                <table className='videoGamesTable'>
                    <thead>
                        <tr>
                            <th onClick={() => handleSort(`title`)} >Titolo {sortBy === "title" && visualSort}</th>
                            <th>Categoria </th>
                            <th>Dettagli</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedVideogames.map((game) => (
                            <VideogamesItem id={game.id} title={game.title} category={game.category} />
                        ))}
                    </tbody>
                </table>
            </>


        </div >
    )
}


export default VideogamesList
