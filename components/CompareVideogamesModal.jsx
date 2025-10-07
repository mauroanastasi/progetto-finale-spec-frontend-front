import { useFetchContext } from '../context/GlobalContext';


const CompareVideogamesModal = () => {
    const { compare, clearCompare } = useFetchContext();

    const [firstGame, secondGame] = compare;

    return (
        <div className="modalOverlay">
            <div className="modal">
                <h2>Comparazione</h2>
                <table className='tableComp'>
                    <thead className='tableCompThead'>
                        <tr className='tableCompTr'>
                            <th >Titolo</th>
                            <th>{firstGame.title}</th>
                            <th>{secondGame.title}</th>
                        </tr>
                    </thead>
                    <tbody className='tableCompTbody'>
                        <tr>
                            <td className='tableCompTd'>Categoria</td>
                            <td>{firstGame.category}</td>
                            <td>{secondGame.category}</td>
                        </tr>
                        <tr>
                            <td className='tableCompTd'>Descrizione</td>
                            <td>{firstGame.description}</td>
                            <td>{secondGame.description}</td>
                        </tr>
                        <tr>
                            <td className='tableCompTd'>Piattaforma</td>
                            <td>{firstGame.platform.join(" - ")}</td>
                            <td>{secondGame.platform.join(" - ")}</td>
                        </tr>
                        <tr>
                            <td className='tableCompTd'>Anno</td>
                            <td>{firstGame.releaseYear}</td>
                            <td>{secondGame.releaseYear}</td>
                        </tr>
                        <tr>
                            <td className='tableCompTd'>Developer</td>
                            <td>{firstGame.developer}</td>
                            <td>{secondGame.developer}</td>
                        </tr>
                        <tr>
                            <td className='tableCompTd'>Giocatori max</td>
                            <td>{firstGame.maxPlayers}</td>
                            <td>{secondGame.maxPlayers}</td>
                        </tr>
                        <tr>
                            <td className='tableCompTd'>Prezzo</td>
                            <td>{firstGame.price} €</td>
                            <td>{secondGame.price} €</td>
                        </tr>
                        <tr>
                            <td className='tableCompTd'>Rating</td>
                            <td>{firstGame.rating}</td>
                            <td>{secondGame.rating}</td>
                        </tr>
                    </tbody>
                </table>
                <button className='chiudiComp' onClick={clearCompare}>Chiudi</button>
            </div>
        </div>
    );
};

export default CompareVideogamesModal;