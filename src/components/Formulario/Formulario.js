import { useState } from 'react';
import './Formulario.css'
import Campo from '../Campo/Campo';
import ListaOpciones from '../ListaOpciones/ListaOpciones';
import Boton from '../Boton/Boton';

const Formulario = (props) => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const [titulo, setTitulo] = useState("");
    const  [color, setColor] = useState("");

    const {registrarColaborador, crearEquipo} = props;

    const manejarEnvio = (evento) => {
        evento.preventDefault();
        let datosEnviar = {
            nombre,
            puesto,
            foto, 
            equipo
        }

        registrarColaborador(datosEnviar)
    };

    const manejarNuevoEquipo = (evento) => {
        evento.preventDefault();
        crearEquipo({titulo, colorPrimario:color})
    }
    return (
        <section className='formulario'>
            <form onSubmit={manejarEnvio}>
                <h2>
                    Rellena el formulario para crear el colaborador.
                </h2>
                <Campo
                    titulo='Nombres' 
                    placeholder='Ingresar nombres' 
                    required 
                    valor={nombre} 
                    actualizarValor={setNombre} 
                />

                <Campo
                    titulo='Puesto' 
                    placeholder='Ingresar puesto' 
                    required
                    valor={puesto}
                    actualizarValor={setPuesto}  
                />

                <Campo
                    titulo='Foto' 
                    placeholder='Ingresar enlace de foto' 
                    required
                    valor={foto}
                    actualizarValor={setFoto}
                />
                <ListaOpciones 
                    valor={equipo} 
                    actualizarValor={setEquipo} 
                    equipos = {props.equipos}
                />
                <Boton>Crear</Boton>
            </form>
            <form onSubmit={manejarNuevoEquipo}>
                <h2>
                    Rellena el formulario para crear el equipo.
                </h2>
                <Campo
                    titulo='Titulo' 
                    placeholder='Ingresar titulo' 
                    required 
                    valor={titulo} 
                    actualizarValor={setTitulo} 
                />

                <Campo
                    titulo='Color' 
                    placeholder='Ingresar el color en hexadecimal' 
                    required
                    valor={color}
                    actualizarValor={setColor}  
                    type="color"
                />
                <Boton>Registrar equipo</Boton>
            </form>
        </section>
    )
}

export default Formulario;