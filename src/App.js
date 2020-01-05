import React, { Fragment, useState, useEffect } from 'react'

//npm install --save axios
import Axios from 'axios'

//Components
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Imagenes from './Components/Imagenes/Imagenes'

function App() {

  const [ textBuscadorApp, setTextBuscadorApp ] = useState('')
  const [ imagenes, setImagenes ] = useState([])

  const [ paginaActual, setPaginaActual ] = useState(1)
  const [ totalPagina, setTotalPagina ] = useState(1)

  useEffect(() => {

    const consultarAPI = async () =>{

      if(textBuscadorApp === '') return

      const totalImagen = 30
      const key = '14814723-db8cfd0acc5964ad5400ae7fc'

      const url = `https://pixabay.com/api/?key=${key}&q=${textBuscadorApp}&per_page=${totalImagen}&page=${paginaActual}`

      const respuesta = await Axios.get(url)
      
      setImagenes(respuesta.data.hits)

      //Calculo de paginas
      const calcularPaginas = Math.ceil( respuesta.data.totalHits / totalImagen)
      setTotalPagina(calcularPaginas)

      //smooth de paginacion (Efecto hacia arriba)
      const container = document.querySelector('.container')
      container.scrollIntoView({behavior: 'smooth', block: 'end'})
      

    }
  
    consultarAPI()
  
  }, [textBuscadorApp, paginaActual])

  const paginaAnterior = () =>{

    let nuevaPaginaActual = paginaActual - 1

    setPaginaActual(nuevaPaginaActual)
  }

  const paginaSiguiente = () =>{

    let nuevaPaginaActual = paginaActual + 1

    setPaginaActual(nuevaPaginaActual)
  }

  //Mostrando mensaje si no hay imagenes
  const mensaje = Object.keys(imagenes).length === 0 ? 'Busca alguna Imagen' : 'Resultado de: ' + textBuscadorApp

  return (
    <Fragment>
      
      <Header
        setTextBuscadorApp={setTextBuscadorApp}
        setPaginaActual={setPaginaActual}
      />
      
      <div className="container">

        <h1 className="text-center my-5">{mensaje}</h1>

        <div className="row">
          {imagenes.map(imagenes =>(
            <Imagenes
              key={imagenes.id}
              imagenes={imagenes}
            />
          ))} 
        </div>
        
        <div className="row d-flex justify-content-center">
          { (paginaActual === 1) ? null : (
            <button onClick={paginaAnterior} type="button" className="uk-button text-white btn-secondary shadow m-5">&laquo; Anterior</button>
          ) }

          { (paginaActual === totalPagina || Object.keys(imagenes).length === 0) ? null : (
            <button onClick={paginaSiguiente} type="button" className="uk-button text-white btn-secondary shadow m-5">Siguiente &raquo;</button>
          ) }
        </div>

      </div>

      <Footer/>

    </Fragment>
  )
}

export default App
