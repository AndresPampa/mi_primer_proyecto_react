import React, {useReducer} from 'react';
import Boton from '../elementos/Boton';

//Accion
//{tipo: 'INCREMENTAR'}

//Estado inicial
const contadorInicial = {contador: 0};

//reducer
const reducer = (estado, accion) => {
    switch(accion.type){
        case 'INCREMENTAR':
            return {contador: estado.contador + 1}
        case 'DISMINUIR':
            return {contador: estado.contador - 1}
        case 'REINICIAR':
            return {contador: 0}
        default:
            return estado;
    }
}

const EjemploUseReducer = () =>{

    const [estado, dispatch] = useReducer(reducer, contadorInicial);

    return(
        <div>
            <h1>Contador {estado.contador}</h1>
            <Boton
                negro 
                marginRight
                onClick={() => dispatch({type: 'INCREMENTAR'})}>Incrementar</Boton>
            <Boton 
                negro 
                marginRight
                onClick={() => dispatch({type: 'DISMINUIR'})}>Disminuir</Boton>
            <Boton 
                negro 
                marginRight
                onClick={() => dispatch({type: 'REINICIAR'})}>REINICIAR</Boton>
        </div>
    )
}

export default EjemploUseReducer;