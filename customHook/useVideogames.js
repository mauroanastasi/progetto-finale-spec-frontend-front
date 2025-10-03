import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const useVideogames = () => {

    const [compare, setCompare] = useState([])

    // chiamata globale list solo proprietà id, createdAt, updatedAt, title, category

    const [videogames, setVideogames] = useState([])

    const apiUrl = import.meta.env.VITE_API_URL

    useEffect(() => {
        fetch(`${apiUrl}/videogames`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setVideogames(data)
            })
            .catch(error => console.error(error))
    }, [])

    // chiamata a id specifico tutte proprietà

    const fullVideogames = async (id) => {
        try {
            const response = await fetch(`${apiUrl}/videogames/${id}`);
            if (!response.ok) {
                throw new Error(`Errore ${response.status}`);
            }
            const data = await response.json();
            console.log(data)
            return data;
        } catch (err) {
            console.error("Errore fetch dettagli:", err);
            throw err;
        }
    };

    // per la comparazione

    const compareVideogames = (game) => {
        if (compare.some(g => g.id === game.id)) {
            alert("hai già inserito nella comparazione questo videogioco")
            return
        }
        setCompare(p => [...p, game])
    }

    const clearCompare = () => {
        setCompare([])
    }

    return { videogames, fullVideogames, compare, compareVideogames, clearCompare }

}

export default useVideogames