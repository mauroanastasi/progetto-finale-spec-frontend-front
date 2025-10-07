import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { useFetchContext } from '../context/GlobalContext'
import VideogamesItem from './VideogamesItem';

function debounce(callback, delay) {
    let timer
    return (...value) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback(...value)
        }, delay)
    }
}

const VideogamesList = () => {

    const { videogames, fetchVideogames } = useFetchContext();

    const [searchTitle, setSearchTitle] = useState("");
    const [searchCategory, setSearchCategory] = useState("");

    const [sortBy, setSortBy] = useState(`title`)
    const [sortOrder, setSortOrder] = useState(1)

    // per api lista, search e category

    const eseguiFetch = useCallback(debounce((title, category) => {
        fetchVideogames(title, category)
    }, 500),
        [fetchVideogames]
    )

    useEffect(() => {
        eseguiFetch(searchTitle, searchCategory);
    }, [searchTitle, searchCategory]);

    // per la ricerca di titolo e categoria

    const handleChange = (e) => {
        setSearchTitle(e.target.value)
    }

    const handleChangeCategory = (e) => {
        setSearchCategory(e.target.value)
    }

    // per inserire le categorie di videogiochi mappandole

    const allCategories = videogames.map(game => game.category);

    const oneCategories = [...new Set(allCategories)];

    // per l'ordinamento alfabetico

    const handleSort = () => {
        setSortOrder(prev => prev * -1);
    }

    const visualSort = sortOrder === 1 ? "(A-Z)" : "(Z-A)";

    const sortedVideogames = useMemo(() => {
        return [...videogames].sort((a, b) => {
            let comp = a.title.localeCompare(b.title)
            return comp * sortOrder;
        })
    }, [videogames, sortOrder])

    return (
        <div>
            <h1>VIDEOGAMES</h1>

            <input type="text" value={searchTitle} onChange={handleChange} className='inputTex' placeholder='Inserisci un titolo qui' />

            <label htmlFor="caategorie" className='inputLabelCategory' >Scegli una categoria:</label>
            <select name="categorie" id="categorie"
                type="text"
                value={searchCategory}
                onChange={handleChangeCategory}
                className='categorySelect'
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
                    <thead className='tableThead' >
                        <tr>
                            <th className='tableTitle' onClick={handleSort} >Titolo {sortBy === "title" && visualSort}</th>
                            <th className='tableCat' >Categoria </th>
                            <th className='tableDet' >Dettagli</th>
                        </tr>
                    </thead>
                    <tbody className='tableTbody' >
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
