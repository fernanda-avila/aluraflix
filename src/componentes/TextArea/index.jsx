import styles from "./TextArea.module.css"

const TextArea = (props) => {
  return(
    <div className={styles.gContainer}>
      <label style={props.estiloCorLabel}>
        {props.label}
      </label>
      <textarea rows="5" value={props.valor} required={props.obrigatorio} placeholder={props.placeholder} onChange={evento => props.aoAlterado(evento.target.value)} style={props.estiloCorCampoFormDescricao}>

      </textarea>
    </div>
  )
}

export default TextArea