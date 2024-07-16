import { useNavigate } from 'react-router-dom';
import Footer from '../../componentes/Footer';
import styles from './NotFound.module.css';
import notFoundImg from './preview-45_1.png';
import Img404 from './preview-29_1.png';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <img className={styles.imgNotFound} src={notFoundImg} alt='Imagem Not Found' />
        <div className={styles.div}>
          <img className={styles.img404} src={Img404} alt='404' />
          <p className={styles.p}>Página não encontrada :C </p>
          <button className={styles.btn} onClick={() => navigate(-1)}>Voltar</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
