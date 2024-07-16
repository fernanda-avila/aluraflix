import styles from "./ListaSuspensaArea.module.css"

const ListaSuspensaArea = (props) => {
  return(
    <div className={styles.gContainer}>
      <label style={props.estiloCorLabel}>
        {props.label}
      </label>
      <select width={props.widthLSArea} required={props.obrigatorio} value={props.valor} onChange={evento => props.aoAlterado(evento.target.value)} style={props.estiloCorCampo}>
      <option value="" className={styles.placeholderOption}>Selecione uma categoria</option>
        {props.itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}

export default ListaSuspensaArea