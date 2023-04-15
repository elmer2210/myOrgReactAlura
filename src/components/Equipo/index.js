import Colaborador from "../Colaborador"
import "./Equipo.css"
import hexToRgba from 'hex-to-rgba'

const Equipo = (props) => {

     //Destructuración 
    const {colorPrimario, colorSecundario, titulo, id } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props;

    const estilotitulo = {
        borderColor: colorPrimario
    }

    const estiloSecion = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    return <> { colaboradores.length > 0 &&
        <section className="equipo" style={estiloSecion}>
            <input
            className="input-color"
                type="color" 
                value={colorPrimario}
                onChange={(event) => {
                    actualizarColor(event.target.value, id)
                }}
            />
            <h3 style={estilotitulo} >{titulo}</h3>
            <div className="colaboradores">
                {
                   colaboradores.map( (colaborador, index) => <Colaborador  
                    datos={colaborador} 
                    key={index}
                    colorPrimario = {colorPrimario} 
                    eliminarColaborador={eliminarColaborador}
                    like={like}
                   />) 
                }
            </div>
        </section>
    }
    </>
}

export default Equipo;