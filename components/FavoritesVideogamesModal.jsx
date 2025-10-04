import React from 'react';
import { useFetchContext } from '../context/GlobalContext';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const FavoritesVideogamesModal = () => {

    const { fav, deleteFav, clearFavorites } = useFetchContext();

    if (fav.length === 0) return null;

    const eliminate = (id) => {
        const specificGame = fav.find(v => v.id === id)
        deleteFav(specificGame)
    }

    const deleteAll = () => {
        clearFavorites()
    }

    return (
        <div className="favContainer">
            <div className="favIcon">
                ⭐
            </div>
            <div className="favModal">
                <h3>Preferiti</h3>
                {fav.map(game => (
                    <div key={game.id} className="favItem">
                        <Link to={`/details/${game.id}`}>{game.title}</Link>
                        <button onClick={() => eliminate(game.id)}>❌</button>
                    </div>
                ))}
                <button onClick={deleteAll}>ELIMINA TUTTO</button>
            </div>
        </div>
    );
};

export default FavoritesVideogamesModal
