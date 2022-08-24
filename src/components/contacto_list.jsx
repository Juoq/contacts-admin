import React, {useState} from 'react';
import ComponenteContacto from './contacto';
import Formulario from './formulario';


const ContactoList = () => {

    const defaultContact = (
        {nombre: "Juan Garcia", email: "example@example.com", conectado: false},
        {nombre: "Jose Perez", email: "perez@example.com", conectado: false},
        {nombre: "Antonio Martinez", email: "maartinez@example.com", conectado: false}
        );
    
    const [nuevoContacto, setNuevoContacto] = useState(defaultContact);

    function changeState(contacto) {
        const index = nuevoContacto.indexOf(contacto);
        const tempContacto = [...nuevoContacto];
        
        tempContacto[index].estado = !tempContacto[index].estado;
        setNuevoContacto(tempContacto);
    };

    function eliminarContacto(contacto) {
        const index = nuevoContacto.indexOf(contacto);
        const tempContacto = [...nuevoContacto];

        tempContacto.splice(index, 1);
        setNuevoContacto(tempContacto);
    }

    function addContacto(contacto) {
        const tempContacto = [...contacto];
        tempContacto.push(contacto);
        setNuevoContacto(tempContacto)
    }

    return (
        <div>
            <h1>Contactos</h1>

            <div className="card-container">
                {nuevoContacto.map((contacto, index) => {
                    return (
                        <ComponenteContacto key={index} contacto={contacto} changeState={changeState} remove={eliminarContacto} />);
                    })}
            </div>
            <Formulario></Formulario>
        </div>
    );
};

export default ContactoList;
