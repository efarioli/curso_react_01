import React from 'react'
import ListadoUsuarios from './ListadoUsuarios'

const Usuarios = ({ nombre, apellido, usuarios, manejarElSubmit, manejarCambioNombre, manejarCambioApellido, borrarUsuario, editarUsuario }) => (
  <>
    <form onSubmit={manejarElSubmit}>
      <div>
        <input onChange={manejarCambioNombre} type="text" placeholder="Nombre" value={nombre} />
      </div>
      <div>
        <input onChange={manejarCambioApellido} type="text" placeholder="Apellido" value={apellido} />
      </div>
      <button>Guardar</button>
    </form>
    <ListadoUsuarios usuarios={usuarios} borrarUsuario={borrarUsuario} editarUsuario={editarUsuario} />
  </>
)

export default Usuarios
