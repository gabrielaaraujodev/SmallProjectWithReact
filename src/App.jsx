import React from "react"
import Button from "./components/Button"
import Produtos from "./components/Produtos";

function App() {
  const [dados, setDados] = React.useState(null);
  const [txtButton, setTxtButton] = React.useState(null);

  React.useEffect(() => {
    
      if (txtButton) {
        fetch('https://ranekapi.origamid.dev/json/api/produto/' + txtButton)
        .then(response => response.json())
        .then(data => setDados(data))     
      }

  }, [txtButton])


  React.useEffect(() => {
    const haveItemOnLocalStorage = localStorage.getItem('produto');

    if(haveItemOnLocalStorage)
      setTxtButton(haveItemOnLocalStorage.toLocaleLowerCase())

  }, [])

  function handleClick (event) {
    const textoButton = event.currentTarget.textContent;
    setTxtButton(textoButton);
  }

  if(dados) {
    localStorage.setItem('produto', dados.nome)
  }
  
  return (
    <div>
      <h1>Preferência: <span>{dados && dados.nome}</span></h1>

      <Button name={"notebook"}  onClick={handleClick}/>
      <Button name={"smartphone"} onClick={handleClick}/>
      {dados && <Produtos dispositivo={dados.nome} valor={dados.preco} />}
    </div>
  )
}

export default App
