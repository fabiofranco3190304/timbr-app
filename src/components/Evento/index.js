import React from 'react';
import './style.css'


const Evento = (props) => {
    return (
        <article className="evento">
            <h2>{props.name}</h2>
            <div className="evento-info">
                <p>Dia: <span>{props.dia}</span></p>
                <p>Horário: <span>{props.horario}</span></p>
            </div>
        </article>
    )
}

export default Evento;
