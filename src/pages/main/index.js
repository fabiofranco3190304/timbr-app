import React, { useState, useEffect } from 'react';
import Evento from '../../components/Evento';
import { Link } from 'react-router-dom';
import './style.css';

const Main = () => {

    const key = process.env.REACT_APP_API_KEY;

    const [eventos, setPais] = useState([]);

    useEffect(() => {

        const fetchPais = async () => {
            const pais = await fetch(`http://app.ticketmaster.com/discovery/v2/events.json?countryCode=PT&apikey=${key}`)
            const response = await pais.json();
            console.log(response);
            const responseCountry = response._embedded['events'];
            setPais(responseCountry);
        }
    
        fetchPais();
        

    }, [key]);


    

    return (
        <main >
            <div className="evento-data">
            <span>Eventos de Música em Portugal. Música perto de ti.</span>
            </div>

           
            {eventos.map((evento, index) => (
                <Link  key={index} to={`/eventos/${evento.id}`}>
                    <Evento  name={evento.name} dia={evento.dates.start.localDate} horario={evento.dates.start.localTime}/>
                </Link>
            ))}
            
        
        </main>
        
    )
}

export default Main;