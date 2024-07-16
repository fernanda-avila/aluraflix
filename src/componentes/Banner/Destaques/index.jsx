import { Link } from "react-router-dom"
import styles from "./Destaques.module.css"
import youtubeIcon from './youtube.png'


const Destaques = ({ video }) => {

  const container = {
    boxShadow: 'inset 5px 0px 29px 0px rgba(34, 113, 209, 0.7)',
    width: '100%',
    height: '532px',
    display: 'flex',
    justifyContent: 'space-around',
  }

  const imgContainer = {
    background: `url(${video.imagem})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-reapt',
    width: '600px',
    height: '60%',
    marginTop: '100px',
    marginRight: '100px',
    boxShadow: 'inset 5px 0px 29px 0px rgba(34, 113, 209, 0.7)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const sombraInternaContainer = (video) => {
    
    if(video.area === "backend") {
      return {
        boxShadow: 'inset 5px 0px 29px 0px #00C86F',
      }
    } else if (video.area === "mobile") {
      return {
        boxShadow: 'inset 5px 0px 29px 0px #FFBA05',
      }
    } else {
      return {}
    }
  }

  const estiloCombinadoImg = {
    ...imgContainer,
    ...sombraInternaContainer(video)
  }

  const estiloAreaDestaque = (video) => {
    const estilosComuns = {
      textAlign: "center",
      color: "#fff",
      textTransform: "uppercase",
      padding: "10px",
      borderRadius: "10px",
      width: "40%"
    }
    if (video.area === "frontend") {
      return {
        backgroundColor: "#6BD1FF",
        ...estilosComuns
    };
  } else if (video.area === "backend") {
    return {
      backgroundColor: "#00C86F",
      ...estilosComuns
    };
  } else if (video.area === "mobile") {
    return {
      backgroundColor: "#FFBA05",
      ...estilosComuns
    };
  } else {
    return {};
  }
};

const formatarArea = (area) => {
  if (area === "frontend") {
    return "front end";
  } else if (area === "backend") {
    return "back end";
  } else {
    return area;
  }
};

return (
  <div className={styles.sombra} style={container}>

    <div className={styles.infoContainer}>
      <h1 style={estiloAreaDestaque(video)}>{formatarArea(video.area)}</h1>
      <h1>{video.titulo}</h1>
      <p>{video.descricao}</p>
    </div>

    <Link style={{zIndex: 1}} to={`video/${video.id}`}>

      <div className={styles.sombraImgVideo} style={estiloCombinadoImg}>
        <img src={youtubeIcon} alt="Ícone do youbute" />
      </div>

    </Link>

  </div>
)
}

export default Destaques