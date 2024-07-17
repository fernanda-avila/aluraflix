import styles from './CardVideo.module.css';
import excluirBtn from './excluir.png';
import editarBtn from './editar.png';
import { Link } from 'react-router-dom';

const CardVideo = ({ video, aoDeletar, aoVideoSelecionado, videoBorderColor, btnColor }) => {
  
  const excluirVideo = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/videos/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Erro ao excluir o vídeo');
      }

      aoDeletar(id);
    } catch (error) {
      alert('Erro ao excluir o vídeo');
    }
  };

  const rolarPraCimaESelecionarVideo = (video) => {
    aoVideoSelecionado(video);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.gcontainer}>
      <Link to={`video/${video.id}`}>
        <div className={styles.imgContainer} style={{ borderColor: videoBorderColor, boxShadow: `0 0 13px ${videoBorderColor}` }}>
          <img src={video.imagem} alt={video.area} />
        </div>
      </Link>
      <div className={styles.btnContainer} >
        <div className={styles.btn} onClick={() => excluirVideo(video.id)}>
          <img src={excluirBtn} alt='Botão de excluir' />EXCLUIR
        </div>
        <div className={styles.btn} onClick={() => rolarPraCimaESelecionarVideo(video)}>
          <img src={editarBtn} alt='Botão de editar' />EDITAR
        </div>
      </div>
    </div>
  );
};

export default CardVideo;
