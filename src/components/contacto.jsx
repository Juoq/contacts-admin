import React from 'react';

const ComponenteContacto = ({contacto , changeState , remove}) => {
    return (
        <div className='componente-contacto'>
            <h1>{contacto.nombre}</h1>
            <p>{contacto.email}</p>
            <button
                style={{ backgroundColor: contacto.estado ? 'green' : 'red' }}
                className="state-button"
                onClick={() => {
                    changeState(contacto);
                }}>
                {contacto.estado ? 'Conectado' : 'Desconectado'}
            </button>
            <button className="remove-button" onClick={() => remove(contacto)}>
                Borrar
            </button>
        </div>
    );
}

export default ComponenteContacto;
