import React, {useState, useEffect} from 'react';
import styles from './ContadorFuncional.module.css';
import Boton from '../elementos/Boton';

const ContadorFuncional = (props) =>{
    const [cuenta, cambiarCuenta] = useState(0);
    
    //El useEffect se ejecuta cuando el componente se monta o se renderiza y es analogo al componentDidMount y componentDidUpdate
    // useEffect(() =>{
        //     console.log('El componente se ha montado o se renderizo');
        // });
        
        //Podemos correr el useEffect la cantidad de veces que queramos, 
        // pero si queremos que se ejecute solo una vez, debemos poner un array vacio como segundo parametro
        // useEffect(() =>{
            //     console.log('El componente se ha montado por primera vez');
            // }, []);
            
            //Se ejecuta cuando el estado del contador cambia o dependencia que le pasamos como segundo parametro
            // useEffect(() =>{
                //     console.log('El estado del contador Cambio');
                // }, [cuenta]);
                
                useEffect(() =>{
                    //Codigo del efecto
                    return( () => {
                        console.log('Adios Componente');
                    });
                }, []);
                
    const incrementar = (cantidad) =>{cambiarCuenta(cuenta + cantidad)}
    const disminuir = (cantidad) =>{cambiarCuenta(cuenta - cantidad)}

    return(
        <div>
            <h1>Contador: {cuenta}</h1>
            {/* <button className={styles.boton} onClick={() => incrementar(props.cantidadAIncrementar)}>Incrementar</button> */}
            {/* <button className={styles.boton} onClick={() => disminuir(props.cantidadADisminuir)}>Disminuir</button> */}
            <Boton negro marginRight className={styles.boton} onClick={() => incrementar(props.cantidadAIncrementar)}>Incrementar</Boton>
            <Boton negro marginRight className={styles.boton} onClick={() => disminuir(props.cantidadADisminuir)}>Disminuir</Boton>
        </div>
    );
}

export default ContadorFuncional;
