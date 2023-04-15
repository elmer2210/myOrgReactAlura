import './ListaOpciones.css'

const ListaOpciones = (props) => {

    //Método Map
   

    const manejarCambio = (event) => {
       props.actualizarValor(event.target.value);

    }

    return(
        <div className='lista-opciones'>
            <label>Equipos</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>----Seleccionar Equipo----</option>
               { props.equipos.map((equipo, index) => <option key={index} value={equipo}> {equipo} </option> )}
            </select>
        </div>
    )
}

export default ListaOpciones;