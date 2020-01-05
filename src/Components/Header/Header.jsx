import React, {useState} from 'react'

//Logo
import Logo from '../../Images/logo.png'

//Components
import Buscador from '../Buscador/Buscador'

function Header({setTextBuscadorApp, setPaginaActual}){

    const [ textBuscadorHeader, setTextBuscadorHeader ] = useState('')

    setTextBuscadorApp(textBuscadorHeader)

    return(
        <div>
            <div className="col-12 p-0 je-img">
                <div className="je-gradient">
                    <div className="container">
                        <img className="img-fluid mt-3" src={Logo} width="50"  alt="Logo" />
                        <h1 className="text-white je-line-bottom">PixaBay JE</h1>
                        <p className="text-white">
                            Buscando tu imagen perfecta?<br/>
                            aqui la encontraras!
                        </p>
                        <Buscador
                            setTextBuscadorHeader={setTextBuscadorHeader}
                            setPaginaActual={setPaginaActual}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header