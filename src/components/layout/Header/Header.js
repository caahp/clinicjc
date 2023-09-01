import './Header.css';

const textoOpcoes = ['Home', 'Procedimentos ⇩', 'Contato']

function Header() {
    return(
    <ul className = 'opcoes'>
            { textoOpcoes.map((texto) => (
              <li className = 'opcao'><p>{texto}</p></li>
            ) )}
        </ul> )
}

export default Header;