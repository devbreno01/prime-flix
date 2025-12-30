import {useEffect, useState} from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import api from "../../services/api";
import { toast } from 'react-toastify';
import './movie-info.css'; 



function Movie()
{
    const { id } = useParams(); 

    let [movie,setMovie] = useState([]); 
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(()=>{
        async function loadMovieById() {
            await api.get(`movie/${id}`,{
                params:{
                    api_key: '9c6eb96fb951f52cf16a4cc792ea682d', 
                    language : 'pt-BR'
                }
            }).then((response)=>{
                 setMovie(response.data);
                 //console.log(response.data)
                 setLoading(false); 
            })
            .catch(() => {
                console.log("Filme não encontrado");
                navigate("/", {replace:true})
                return; 
            })
            
           
        }

        loadMovieById(); 
    },[navigate,id]) //dependencias ou hooks utilizados dentro do useEffect a gente sempre passa no segundo parametro 
    

    function formatData(date){
         if (!date) 
            return '';
        
        let formattedDate = date.split('-').reverse().join('/');
        return formattedDate; 
    }
    
    function saveMovie()
    {
        const list = localStorage.getItem("@primeflix"); //recuperar valor específico que adicionado no localStorage 

        let savedMovies = JSON.parse(list) || [];
        let hasMovie = savedMovies.some((savedMovie)=> savedMovie.id === movie.id);

        if(hasMovie) {
            toast.warn("Filme já está na lista");
            return; 
        }

        savedMovies.push(movie);

        localStorage.setItem("@primeflix", JSON.stringify(savedMovies))
        toast.success("Filme salvo com sucesso");

    }
     return(
        <div className='movie-info'>
             <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
            <h2>{movie.title}</h2>
            <h4>{movie.overview}</h4>
            <label>Data de Lançamento: {formatData(movie.release_date)}</label>
            <strong>Avaliação: {movie.vote_average}</strong>

             <div className='area-buttons'>
                <button onClick={saveMovie}> 
                    Salvar
                </button>
                <button>
                    <a href={`https://youtube.com/results?search_query=${movie.title} Trailer`} target='blank' rel='noreferrer'>  
                        Trailer
                    </a>
                </button>
            </div>
        </div>
       
    )
}

export default Movie; 