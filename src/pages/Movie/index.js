import {useEffect, useState} from 'react'; 
import { useParams } from 'react-router-dom';
import api from "../../services/api";

import './movie-info.css'; 

function Movie()
{
    const { id } = useParams(); 
    let [movie,setMovie] = useState([]); 
   
    useEffect(()=>{
        async function loadMovieById() {
            let response = await api.get(`movie/${id}`,{
                params:{
                    api_key: '9c6eb96fb951f52cf16a4cc792ea682d', 
                    language : 'pt-BR'
                }
            })
            console.log(response.data); 
            setMovie(response.data)
        }

        loadMovieById(); 
    },[])

    function formatData(date){
         if (!date) return '';
        let formattedDate = date.split('-').reverse().join('/');
        return formattedDate; 
    }
    
    
    console.log(movie.release_date); 
     return(
        <div className='movie-info'>
             <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
            <h2>{movie.title}</h2>
            <h4>{movie.overview}</h4>
            <label>Data de Lançamento: {formatData(movie.release_date)}</label>
            <strong>Avaliação: {movie.vote_average}</strong>

             <div className='area-buttons'>
                <button>
                    Salvar
                </button>
                <button>
                    <a href="#">Trailer</a>
                </button>
            </div>
        </div>
       
    )
}

export default Movie; 