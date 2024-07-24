import React, { useState } from 'react'

export const Formpaises = () => {
    const [pais, setPais] = useState("")
    const [capital, setCapital] = useState("")
    const [poblacion, setPoblacion] = useState("")
    const [idioma, setIdioma] = useState("")
    const [moneda, setMoneda] = useState("")

    const guardarPais = () => {
       const ListaPaises = JSON.parse(localStorage.getItem("paises"))
       const rpaises = {id:ListaPaises.length + 1,nombre:pais, capital: capital, datos:{poblacion:poblacion, idioma:idioma, moneda:moneda}}
       const nuevaListaPaises = [...ListaPaises, rpaises]
       localStorage.setItem("paises", JSON.stringify(nuevaListaPaises))

    }


  return (
    <div className="container">
        <div className="row">
            <div className="col-8">
                <div className="col">
                    <label htmlFor="pais" className="form-label">País</label>
                    <input type="text" id="pais" value={pais}  onChange={e => setPais(e.target.value)} className='form-control'/>
                </div>
            <div className="col">
                <label htmlFor="capital" className="form-label">Capital</label>
                <input type="text" id="capital" value={capital}  onChange={e => setCapital(e.target.value)} className='form-control'/>
            </div>
            <div className="col">
                <label htmlFor="poblacion" className="form-label">Poblacion</label>
                <input type="text" id="poblacion" value={poblacion}  onChange={e => setPoblacion(e.target.value)} className='form-control'/>
            </div>
            <div className="col">
                <label htmlFor="idioma" className="form-label">Idioma</label>
                <input type="text" id="idioma" value={idioma}  onChange={e => setIdioma(e.target.value)} className='form-control'/>
            </div>
            <div className="col">
                <label htmlFor="moneda" className="form-label">Moneda</label>
                <input type="text" id="moneda" value={moneda}  onChange={e => setMoneda(e.target.value)} className='form-control'/>
            </div>
            <div className="col mt-4">
                <button className="btn btn-success" onClick={guardarPais}>Guardar</button>
            </div>
            </div>
        </div>
    </div>
    
  )
}
