import React, {useState, useEffect, Fragment} from 'react';
import Formulario from './components/Formulario';
function App() {
  const [artista, agregarArtista] = useState('');
  const [letra, agregarLetra] = useState([]);
  const [info, agregarInfo] = useState({});
  //Metodo para consultar la API
  const consultarAPILetra = busqueda=>{
    console.log(busqueda);
  }

  return (
    <Fragment>
      <Formulario consultarAPILetra={consultarAPILetra}/>
    </Fragment>
  );
}

export default App;
