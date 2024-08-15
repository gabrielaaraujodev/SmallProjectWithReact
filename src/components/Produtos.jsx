import React from "react"

function Produtos({dispositivo, valor}) {
    return (
        <div>
            <h1>{dispositivo}</h1>
            <p>R$ {valor}</p>
        </div>
    )
}

export default Produtos