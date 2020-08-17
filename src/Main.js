import React from 'react'

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      contador: 0
    }
    this.aumentarContador = this.aumentarContador.bind(this)
    this.disminuirContador = this.disminuirContador.bind(this)
  }

  componentDidMount() {
    console.log('Estoy en pantalla')
  }

  aumentarContador() {
    this.setState({
      contador: this.state.contador + 1
    })
  }
  disminuirContador() {
    if (this.state.contador > 0) {
      this.setState({
        contador: this.state.contador - 1
      })
    }
  }

  render() {
    return (
      <main>
        <h2>Home</h2>
        <p>El contador va : {this.state.contador}</p>
        {this.state.contador > 5 ? <p>Llego al maximo!</p> : null}
        <button onClick={this.aumentarContador}>+</button>
        <button>resetear</button>
        <button onClick={this.disminuirContador}>-</button>
      </main>
    )
  }
}

export default Main
