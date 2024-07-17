import { useEffect, useState } from "react";
import CampoTexto from "../CampoTexto";
import Botao from "../Botao";
import TextArea from "../TextArea";
import ListaSuspensaArea from "../ListaSuspensaArea";
import styles from "./ModalEditarVideo.module.css";
import botaoFechar from "./iconeFechar.png";

const ModalEditarVideo = ({ video, aoFechar, aoAtualizar }) => {
  const [tituloPut, setTituloPut] = useState("");
  const [areaPut, setAreaPut] = useState("");
  const [descricaoPut, setDescricaoPut] = useState("");
  const [imagemPut, setImagemPut] = useState("");
  const [videoPut, setVideoPut] = useState("");

  useEffect(() => {
    if (video) {
      setTituloPut(video.titulo);
      setAreaPut(video.area);
      setDescricaoPut(video.descricao);
      setImagemPut(video.imagem);
      setVideoPut(video.link);
    }
  }, [video]);

  const categoria = ["frontend", "backend", "mobile"];

  const styleLabel = {
    color: "#fff",
    fontSize: "25px",
  };

  const styleColorCampo = {
    border: "1px solid #fff",
    backgroundColor: "#262626",
  };

  const styleWidthFormDescricao = {
    maxWidth: "674px",
  };

  const styleCorBotao = {
    border: "none",
    background: "#262626",
    fontSize: "30px",
  };

  const styleCorBotaoHover = {
    color: "#2271D1",
    border: "none",
    fontSize: "30px",
  };

  const estiloCorCampoFormDescricao = {
    ...styleColorCampo,
    ...styleWidthFormDescricao,
  };

  function convertToEmbedUrl(url) {
    if (url.includes("youtube.com/watch?v=")) {
      const videoId = url.split("v=")[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url; 
  }

  async function atualizarVideoPut(id, area, imagem, titulo, descricao, link) {
    try {
      const videoPutApi = await fetch(`http://localhost:8080/videos/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          area: area,
          imagem: imagem,
          titulo: titulo,
          descricao: descricao,
          link: link,
        }),
      });

      if (!videoPutApi.ok) {
        throw new Error("Não foi possível atualizar o card vídeo");
      }

      const videoPutApiConvertido = await videoPutApi.json();
      return videoPutApiConvertido;
    } catch (error) {
      console.error(error);
      alert("Erro ao salvar o vídeo");
    }
  }

  const aoSalvar = async (evento) => {
    evento.preventDefault();
    const videoEmbedUrl = convertToEmbedUrl(videoPut);
    const videoAtualizado = await atualizarVideoPut(
      video.id,
      areaPut,
      imagemPut,
      tituloPut,
      descricaoPut,
      videoEmbedUrl
    );
    if (videoAtualizado) {
      aoAtualizar(videoAtualizado);
      alert("Vídeo salvo com sucesso");
    }
  };

  const aoLimpar = () => {
    setAreaPut("");
    setImagemPut("");
    setTituloPut("");
    setDescricaoPut("");
    setVideoPut("");
  };

  return (
    <>
      {video && (
        <>
          <div className={styles.overlay}></div>
          <dialog open={!!video} onClose={aoFechar} className={styles.dialog}>
            <h1>Editar Card:</h1>
            <form onSubmit={aoSalvar}>
              <CampoTexto
                label="Título"
                placeholder="Digite um título"
                valor={tituloPut}
                obrigatorio={true}
                aoAlterado={(valor) => setTituloPut(valor)}
                estiloCorCampo={styleColorCampo}
                estiloCorLabel={styleLabel}
              />
              <ListaSuspensaArea
                label="Categoria"
                itens={categoria}
                valor={areaPut}
                obrigatorio={true}
                aoAlterado={(valor) => setAreaPut(valor)}
                estiloCorCampo={styleColorCampo}
                estiloCorLabel={styleLabel}
              />
              <CampoTexto
                label="Imagem"
                placeholder="Digite o link da imagem"
                valor={imagemPut}
                obrigatorio={true}
                aoAlterado={(valor) => setImagemPut(valor)}
                estiloCorCampo={styleColorCampo}
                estiloCorLabel={styleLabel}
              />
              <CampoTexto
                label="Vídeo"
                placeholder="Digite o link do vídeo"
                valor={videoPut}
                obrigatorio={true}
                aoAlterado={(valor) => setVideoPut(valor)}
                onBlur={() => setVideoPut(convertToEmbedUrl(videoPut))}
                estiloCorCampo={styleColorCampo}
                estiloCorLabel={styleLabel}
              />
              <TextArea
                label="Descrição"
                placeholder="Sobre o que é esse vídeo?"
                valor={descricaoPut}
                obrigatorio={true}
                aoAlterado={(valor) => setDescricaoPut(valor)}
                estiloCorCampo={estiloCorCampoFormDescricao}
                estiloCorLabel={styleLabel}
              />
              <div>
                <Botao
                  styleCorBotao={styleCorBotao}
                  estiloCorBotaoHover={styleCorBotaoHover}
                  type="submit"
                  nome="Guardar"
                />
                <Botao
                  aoResetar={aoLimpar}
                  styleCorBotao={styleCorBotao}
                  estiloCorBotaoHover={styleCorBotaoHover}
                  type="reset"
                  nome="Limpar"
                />
              </div>
            </form>
            <form className={styles.dialogBtn} method="dialog">
              <button onClick={aoFechar}>
                <img src={botaoFechar} alt="Botão fechar do modal" />
              </button>
            </form>
          </dialog>
        </>
      )}
    </>
  );
};

export default ModalEditarVideo;
