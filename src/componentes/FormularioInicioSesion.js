import React, {useState} from 'react';

const FormularioInicioSesion = (props) =>{
    // console.log(props);
    const [usuario, cambiarUsuario] = useState('');
    const [password, cambiarPassword] = useState('');

    // const onChangeUsuario = (evento) =>{cambiarUsuario(evento.target.value)}
    // const onChangePassword = (evento) =>{cambiarPassword(evento.target.value)}

    const onChange = (evento) =>{
        if(evento.target.name === 'usuario'){
            cambiarUsuario(evento.target.value)
        }
        else if(evento.target.name === 'password'){
            cambiarPassword(evento.target.value)
        }
    }

    const onSubmit = (evento) =>{
        evento.preventDefault();
        if(usuario === 'carlos' && password === '123'){
            props.cambiarEstadoSesion(true);
        }
        else{
            cambiarUsuario('');
            cambiarPassword('');
        }
    }

    return(
        <form action="" onSubmit={onSubmit}>
            <p>Usuario: {usuario}</p>
            <p>Contraseña: {password}</p>
            <div>
                <label htmlFor="usuario">Usuario</label>
                <input 
                    type="text" 
                    name="usuario" 
                    id="usuario"
                    value={usuario}
                    onChange={onChange}
                />
            </div>
            <div>
                <label htmlFor="password">Contraseña</label>
                <input
                type="password" 
                name="password" 
                id="password"
                value={password}
                onChange={onChange}
                />
            </div>
            <button type="submit">Iniciar sesión</button>
        </form>
    )
}

export default FormularioInicioSesion;
