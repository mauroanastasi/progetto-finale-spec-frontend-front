import React, { useState, useEffect, useMemo } from 'react'
import { useFetchContext } from '../context/GlobalContext'
import VideogamesItem from './VideogamesItem';
import CompareVideogamesModal from './CompareVideogamesModal';

const VideogamesList = () => {

    const { videogames } = useFetchContext();

    const [search, setSearch] = useState("");
    const [searchCategory, setSearchCategory] = useState("");

    const [sortBy, setSortBy] = useState(`title`)
    const [sortOrder, setSortOrder] = useState(1)

    // per la ricerca di titolo e categoria

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

    // per inserire le categorie di videogiochi mappandole

    const allCategories = videogames.map(game => game.category);

    const oneCategories = [...new Set(allCategories)];

    // per l'ordinamento alfabetico

    const handleSort = () => {
        setSortOrder(prev => prev * -1);
    }

    const visualSort = sortOrder === 1 ? "A-Z" : "Z-A";

    const sortedVideogames = useMemo(() => {
        return [...filteredArray].sort((a, b) => {
            let comp = a.title.localeCompare(b.title)
            return comp * sortOrder;
        })
    }, [filteredArray, sortBy, sortOrder])

    return (
        <div>
            <h1>Videogames</h1>
            <input type="text" value={search} onChange={handleChange} />

            <label htmlFor="caategorie">Scegli una categoria:</label>
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
                            <th onClick={handleSort} >Titolo {sortBy === "title" && visualSort}</th>
                            <th>Categoria </th>
                            <th>Dettagli</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedVideogames.map((game) => (
                            <VideogamesItem key={game.id} id={game.id} title={game.title} category={game.category} />
                        ))}
                    </tbody>
                </table>
            </>
        </div >
    )
}

export default VideogamesList
