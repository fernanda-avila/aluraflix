import { useEffect, useState } from "react"
import styles from "./novoVideo.module.css"
import CampoTexto from "../../componentes/CampoTexto"
import TextArea from "../../componentes/TextArea"
import Botao from "../../componentes/Botao"
import ListaSuspensaArea from "../../componentes/ListaSuspensaArea"
import ImgFoguete from './preview-47.png'
import ImgPlaneta from './preview-35.png'

const NovoVideo = () => {
  const [tituloPost, setTituloPost] = useState()
  const [areaPost, setAreaPost] = useState()
  const [imagemPost, setImagemPost] = useState()
  const [videoPost, setVideoPost] = useState()
  const [descricaoPost, setDescricaoPost] = useState()

  async function novoVideoPost(area, imagem, titulo, descricao, link) {
    try {
      const videoPostApi = await fetch('http://localhost:8080/videos', {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          area: area,
          imagem: imagem,
          titulo: titulo,
          descricao: descricao,
          link: link
        })

      })

      if (!videoPostApi.ok) {
        throw new Error('Não foi possível adicionar novo vídeo')
      }

      const videoPostApiConvertido = await videoPostApi.json()
      return videoPostApiConvertido
    } catch (error) {
      console.log(error);
    }
  }

  const aoGuardar = async (evento) => {
    evento.preventDefault()
    await novoVideoPost(areaPost, imagemPost, tituloPost, descricaoPost, videoPost)
    setAreaPost('')
    setImagemPost('')
    setTituloPost('')
    setDescricaoPost('')
    setVideoPost('')
    alert("Video salvo com sucesso")
  }

  const categoria = [
    "frontend",
    "backend",
    "mobile"
  ]

  return (
    <div className={styles.gContainer}>
      <aside className={styles.ImgAside}>
        <img src={ImgFoguete} alt="Imagem de um foguete decolando" />
        <img src={ImgPlaneta} alt="Imagem de um planeta" />
      </aside>
      <section className={styles.gContainerTitulo}>
        
        <h1>NOVO VÍDEO</h1>
        <p>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO</p>
      </section>
      <section className={styles.gContainerForm}>
        <h2>Criar Card</h2>
        <form onSubmit={aoGuardar}>
          <div>
            <CampoTexto
              label="Título"
              placeholder="Digite um título"
              valor={tituloPost}
              obrigatorio={true}
              aoAlterado={valor => setTituloPost(valor)} 
            />

            <ListaSuspensaArea
              label="Categoria"
              itens={categoria}
              valor={areaPost}
              obrigatorio={true}
              aoAlterado={valor => setAreaPost(valor)}
            />
          </div>
          <div>
            <CampoTexto
              label="Imagem"
              placeholder="Link da imagem"
              valor={imagemPost}
              obrigatorio={true}
              aoAlterado={valor => setImagemPost(valor)} 
            />

            <CampoTexto
              label="Vídeo"
              placeholder="Digite o link do vídeo"
              valor={videoPost}
              obrigatorio={true}
              aoAlterado={valor => setVideoPost(valor)} 
            />
          </div>
          <TextArea
            label="Descrição"
            placeholder="Adicione uma boa descrição para o seu vídeo"
            valor={descricaoPost}
            obrigatorio={true}
            aoAlterado={valor => setDescricaoPost(valor)}
          />
          <div>
            <Botao type="submit" nome="guardar"></Botao>
            <Botao type="reset" nome="limpar"></Botao>
          </div>
        </form>
      </section>
    </div>
  )
}

export default NovoVideo