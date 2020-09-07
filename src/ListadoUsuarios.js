import React from 'react'

const ListadoUsuarios = ({ usuarios, editar, indice, borrarUsuario, editarUsuario }) => (
  <ul>
    {usuarios.length ? (
      usuarios.map((usuario, i) => (
        <li key={i}>
          {usuario.nombre} {usuario.apellido}
          <button onClick={editarUsuario.bind(null, i)} disabled={editar && indice === i ? true : ''}>
            editar
          </button>
          <button onClick={borrarUsuario.bind(null, i)} disabled={editar && indice === i ? true : ''}>
            borrar
          </button>
        </li>
      ))
    ) : (
      <li>No hay usuarios</li>
    )}
  </ul>
)

export default ListadoUsuarios
