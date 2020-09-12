import React from "react"


const Main = ({contador,aumentarContador,resetearContador,restarContador}) => 
    <main>
        <h2>Home</h2>
        <p>El contador va :  {contador}</p>
        <button onClick={aumentarContador}>+</button>
        <button onClick={resetearContador}>resetear</button>
        <button onClick={restarContador}>-</button>
    </main>


export default Main