import axios from 'axios';


//url = https://api.themoviedb.org/3/movie/now_playing?api_key=9c6eb96fb951f52cf16a4cc792ea682d&language=pt-BR
//base url = https://api.themoviedb.org/3

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default api; 