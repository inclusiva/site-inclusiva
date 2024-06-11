import Menu from '../../components/Menu/index'
import Link from '@material-ui/core/Link';
import ImageLivro from '../../assets2/livro.jpeg'
import './index.css'

import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
    <>
        <div className="video-responsive">
            <iframe width="360"
                height="115"
                src={`https://www.youtube.com/embed/${embedId}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>
        <div className="video-responsive">
            <iframe width="560"
                height="315"
                src="https://www.youtube.com/embed/gQ_MP0b0UIM"
                title="YouTube video player"
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>
        <div className="video-responsive">
            <iframe width="560"
                height="315"
                src="https://www.youtube.com/embed/B4kCenvqD6w"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>
    </>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

const Body = () => {
    return (
        <div className='conteudo-geral'>
            <div className="cards-livros">
                <h2 className="titulo-livro">Livro</h2>
                <img src={ImageLivro} className="img-livro" alt="imagem do livro" />
                <div className="bloco-conteudo">
                    <p className="paragrafo-documentacao">
                        Aceleradora Ágil e Inclusiva, unindo conhecimento, projetos e pessoas para construir um futuro tecnológico justo.
                        Você pode fazer o download através do <a href="https://www.amazon.com.br/Aceleradora-%C3%A1gil-inclusiva-conhecimento-tecnol%C3%B3gico-ebook/dp/B08G386YC7" rel="noreferrer" target="_blank">link.</a></p>
                </div>
            </div>
            <h2 className="titulo-livro">Dissertação</h2>
            <div className='bloco-conteudo'>
                <p className='paragrafo-dissertacao'>Temos o prazer de destacar a dissertação intitulada "Gestão Social: Conformação e Impactos de um Programa de Inclusão Social na Área da Tecnologia", escrita por Ana Paula Ribeiro de Souza, nossa parceira no programa.
                    Você pode acessar a dissertação completa através do  <a href="https://tede2.pucrs.br/tede2/handle/tede/10809" rel="noreferrer" target='_blank'>link</a>.
                </p>
            </div>
            <h2 className='cards-videos'>Vídeos</h2>
            <div className="container-videos">
                <YoutubeEmbed embedId="YIjHgtnkf9M" />
            </div>
        </div>
    )
}

const Documentacao = () => {
    return (
        <div>
            <Menu />
            <Body />
        </div>
    )
}

export default Documentacao
