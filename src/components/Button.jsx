import React from 'react';
import style from '../styles/Button.module.css'

function Boton ( {operacion, calcular} ){
    return (
        <div>
            <button 
                className={style.boton}
                onClick={() => calcular(operacion)}> {operacion}
            </button>
        </div>
    )
} 

export default Boton;