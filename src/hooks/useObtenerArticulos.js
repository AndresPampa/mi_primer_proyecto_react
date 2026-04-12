import {useState, useEffect} from 'react';

const UseObtenerArticulos = () =>{

    const [articulos, establecerArticulos] = useState([]);
    const [cargando, establecerCargando] = useState(true);


    useEffect(() =>{
        setTimeout(() =>{
            establecerArticulos([
                {
                    id: 1,
                    titulo: 'Articulo 1',
                    contenido: 'Contenido del articulo 1'
                },
                {
                    id: 2,
                    titulo: 'Articulo 2',
                    contenido: 'Contenido del articulo 2'
                },
                {
                    id: 3,
                    titulo: 'Articulo 3',
                    contenido: 'Contenido del articulo 3'
                }
            ]);
            establecerCargando(false);
        }, 2000);

    }, []);

    return [articulos, cargando];
}


export default UseObtenerArticulos;