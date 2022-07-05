import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeCoracaoBranco from '../../img/favorite-white.svg'

import iconeComentario from '../../img/comment_icon.svg'
// import { useState } from 'react'



const Post = (props) => {
  const [curtido, setCurtido] =useState (false);
  const [numeroCurtidas, setNumeroCurtidas] = useState (0);
  let [comentando, setComentando] =useState (false);
  let [numeroComentarios, setNumeroComentarios] = useState (0);
  let [comentarios, setComentarios] =useState ([]);

  const onClickCurtida = () => {
    if (curtido){
     setCurtido(!curtido)
	  setNumeroCurtidas(numeroCurtidas - 1)
      }
    else{
      setCurtido(!curtido)
      setNumeroCurtidas(numeroCurtidas + 1)
      }
    }
  ;

  const onClickComentario = () => {
    setComentando({comentando:!comentando
    }
      )
  };

  const enviarComentario = (propsComentario) => {
    const listaDeComentarios = [...comentarios, propsComentario]
    console.log (listaDeComentarios)
    setComentarios(
      comentarios= listaDeComentarios
    )
    setComentando(
       comentando = false
       )
       setNumeroComentarios(
        numeroComentarios = numeroComentarios + 1
       )
  }
  
  const iconeCurtida = curtido ? (iconeCoracaoPreto) : (iconeCoracaoBranco)
  const caixaDeComentario = comentando ? (
   <SecaoComentario enviarComentario={enviarComentario}/>
  ) : (
    comentarios.map(comentario => {
      return (
        <CommentContainer>
          <p>{comentario}</p>
        </CommentContainer>
      )
    })
  )
  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
           icone={iconeCurtida}
          onClickIcone={onClickCurtida}
           valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
           valorContador={numeroComentarios}
        />
      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  )
}

export default Post