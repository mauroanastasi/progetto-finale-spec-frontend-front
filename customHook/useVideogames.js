import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const useVideogames = () => {

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

    return { videogames, fullVideogames }

}

export default useVideogames