import React from 'react';
// import { TituloRojo, TituloAzul } from './Titulo';
import {Titulo} from './Titulo';

//Los Nombres de los componentes empiezan con mayusculas como las CLASES en JS(CAMELCASE)
const Usuario = () =>{

    const pais = 'Argentina';
    const amigos = ['Juan', 'Pedro', 'Maria'];

    return(
      <div>
        <Titulo />
        <Titulo usuario = "Pampa" color = "blue"/>
        <p>Esta es una prueba de JSX papa!</p>
        {pais &&<p>Vivo en {pais}</p>}{/*Si existe pais agrega el parrafo*/}
        <p>Esta es mi lista de amigos:</p>
        <ul>
          {amigos.map((amigo, index) => <li key={index}>{amigo}</li>)}
        </ul>
        <p>Que tengas un buen dia! Saludos!</p>
      </div>
    );
  }

export default Usuario;