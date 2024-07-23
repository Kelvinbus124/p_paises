import React, { useEffect, useState } from 'react'

const Tabla = () => {
    const [paises, setPaises] = useState([])
    useEffect(() => {
        const paisesLS = localStorage.getItem("paises")
        setPaises(JSON.parse(paisesLS))
    },[])
  return (
    <>
    <table className="table table-striped">
            <thead>
              <tr>
                <th>País</th>
                <th>Capital</th>
                <th>Poblacion</th>
                <th>Idioma</th>
                <th>Moneda</th>
              </tr>
            </thead>
            <tbody>
                {
                  paises.map(p => (
                    <tr key={p.id}> 
                      <td>{p.nombre}</td>
                      <td>{p.capital}</td>
                      <td>{p.datos.poblacion}</td>
                      <td>{p.datos.idioma}</td>
                      <td>{p.datos.moneda}</td>
                    </tr>
                  ))
                }
            </tbody>
          </table>        
    </>
  )
}

export default Tabla