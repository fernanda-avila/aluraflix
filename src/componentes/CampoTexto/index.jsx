import styles from './CampoTexto.module.css';

const CampoTexto = (props) => {
  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className={styles.gContainer} style={props.withCampoTexto}>
      <label style={props.estiloCorLabel}>{props.label}</label>
      <input
        type={props.type || "text"}
        placeholder={props.placeholder}
        required={props.obrigatorio}
        value={props.valor}
        onChange={aoDigitado}
        style={props.estiloCorCampo}
        onBlur={props.onBlur} // Adiciona onBlur se existir na prop
      />
    </div>
  );
};

export default CampoTexto;
