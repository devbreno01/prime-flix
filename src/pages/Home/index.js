import { useEffect, useState } from "react";
import {axios} from 'axios'; 
import api from "../../services/api";
import { Link } from 'react-router-dom'; 
import './home.css'; 


function Home()
{
    const [movies,setMovies] = useState([]); 
    const [loading,setLoading] = useState(true); 

    useEffect(()=>{
        async function loadMovies(){
            const response = await api.get('movie/now_playing',{
                params:{    
                    api_key: '9c6eb96fb951f52cf16a4cc792ea682d', 
                    language : 'pt-BR',
                    page: 1
                }
            })
            
            setMovies(response.data.results.slice(0,50)); 
            setLoading(false);
        }

        loadMovies(); 

    },[]);
    if(loading){
        return(
            <div className="loading">Carregando..</div>
        )
    }
    return(
        <div className="container">
            <div className="list-movies">
                {movies.map((movie)=>{
                    return (
                        <article key={movie.id}>
                            <strong>{movie.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                            <Link to={`/movie/${movie.id}`}>Acessar</Link>
                        </article>
                    )
                })} 
            </div>
        </div>
    )

}

export default Home;