import { useEffect, useState } from "react"
import CampoTexto from "../CampoTexto"
import FormBotao from "../Botao"
import FormDescricao from "../TextArea"
import ListaSuspensaArea from "../ListaSuspensaArea"
import styles from "./ModalEditarVideo.module.css"
import botaoFechar from "./iconeFechar.png"
import TextArea from "../TextArea"
import Botao from "../Botao"

const ModalEditarVideo = ({ video, aoFechar, aoAtualizar }) => {

  const [tituloPut, setTituloPut] = useState("")
  const [areaPut, setAreaPut] = useState("")
  const [descricaoPut, setDescricaoPut] = useState("")
  const [imagemPut, setImagemPut] = useState("")
  const [videoPut, setVideoPut] = useState("")

  useEffect(() => {
    if (video) {
      setTituloPut(video.titulo);
      setAreaPut(video.area);
      setDescricaoPut(video.descricao);
      setImagemPut(video.imagem);
      setVideoPut(video.link);
    }
  }, [video]);

  const categoria = [
    "frontend",
    "backend",
    "mobile"
  ]

  const styleLabel = {
    "color": "#fff",
    "fontSize": "25px"
  }

  const styleColorCampo = {
    "border": "3px solid #2271D1",
    "backgroundColor": "#262626"
  }

  const styleWidthFormDescricao = {
    "maxWidth": "674px",
  }

  const styleCorBotao = {
    "border": "none",
    "background": "#262626",
    "font-size": "30px",
  }

  const styleCorBotaoHover = {
    "color":"#2271D1",
    "border": "none",
    "font-size": "30px"
  }

  const estiloCorCampoFormDescricao = {
    ...styleColorCampo, ...styleWidthFormDescricao
  }

  async function atualizarVideoPut(id, area, imagem, titulo, descricao, link) {
    let videoPutApi
    videoPutApi = await fetch(`http://localhost:3000/videos/${id}`, {
      method: "PUT",
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
    if (!videoPutApi.ok) {
      throw new Error('Não foi possível atualizar o card vídeo')
    }

    const videoPutApiConvertido = await videoPutApi.json()
    return videoPutApiConvertido
  }

  const aoSalvar = async (evento) => {
    evento.preventDefault()
    const videoAtualizado = await atualizarVideoPut(video.id, areaPut, imagemPut, tituloPut, descricaoPut, videoPut)
    setAreaPut('')
    setImagemPut('')
    setTituloPut('')
    setDescricaoPut('')
    setVideoPut('')
    aoAtualizar(videoAtualizado)
    alert("Video salvo com sucesso")
  }

  const aoLimpar = () => {
    setAreaPut('')
    setImagemPut('')
    setTituloPut('')
    setDescricaoPut('')
    setVideoPut('')
  }

  return (
    <>
      {video && <> <div className={styles.overlay}></div>
        <dialog open={!!video} onClose={aoFechar} className={styles.dialog}>
          <h1>Editar Card:</h1>
          <form onSubmit={aoSalvar}>
            <CampoTexto
              label="Título"
              placeholder="Digite um título"
              valor={tituloPut}
              obrigatorio={true}
              aoAlterado={valor => setTituloPut(valor)}
              estiloCorCampo={styleColorCampo}
              estiloCorLabel={styleLabel}
            />

            <ListaSuspensaArea
              label="Categoria"
              itens={categoria}
              valor={areaPut}
              obrigatorio={true}
              aoAlterado={valor => setAreaPut(valor)}
              estiloCorCampo={styleColorCampo}
              estiloCorLabel={styleLabel}
            />
            <CampoTexto
              label="Imagem"
              placeholder="Digite o link da imagem"
              valor={imagemPut}
              obrigatorio={true}
              aoAlterado={valor => setImagemPut(valor)}
              estiloCorCampo={styleColorCampo}
              estiloCorLabel={styleLabel}
            />

            <CampoTexto
              label="Vídeo"
              placeholder="Digite o link do vídeo"
              valor={videoPut}
              obrigatorio={true}
              aoAlterado={valor => setVideoPut(valor)}
              estiloCorCampo={styleColorCampo}
              estiloCorLabel={styleLabel}
            />
            <TextArea
              label="Descrição"
              placeholder="Sobre o que é esse vídeo?"
              valor={descricaoPut}
              obrigatorio={true}
              aoAlterado={valor => setDescricaoPut(valor)}
              estiloCorCampoFormDescricao={estiloCorCampoFormDescricao}
              estiloCorLabel={styleLabel}
            />
            <div>
              <Botao styleCorBotao={styleCorBotao} estiloCorBotaoHover={styleCorBotaoHover} type="submit" nome="guardar"></Botao>
              <Botao aoResetar={aoLimpar} styleCorBotao={styleCorBotao} estiloCorBotaoHover={styleCorBotaoHover} type="reset" nome="limpar"></Botao>
            </div>
          </form>
          <form className={styles.dialogBtn} method="dialog">
            <button><img src={botaoFechar} alt="Botão fechar do modal" /></button>
          </form>
        </dialog>
      </>
      }
    </>
  )
}

export default ModalEditarVideo