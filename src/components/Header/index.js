import './header.css'
import {Link} from 'react-router-dom'
import logo from '../Header/imgs/logo.svg'

function Header(){

    return(
        <header>
            <Link to="/" className='logo'> 
                <img src={logo} alt="" width={100} height={100}/>
            </Link>
            <Link to="/favorites" className='favorites'>Meus Filmes</Link>
        </header>
    )
}

export default Header; 