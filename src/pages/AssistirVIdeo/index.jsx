import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './AssistirVideo.module.css';

const AssistirVideo = () => {
  const { id } = useParams()
  const [assistirVideo, setAssistirVideo] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:8080/videos/${id}`)
      .then(resposta => resposta.json())
      .then(dados => {
        setAssistirVideo(dados);
      })
      .catch(error => console.error('Erro ao buscar vídeo:', error));
  }, [id]);

  return (
    <>
      {assistirVideo ? (
        <section className={styles.container}>
          <h1>{assistirVideo.titulo}</h1>
          <div className={styles.iframeContainer}>
            <iframe
              width="100%"
              height="100%"
              src={assistirVideo.link}
              title={assistirVideo.titulo}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      ) : (
        <p>Estamos carregando o seu vídeo c:</p> 
      )}
    </>
  );
}

export default AssistirVideo;