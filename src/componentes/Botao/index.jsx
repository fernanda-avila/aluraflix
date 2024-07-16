import React, { useState } from 'react';
import styles from "./Botao.module.css"

const Botao = (props) => {

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const estiloHober = isHovered ? props.estiloCorBotaoHover : props.styleCorBotao;

  return(
    <button className={styles.button} type={props.type} style={estiloHober} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={props.aoResetar}>
      {props.nome}
    </button>
  )
}

export default Botao