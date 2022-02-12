//ARCHIVO PARA GENERAR RUTAS
import {useContext} from 'react';
import { UserContext } from './Context/UserContext';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Login from "./Page/Login/Login";
import Home from './Page/Home/Home';
// import MantenedorMenu from './Page/Mantenedores/Mantenedor_Menu/Mantenedor_Menu';
// import MantenedorPerfil from './Page/Mantenedores/Mantenedor_Perfil/Mantenedor_Perfil';
import MantenedorUsuario from './Page/Mantenedores/Mantenedor_Usuario/Mantenedor_Usuario'

import Sidebar from './Component/Menu/Sidebar'
import Layout from "./Component/Layouts/Layout";

const AppRoutes = () => {
    const {userData} = useContext(UserContext);
    const isLoged = userData.user? true: false;

    const RedirectRoute = () => {
        {
            userData.user? <Route path='*' element={<Layout isLoged={true} >me loguie</Layout>} /> 
        : 
            <Route path='*' element={<Layout isLoged={false}><Login/></Layout>}/>
        }

    }



    window.onbeforeunload = (event) => {
        const e = event || window.event;
        e.preventDefault();
        if (e) {
          e.returnValue = "";
        }
        return "";
      };
    
    return (
        // <div>
        
        <Router>
            <Layout isLoged={isLoged}>
                <Routes>
                    <Route exact path='/inicio' element={<Login/>}/>
                    <Route exact path='/loged' element={<div>me loguie</div>} />
                    <Route exact path="/" element={<Login/>}/>
                    <Route exact path="/home" element={<Home/>}/>
                    {/* {
                    <Route path='/asd' element={<Login />} />
                    <Route path='*' element={<Login />} />
                    } */}
                </Routes>
                {/* <Sidebar />
                <Routes>
                    <Route path='/mantenedor/mantenedor_usuario' element={<MantenedorUsuario />} />
                </Routes> */}
            </Layout>
        </Router>
        
        // </div>

        
    )
}

export default AppRoutes;