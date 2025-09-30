import { useState, useEffect } from "react";

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

    return { videogames }

}

export default useVideogames