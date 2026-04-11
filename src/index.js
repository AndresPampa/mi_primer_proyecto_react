import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Usuario from './componentes/Usuario';
import FormularioInicioSesion from './componentes/FormularioInicioSesion';
// import ContadorClass from './componentes/ContadorClass';
// import {useState} from 'react';
import ContadorFuncional from './componentes/ContadorFuncional';
import './index.css';
import Boton from './elementos/Boton';


const App = () =>{

  const [sesion, cambiarEstadoSesion] = useState(true);

  return(
    <div className='contenedor'>
    {/* NO es la forma adecuada trabajar con estilos en linea */}
    {/*Segunda forma de hacerlo y mejor forma de hacerlo*/}
    {sesion === true ? 
    <div>
      <Usuario /> 
      {/* <ContadorClass cantidadAIncrementar={10} cantidadADisminuir={2} /> */}
      <ContadorFuncional cantidadAIncrementar={10} cantidadADisminuir={2} />
      <Boton largo marginTop marginRight className='boton' onClick = {() => cambiarEstadoSesion(false)}>Cerrar sesión</Boton>
    </div>
    :
    <div>
      <FormularioInicioSesion cambiarEstadoSesion={cambiarEstadoSesion} />
      {/* <button onClick={() => cambiarEstadoSesion(true)}>Iniciar sesión</button> */}
    </div>}
    </div>
  )
}


//Primera forma de hacerlo
// const verificarSesion = () =>{
//   if(sesion === true){
//     return JSX;
//   } else{
//     return <h1>No has iniciadosesión</h1>
//   }
// }



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


