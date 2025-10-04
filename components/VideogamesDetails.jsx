import React, { useState, useEffect } from 'react';
import { useFetchContext } from '../context/GlobalContext';
import { useNavigate, useParams, NavLink } from 'react-router-dom';
import CompareVideogamesModal from './CompareVideogamesModal';


const VideogamesDetails = () => {

    const navigate = useNavigate()

    const { fullVideogames, compareVideogames, compare } = useFetchContext();

    // uso metodo per id specifico 

    const { id } = useParams();

    const [videogame, setVideogame] = useState([]);

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

    // per la comparzione

    const handleCompare = (games) => {
        compareVideogames(games)
        if (compare.length === 0) {
            alert("Primo videogioco selezionato per la comparazione")
            navigate("/")
        }
    }

    return (
        <>
            <header>
                <ul className="navbar">
                    <li>
                        <NavLink to="/">Lista Completa</NavLink>
                    </li>
                </ul>
            </header>
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
                        <button onClick={() => handleCompare(videogame)}>Compara</button>
                    </>
                )}
                {compare.length === 2 && <CompareVideogamesModal />}
            </div>
        </>
    );
};

export default VideogamesDetails;
