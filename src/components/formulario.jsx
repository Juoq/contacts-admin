import React, {useRef} from 'react';


const Formulario = ({addcontactos}) => {
    const name = useRef('');
    const email = useRef('');

    function addContacto(e) {
    e.preventDefault();
    
    const nuevoContacto = {nombre: name.current.value , email: email.current.value , conectado: true}

    addcontactos(nuevoContacto);
    name.current.value = '';
    email.current.value = '';
    };

    return (
        <form onSubmit={addContacto} className="contact-component">
            <h2>Añadir Contacto: </h2>
            <input ref={name} name="name" placeholder="Nombre de contacto" className="form-control mb-2" />
            <input ref={email} name="email" type="email" placeholder="Email de contacto" />
            <button onClick={addContacto} type="submit" className="submit-button">
                Añadir contacto
            </button>
        </form>
    );
}

export default Formulario;
