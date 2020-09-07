import React from 'react'
import ListadoUsuarios from './ListadoUsuarios'

const Usuarios = ({ nombre, apellido, editar, cancelUpdate, indice, usuarios, manejarElSubmit, manejarCambioNombre, manejarCambioApellido, borrarUsuario, editarUsuario }) => (
  <>
    <form onSubmit={manejarElSubmit}>
      <div>
        <input onChange={manejarCambioNombre} type="text" placeholder="Nombre" value={nombre} />
      </div>
      <div>
        <input onChange={manejarCambioApellido} type="text" placeholder="Apellido" value={apellido} />
      </div>
      <button>{!editar ? 'Guardar' : 'Actualizar'}</button> {editar ? <button onClick={cancelUpdate}>Cancel</button> : null}
      {console.log(editar)}
    </form>
    <ListadoUsuarios usuarios={usuarios} indice={indice} editar={editar} borrarUsuario={borrarUsuario} editarUsuario={editarUsuario} />
  </>
)

export default Usuarios
