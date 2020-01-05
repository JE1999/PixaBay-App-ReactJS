import React, { useState } from 'react'

//Error
import Error from '../Error/Error'

function Buscador({setTextBuscadorHeader, setPaginaActual}){

    const [ textBuscador, setTextBuscador ] = useState('')

    const [ error, setError ] = useState(false)

    const handleSubmit = e =>{
        e.preventDefault()

        //Validando
        if(textBuscador === ''){
            setError(true)
            return
        }

        setError(false)

        setTextBuscadorHeader(textBuscador)
        setPaginaActual(1)

    }

    //Mostrando el error
    const required = (error) ? <Error/> : null

    return(
        <div>
            <form
                onSubmit={handleSubmit}
            >
                {required}
                <div className="row d-flex justify-content-around">
                    <div className="col-sm-12 col-md-8 p-0 m-1 shadow">
                        <input
                            style={{borderRadius: "0"}}
                            type="text" 
                            className="form-control form-control-lg shadow" 
                            placeholder="Buscar imagen..."
                            onChange={e => setTextBuscador(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-sm-12 col-md-3 p-0 m-1 shadow">
                        <button
                            style={{borderRadius: "0"}}
                            type="submit" 
                            className="btn btn-light btn-lg btn-block rounded-none shadow"
                            uk-tooltip="title: 👍; pos: bottom"
                            >Buscar <span uk-icon="search"></span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Buscador