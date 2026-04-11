import React, {Component} from 'react';

// class ContadorClass extends React.Component{}
class ContadorClass extends Component{

    constructor(props){
        super(props);
        this.state = {contador: 0}
    }

    componentDidMount(){
        console.log('El componente se ha montado');
        //Aqui se puede hacer una petición a una API o a un servidor
    }

    componentDidUpdate(propiedadesAnteriores, estadoAnterior){
        console.log('El componente se ha actualizado');
        console.log(propiedadesAnteriores, 'propiedadesAnteriores');
        console.log(estadoAnterior, 'estadoAnterior');
        //Actualizacion del estado del componente
    }

    componentWillUnmount(){
        console.log('El componente se ha desmontado');
        //Aqui se puede hacer una limpieza de recursos o una cancelación de peticiones
    }

    incrementar(cantidad){
        this.setState((estadoAnterior) =>{
            return {
                contador: estadoAnterior.contador + cantidad
            }
        })
    }

    disminuir(cantidad){
        this.setState((estadoAnterior) =>{
            return {
                contador: estadoAnterior.contador - cantidad
            }
        })
    }

    render(){
        return(
            <div>
                <h1>Contador: {this.state.contador}</h1>
                <button onClick={() => this.incrementar(this.props.cantidadAIncrementar)}>Incrementar</button>
                <button onClick={() => this.disminuir(this.props.cantidadADisminuir)}>Disminuir</button>
            </div>
        );
    }
}

export default ContadorClass;