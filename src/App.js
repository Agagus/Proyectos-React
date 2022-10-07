import { useState } from 'react';
import './App.css';
import Boton from './components/Button.jsx'
import style from './styles/App.module.css'


function App() {

  const [contador, setContador] = useState(0);

  const calcular = (operacion) => { 
    setContador(operacion === 'Clic' ? contador + 1 : 0)
  }


  return (
    <div className={style.contenedorPrin}>
      <div>
        <h1 className={style.titulo}>
          CONTADOR DE CLICS
        </h1>
      </div>
      <div className={style.bloque}>
        <div className = {style.conteinerContador}>
          <h5>
            {contador}
          </h5> 
        </div>
        <Boton 
          operacion={'Clic'}
          calcular={calcular}
        /> 
        <Boton 
          operacion={'Reiniciar'} 
          calcular={calcular}
        />
      </div>
    </div>
  );
}

export default App;
