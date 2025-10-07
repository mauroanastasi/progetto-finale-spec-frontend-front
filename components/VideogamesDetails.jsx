import React, { useState, useEffect } from 'react';
import { useFetchContext } from '../context/GlobalContext';
import { useNavigate, useParams, NavLink } from 'react-router-dom';
import CompareVideogamesModal from './CompareVideogamesModal';

const VideogamesDetails = () => {

    const navigate = useNavigate()

    const { fullVideogames, compareVideogames, compare } = useFetchContext();

    // id specifico 

    const { id } = useParams();

    const [videogame, setVideogame] = useState({});

    // per i fav

    const { favoritesVideogames } = useFetchContext()

    const handleFav = (game) => {
        favoritesVideogames(game);
    }

    // metodo per id specifico

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
                    <li className='tornaLista' >
                        <NavLink to="/">Lista Completa</NavLink>
                    </li>
                </ul>
            </header>
            <div className='mostraGiocoSelez' >
                {videogame && videogame.platform && (
                    <>
                        <h1>Dettagli Videogame:</h1>
                        <h2>{videogame.title}</h2>
                        <h3>Genere: {videogame.category}</h3>
                        <img className='imgVideogioco' src={videogame.image}
                            alt={videogame.title}
                            style={{ width: '300px' }} />
                        <p className='descrSel' > <b> Descrizione:</b> {videogame.description}</p>
                        <p className='piattSel'><b> Piattaforma/e:</b> {videogame.platform.join(" - ")}</p>
                        <p className='dateSel'><b> Data di rilascio:</b> {videogame.releaseYear}</p>
                        <p className='svilSel'><b> Sviluppatori:</b> {videogame.developer}</p>
                        <p className='playersSel'><b> Numero di giocatori massimo:</b> {videogame.maxPlayers}</p>
                        <p className='prezzoSel'><b> Prezzo:</b> {videogame.price} €</p>
                        <p className='votoSel'><b> Voto:</b> {videogame.rating}</p>
                        <button className='buttCompara' onClick={() => handleCompare(videogame)}>Compara</button>
                        <button className='buttFav' onClick={() => handleFav(videogame)}>⭐ Aggiungi ai preferiti</button>
                    </>
                )}
                {compare.length === 2 && <CompareVideogamesModal />}
            </div>
        </>
    );
};

export default VideogamesDetails;
