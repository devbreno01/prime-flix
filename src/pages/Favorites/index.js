import {useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import './favorites.css'
function Favorites (){
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        const list = localStorage.getItem("@primeflix"); 
        setMovies(JSON.parse(list) || [])
    },[])
    return (
        <div className='movies'> 
            <ul>
                {movies.map((movie)=>{
                    return(
                        <li key={movie.id}>
                            <span>{movie.title}</span>
                            <div>
                                <Link to={`/movie/${movie.id}`}>Ver Detalhes</Link>
                                <button>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default Favorites; 