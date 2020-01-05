import React from 'react'

const Imagenes = ({imagenes}) =>{

    const { largeImageURL, likes, tags, views } = imagenes

    return(
        <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
            <div className="card shadow">
                <a 
                    href={largeImageURL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    ><img src={largeImageURL} className="card-img-top" alt={tags}/>
                </a>
                <div className="card-body">
                    <p className="card-text">
                        Likes: <span className="text-muted">{likes}</span><br/>
                        Vistas: <span className="text-muted">{views}</span><br/>
                        Etiquetas: <span className="text-muted">{tags}</span>
                    </p>
                    <a 
                        href={largeImageURL} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="uk-button text-white btn-secondary shadow"
                        uk-tooltip="title: Ver imagen; pos: right"
                        ><span uk-icon="image"></span>
                    </a>
                </div>
            </div>
        </div>
    )

}

export default Imagenes