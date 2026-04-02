import React from 'react';

const Titulo = ({usuario = "Pampa", color = "gray"}) =>{
    // console.log(props);
    const nombre = usuario;
    // const color = 'red';

    return (<h1 className='titulo' style={{color: color}}>Hola {nombre}</h1>);
}

// const TituloAzul = (props) =>{

//     const nombre = props.usuario;
//     const color = 'blue';

//     return(
//         <h1 className='titulo' style={{color: color}}>Hola {nombre}</h1>
//   );
// }

// export {TituloRojo, TituloAzul};
export {Titulo};