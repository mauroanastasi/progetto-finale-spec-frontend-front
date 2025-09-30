import React, { useState, useEffect } from 'react'

const VideogamesList = () => {

    const apiUrl = import.meta.env.VITE_API_URL

    const [videogames, setVideogames] = useState([])


    useEffect(() => {
        fetch(`${apiUrl}/videogames`)
            .then(resp => {
                if (!resp.ok) {
                    throw new Error(`HTTP error! Status: ${resp.status}`);
                }
                return resp.json();
            })
            .then(data => {
                console.log("Videogiochi caricati:", data);
                setVideogames(data);
            })
            .catch(err => console.error('Fetch error:', err));
    }, []);


    useEffect(() => {
        console.log(videogames)
    }, [videogames])
    console.log("API URL:", apiUrl)
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
