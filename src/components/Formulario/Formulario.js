import { useState } from 'react';
import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaOpciones from '../ListaOpciones/ListaOpciones';
import Boton from '../Boton/Boton';

const Formulario = () => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const ManejarEnvio = (evento) => {
        evento.preventDefault();
        let datosEnviar = {
            nombre,
            puesto,
            foto, 
            equipo
        }
    };
    return (
        <section className='formulario'>
            <form onSubmit={ManejarEnvio}>
                <h2>
                    Rellena el formulario para crear el colaborador.
                </h2>
                <CampoTexto 
                    titulo='Nombres' 
                    placeholder='Ingresar nombres' 
                    required 
                    valor={nombre} 
                    actualizarValor={setNombre} 
                />

                <CampoTexto 
                    titulo='Puesto' 
                    placeholder='Ingresar puesto' 
                    required
                    valor={puesto}
                    actualizarValor={setPuesto}  
                />

                <CampoTexto 
                    titulo='Foto' 
                    placeholder='Ingresar enlace de foto' 
                    required
                    valor={foto}
                    actualizarValor={setFoto}
                />
                <ListaOpciones 
                    valor={equipo} 
                    actualizarValor={setEquipo} 
                />
                <Boton>Crear</Boton>
            </form>
        </section>
    )
}

export default Formulario;