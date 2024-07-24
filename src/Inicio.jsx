import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Link, Routes, Route, } from "react-router-dom"
import Tabla from './Tabla'
import { Formpaises } from './Formpaises'



const Inicio = () => {
    const url = "http://45.236.130.191/paises.php"
    

    useEffect(() => {
        fetch(url).then(response => response.json()).then(data => {
            localStorage.setItem("paises", JSON.stringify(data))
        })
    }, [])
    
  return (
    <div className="container">
        <h4>Seleccione una opción</h4>
          <Router>
            <ul>
                <li>
                    <Link to={"/"}>Inicio</Link>
                </li>  
                <li>
                    <Link to={"/agregar"}>Agregar Paises</Link>
                </li> 
                <li>
                    <Link to={"/paises"}>Lista de Paises</Link>
                </li> 
            </ul>
            <Routes>
                <Route path="/agregar" element={<Formpaises/>}></Route>
                <Route path="/paises" element={<Tabla/>}></Route>
            </Routes>
          </Router>
    </div>
     
  )
}

export default Inicio