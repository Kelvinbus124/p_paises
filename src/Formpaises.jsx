import React, { useState } from 'react'

export const Formpaises = () => {
    const [pais, setPais] = useState("")
    const [capital, setCapital] = useState("")
    const [poblacion, setPoblacion] = useState("")
    const [idioma, setIdioma] = useState("")
    const [moneda, setMoneda] = useState("")

    const guardarPais = () => {
       const rpaises = {nombre:pais, capital: capital, poblacion:poblacion, idioma:idioma, moneda:moneda}
       const ListaPaises = JSON.parse(localStorage.getItem("paises"))
       const nuevaListaPaises = [...ListaPaises, rpaises]
       localStorage.setItem("paises", JSON.stringify(nuevaListaPaises))

    }


  return (
    <div className="container">
        <div className="row">
            <div className="col-4">
                <div className="col">
                    <label htmlFor="pais" className="form-label">País</label>
                    <input type="text" id="pais" value={pais}  onChange={e => setPais(e.target.value)}/>
                </div>
            <div className="col">
                <label htmlFor="capital" className="form-label">Capital</label>
                <input type="text" id="capital" value={capital}  onChange={e => setCapital(e.target.value)}/>
            </div>
            <div className="col">
                <label htmlFor="poblacion" className="form-label">Poblacion</label>
                <input type="text" id="poblacion" value={poblacion}  onChange={e => setPoblacion(e.target.value)}/>
            </div>
            <div className="col">
                <label htmlFor="idioma" className="form-label">Idioma</label>
                <input type="text" id="idioma" value={idioma}  onChange={e => setIdioma(e.target.value)}/>
            </div>
            <div className="col">
                <label htmlFor="moneda" className="form-label">Moneda</label>
                <input type="text" id="moneda" value={moneda}  onChange={e => setMoneda(e.target.value)}/>
            </div>
            <div className="col mt-4">
                
                <button className="btn btn-success" onClick={guardarPais}>Guardar</button>
            </div>
            </div>
        </div>
    </div>
    
  )
}
