import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './pages/Home'
import Movie from './pages/Movie'
import Header  from './components/Header'
import Favorites from './pages/Favorites'; 
import Erro from './pages/Erro'

function RoutesApp()
{
    return (
        <BrowserRouter>
         <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/movie/:id' element={<Movie/>}/>
                <Route path='/favorites' element={<Favorites/>}/>
                <Route path='*' element={<Erro/>}/>  {/* para quando tentar acessar uma rota que não existe */}
                
            </Routes>
        </BrowserRouter>
    )

}

export default RoutesApp