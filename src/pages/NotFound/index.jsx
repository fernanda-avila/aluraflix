import Footer from '../../componentes/Footer'
import styles from './NotFound.module.css'
import notFoundImg from './preview-45_1.png'
import Img404 from './preview-29_1.png'


const NotFound = () => {
  return (
    <>
    <div className={styles.container}>
    <img className={styles.imgNotFound} src={notFoundImg} alt='Imagem Not Found'/>
    <div className={styles.div}>
    <img className={styles.img404} src={Img404} />
    <p className={styles.p}>Página não encontrada :C </p>
    </div>
    </div>
    <Footer />
    </>

  )
}

export default NotFound