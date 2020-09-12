import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Usuarios from '../componentes/Usuarios'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      contador: 0,
      links: ['usuarios', 'productos', 'contacto'],
      form: {
        nombre: '',
        apellido: '',
        indice: 0,
        editar: false
      },
      usuarios: []
    }
  }

  borrarUsuario = i => {
    let start = this.state.usuarios.slice(0, i)
    let end = this.state.usuarios.slice(i + 1)

    let nuevos_usuarios = [...start, ...end]

    this.setState({
      usuarios: nuevos_usuarios
    })
  }

  resetearForm = () => {
    this.setState({
      form: {
        nombre: '',
        apellido: '',
        editar: false
      }
    })
  }
  editarUsuario = i => {
    let usuario = this.state.usuarios[i]
    // let start = this.state.usuarios.slice(0, i)
    // let end = this.state.usuarios.slice(i + 1)
    // let nuevos_usuarios = [...start, ...end]

    this.setState({
      usuarios: [...this.state.usuarios],
      form: {
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        indice: i,
        editar: true
      }
    })
  }

  manejarElSubmit = e => {
    e.preventDefault()
    if (!this.state.form.editar) {
      const { indice, editar, ...nuevoUsuario } = this.state.form
      this.setState({
        usuarios: [...this.state.usuarios, nuevoUsuario]
      })
    } else {
      let i = this.state.form.indice
      let start = this.state.usuarios.slice(0, i)
      let end = this.state.usuarios.slice(i + 1)

      let currentUsuario = this.state.usuarios[i]

      currentUsuario.nombre = this.state.form.nombre
      currentUsuario.apellido = this.state.form.apellido

      let nuevos_usuarios = [...start, currentUsuario, ...end]

      this.setState({
        usuarios: nuevos_usuarios
      })
    }
    this.resetearForm()
  }

  manejarCambioAtributo = (atributo, e) => {
    let atributoTemp = e.target.value

    this.setState({
      form: {
        ...this.state.form,
        [atributo]: atributoTemp
      }
    })
  }
  manejarEditUsuario = (atributo, e) => {
    let atributoTemp = e.target.value

    this.setState({
      form: {
        ...this.state.form,
        [atributo]: atributoTemp
      }
    })
  }
  cancelUpdate = () => {
    this.resetearForm()
  }

  aumentarContador = () => {
    this.setState({ contador: this.state.contador + 1 })
  }

  restarContador = () => {
    this.setState({ contador: this.state.contador - 1 })
  }

  resetearContador = () => {
    this.setState({ contador: 0 })
  }

  render() {
    let { links, contador, form, usuarios } = this.state
    return (
      <>
        <Header links={links} />
        <Main contador={contador} aumentarContador={this.aumentarContador} restarContador={this.restarContador} resetearContador={this.resetearContador} />
        <Usuarios cancelUpdate={this.cancelUpdate} nombre={form.nombre} indice={form.indice} editar={form.editar} apellido={form.apellido} usuarios={usuarios} manejarElSubmit={this.manejarElSubmit} manejarCambioNombre={this.manejarCambioAtributo.bind(this, 'nombre')} manejarCambioApellido={this.manejarCambioAtributo.bind(this, 'apellido')} borrarUsuario={this.borrarUsuario} editarUsuario={this.editarUsuario} />
        <Footer />
      </>
    )
  }
}

export default App
