
// FUENTE
import '@fontsource/raleway/300.css';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/500.css';
import '@fontsource/raleway/700.css';
import { Navbar } from './UI/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import { InicioPage } from './pages/InicioPage';
import { AboutPage } from './pages/AboutPage';
import { HabilidadesPage } from './pages/HabilidadesPage';
import { LinuxPage } from './pages/LinuxPage';
import { ContactPage } from './pages/ContactPage';



export const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<InicioPage/> } />
      <Route path='/about' element={<AboutPage/> } />
      <Route path='/skills' element={<HabilidadesPage/> } />
      <Route path='/linux' element={<LinuxPage/> } />
      <Route path='/contact' element={<ContactPage/> } />
      <Route path='/*' element={ <Navigate to="/" />  } />
    </Routes>
    </>
  )
}
