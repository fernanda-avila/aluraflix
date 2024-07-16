import styles from "./Footer.module.css"
import logo from "./../Header/logo.png"
const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <img src={logo} alt="Logo da Aluraflix" />
      <p>Desafio ONE React feito por Fernanda Avila</p>
    </footer>
  )
}

export default Footer