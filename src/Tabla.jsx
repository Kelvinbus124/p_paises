import React, { useEffect, useState } from 'react'

const Tabla = () => {
    const [paises, setPaises] = useState([])
    const ListaPais = JSON.parse(localStorage.getItem("paises"))

    useEffect(() => {
        setPaises(ListaPais)
    },[])

    const eliminar = (e) => {
      const PaisEliminado=ListaPais.filter(p => p.id != e.target.value)
      localStorage.setItem("paises",JSON.stringify(PaisEliminado))
      setPaises(PaisEliminado)
    }

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
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
                {
                  paises && paises.map((p) => (
                    <tr key={p.id}> 
                      <td>{p.nombre}</td>
                      <td>{p.capital}</td>
                      <td>{p.datos.poblacion}</td>
                      <td>{p.datos.idioma}</td>
                      <td>{p.datos.moneda}</td>
                      <td><button className='btn btn-danger' onClick={eliminar} value={p.id}>Eliminar</button></td>
                    </tr>
                  ))
                }
            </tbody>
          </table>        
    </>
  )
}

export default Tabla