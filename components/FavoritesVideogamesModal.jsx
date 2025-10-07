import { useFetchContext } from '../context/GlobalContext';
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
                <div className="contFav">
                    <h3>Preferiti</h3>
                    {fav.map(game => (
                        <div key={game.id} className="favItem">
                            <Link to={`/details/${game.id}`}>{game.title}</Link>
                            <button className='eliminaFav' onClick={() => eliminate(game.id)}>❌</button>
                        </div>
                    ))}
                    <button className='eliinaTuttiFav' onClick={deleteAll}>ELIMINA TUTTO</button>
                </div>
            </div>
        </div>
    );
};

export default FavoritesVideogamesModal
