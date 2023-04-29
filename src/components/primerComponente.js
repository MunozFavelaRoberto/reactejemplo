import React,{useState} from 'react'

export const PrimerComponente = () => {

    //let nombre="robertin";
    let web="robertinweb.com";

    const [nombre,setNombre] = useState("Victor");

    const cambiarNombre=(nuevoNombre)=>{
        setNombre(nuevoNombre);
    }


  return (
    <div>
        <h1>Mi primer componente</h1>
        <p>Este es un texto en mi primer componente</p>
        <p>Mi nombre es: {nombre}</p>
        <p>Mi web es: {web}</p>

        <button onClick={e=>cambiarNombre("Hola mundito xd")}>
            Cambiar nombre
        </button>
    </div>
  )
}
