import React from 'react'

function Informacion({info}){
    if(Object.keys(info).length === 0) return null;
    return(
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">Información artista</div>
            <div className="car-body">
                <img src={info.strArtistThumb} alt="logo artista"/>
                <p className="card-text">Género: {info.strGenre}</p>
                <h2 className="card-text text-center">Biografia</h2>
                <p className="card-text">{info.strBiographyES}</p>
                <p className="card-text">
                    <a href={`htttps://${info.strFacebook}`} target="_blank" rel="noopener noreffer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`htttps://${info.strTwitter}`} target="_blank" rel="noopener noreffer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`htttps://${info.strLastFMCHART}`} target="_blank" rel="noopener noreffer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Informacion;