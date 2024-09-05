import React from "react";
import useFetch from "./hooks/useFetch";

const formFields = [
    {
      id: 'nome',
      label: 'Nome',
      type: 'text',
    },
    {
      id: 'email',
      label: 'Email',
      type: 'email',
    },
    {
      id: 'senha',
      label: 'Senha',
      type: 'password',
    },
    {
      id: 'cep',
      label: 'Cep',
      type: 'text',
    },
    {
      id: 'rua',
      label: 'Rua',
      type: 'text',
    },
    {
      id: 'numero',
      label: 'Numero',
      type: 'text',
    },
    {
      id: 'bairro',
      label: 'Bairro',
      type: 'text',
    },
    {
      id: 'cidade',
      label: 'Cidade',
      type: 'text',
    },
    {
      id: 'estado',
      label: 'Estado',
      type: 'text',
    },
];

function App() {

    const[form, setForm] = React.useState(
        formFields.reduce((accumulator, currentValue) => {
            return {...accumulator, [currentValue.id]: ''}
        }, {})
    );

    function handleSubmit(event) {
        event.preventDefault();
        useFetch(form);
    }

    function handleChange({target}) {
        const {id, value} = target;
        setForm({...form, [id]: value})
    }
    
    return (
        <form onSubmit={handleSubmit}>
           {formFields.map(({id, label, type}) => (
            <div key={id}>
                <label htmlFor={id}>{label}</label>
                <input type={type} id= {id} value={form[id]} onChange={handleChange}/>
            </div>
           ))} 

           <button>Send</button>
        </form>
    );
}

export default App;