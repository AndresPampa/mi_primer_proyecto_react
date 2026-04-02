import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Usuario from './componentes/Usuario';
// import {useState} from 'react';

const App = () =>{

  const [sesion, cambiarEstadoSesion] = useState(true);

  return(
    <div>
    {/* NO es la forma adecuada trabajar con estilos en linea */}
    {/*Segunda forma de hacerlo y mejor forma de hacerlo*/}
    {sesion === true ? 
    <div>
      <Usuario /> 
      <button onClick = {() => cambiarEstadoSesion(false)}>Cerrar sesión</button>
    </div>
    :
    <div>
      <p>No has iniciado sesión</p>
      <button onClick={() => cambiarEstadoSesion(true)}>Iniciar sesión</button>
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


