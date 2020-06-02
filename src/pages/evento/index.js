import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Evento = ( {match} ) => {

    const id = match.params.id;
    console.log(id);

    const key = process.env.REACT_APP_API_KEY;

    const [evento, setPais] = useState([]);

    useEffect(() => {

        const fetchPais = async () => {
            const pais = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=${key}`)
            const response = await pais.json();
            console.log(response);

            setPais(response);
            
        }
        fetchPais();

        
    }, [id, key])

    

    return (
        <main id="main-evento">
        <div className="evento-data">
        <span>Eventos de Música em Portugal. Música perto de ti.</span>
            </div>
        <article className="evento detalhe">
            <h2>{evento.name}</h2>
            <div className="detalhe-info">
                <p>Dia: <span>{ evento.dates ? evento.dates.start.localDate : null}</span></p>
                <p>Horário: <span>{ evento.dates ? evento.dates.start.localTime : null}</span></p>
                <br></br>
                <p>Local: <span>{ evento._embedded ? evento._embedded.venues["0"].name : null}</span></p>
                <p>Cidade: <span>{ evento._embedded ? evento._embedded.venues["0"].city.name : null}</span></p>
                <br></br>
                <p>Entidade: <span>{ evento.promoter ? evento.promoter.name : null}</span></p>
                <p>Status: <span>{ evento.dates ? evento.dates.status.code : null}</span></p>
            </div>
            <br></br>
        </article>

            <Link to="/">
                <div className="btn-home">
                    Todos os Eventos
                </div>
            </Link>
       

        </main>
    )
}

export default Evento;