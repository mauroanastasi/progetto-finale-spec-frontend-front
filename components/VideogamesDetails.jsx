import React, { useState, useEffect } from 'react';
import { useFetchContext } from '../context/GlobalContext';
import { useParams } from 'react-router-dom';

const VideogamesDetails = () => {
    const { fullVideogames } = useFetchContext();

    const { id } = useParams();

    const [videogame, setVideogame] = useState(null);

    useEffect(() => {

        (async () => {
            try {
                const response = await fullVideogames(id);
                setVideogame(response.videogame);
            } catch (error) {
                console.error("Errore nella chiamata dei dettagli:", error);

            } finally {
                console.log(`chiamata con id ${id} effettuata con successo`)
            }
        })()

    }, [id, fullVideogames]);

    return (
        <div>
            {videogame && (
                <>
                    <h1>Dettagli Videogame</h1>
                    <h2>{videogame.title}</h2>
                    <h3>{videogame.category}</h3>
                    <img src={videogame.image}
                        alt={videogame.title}
                        style={{ width: '300px' }} />
                    <p>{videogame.description}</p>
                    <p>{videogame.platform}</p>
                    <p>{videogame.releseYear}</p>
                    <p>{videogame.developer}</p>
                    <p>{videogame.maxPlayer}</p>
                    <p>{videogame.price}</p>
                    <p>{videogame.rating}</p>
                </>
            )}
        </div>
    );
};

export default VideogamesDetails;
