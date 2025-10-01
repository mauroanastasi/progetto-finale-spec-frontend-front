import React, { useState, useEffect } from 'react'
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

            <ul>

                <>

                    <table className='videoGamesTable'>
                        <thead>
                            <tr>
                                <th>Titolo</th>
                                <th>Categoria</th>
                                <th>Dettagli</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredArray.map((game) => (
                                <VideogamesItem id={game.id} title={game.title} category={game.category} />
                            ))}
                        </tbody>
                    </table>
                </>

            </ul>
        </div >
    )
}

export default VideogamesList
