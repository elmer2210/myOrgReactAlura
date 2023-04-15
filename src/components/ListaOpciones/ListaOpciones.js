import './ListaOpciones.css'

const ListaOpciones = (props) => {

    //Método Map
    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "Ux y Diseño",
        "Movil",
        "Innovación y Gestión"

    ]

    const manejarCambio = (event) => {
       props.actualizarValor(event.target.value);

    }

    return(
        <div className='lista-opciones'>
            <label>Equipos</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>----Seleccionar Equipo----</option>
               { equipos.map((equipo, index) => {
                return (
                    <option key={index} value={equipo}> {equipo} </option>
                )
               }) }
            </select>
        </div>
    )
}

export default ListaOpciones;