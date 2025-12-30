import {useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify';

import './favorites.css'

function Favorites (){
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        const list = localStorage.getItem("@primeflix"); 
        setMovies(JSON.parse(list) || [])
    },[])

    function deleteMovie(id){
        let filteredMovies = movies.filter((item)=>{
            return (item.id !== id); 
        }); 

        setMovies(filteredMovies);
        localStorage.setItem('@primeflix', JSON.stringify(filteredMovies)); 
        toast.success("Filme excluido");
    }
    return (
        <div className='movies'> 
            <h1>Meus Filmes</h1>
            
            <ul>
                {movies.length === 0 && <span>Você não possui nenhum filme salvo</span>}   
                {movies.map((movie)=>{
                    return(
                        <li key={movie.id}>
                            <span>{movie.title}</span>
                            <div>
                                <Link to={`/movie/${movie.id}`}>Ver Detalhes</Link>
                                <button onClick={()=> deleteMovie(movie.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default Favorites; 