import React from 'react';
import { useFetchContext } from '../context/GlobalContext';
import ReactDOM from 'react-dom';

const CompareVideogamesModal = () => {
    const { compare, clearCompare } = useFetchContext();

    const [firstGame, secondGame] = compare;

    return (
        <div className="modalOverlay">
            <div className="modal">
                <h2>Comparazione</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Titolo</th>
                            <th>{firstGame.title}</th>
                            <th>{secondGame.title}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Categoria</td>
                            <td>{firstGame.category}</td>
                            <td>{secondGame.category}</td>
                        </tr>
                        <tr>
                            <td>Descrizione</td>
                            <td>{firstGame.description}</td>
                            <td>{secondGame.description}</td>
                        </tr>
                        <tr>
                            <td>Piattaforma</td>
                            <td>{firstGame.platform}</td>
                            <td>{secondGame.platform}</td>
                        </tr>
                        <tr>
                            <td>Anno</td>
                            <td>{firstGame.releseYear}</td>
                            <td>{secondGame.releseYear}</td>
                        </tr>
                        <tr>
                            <td>Developer</td>
                            <td>{firstGame.developer}</td>
                            <td>{secondGame.developer}</td>
                        </tr>
                        <tr>
                            <td>Giocatori max</td>
                            <td>{firstGame.maxPlayer}</td>
                            <td>{secondGame.maxPlayer}</td>
                        </tr>
                        <tr>
                            <td>Prezzo</td>
                            <td>{firstGame.price} €</td>
                            <td>{secondGame.price} €</td>
                        </tr>
                        <tr>
                            <td>Rating</td>
                            <td>{firstGame.rating}</td>
                            <td>{secondGame.rating}</td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={clearCompare}>Chiudi</button>
            </div>
        </div>
    );
};

export default CompareVideogamesModal;