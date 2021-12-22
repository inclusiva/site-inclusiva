import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Link from '@material-ui/core/Link';
import ImageLivro from '../../assets2/livro.jpeg'
import ImageIlustra from '../../assets2/ilustra.svg'
import './documentacao.styless.css'

import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
    <>
        <div className="video-responsive">
            <iframe width="360" 
                height="115" 
                src= {`https://www.youtube.com/embed/YIjHgtnkf9M/${embedId}`}
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
          <>
            <div className="container-documentacao">
                <h2 className="cards-artigos">Artigos:</h2>
                    <ul className="lista">
                        <li className="linha"> MIRANDA, M. B.; WISNIEWSKI, A. ; MENEZES, A. ; PRIKLADNICKI, R. . <b>Teaching Software Engineering Remotely to Teenagers in Social Vulnerability Conditions during the Coronavirus Pandemic: Challenges and Lessons Learned.</b> In: XXIV - CIbSE - Iberoamerican Conference on Software Engineering, 2021, San Jose, Costa Rica. XXIV - CIbSE - Iberoamerican Conference on Software Engineering, 2021.</li>
                        <li className="linha">Caio Steglich, Anielle Lisboa, Rafael Prikladnicki, Sabrina Marczak, Michael da Costa Móra, Alejandro Olchik, Nelice Heck, Yasser Rachid, and Guilherme Ghidorsi. 2020. <b>Agile Accelerator Program: From Industry-Academia Collaboration to Effective Agile Training</b>. In Proceedings of the 34th Brazilian Symposium on Software Engineering (SBES '20). Association for Computing Machinery, New York, NY, USA, 21–30. 
                            <Link href="https://www.amazon.com.br/Aceleradora-%C3%A1gil-inclusiva-conhecimento-tecnol%C3%B3gico-ebook/dp/B08G386YC7" target="_blank">DOI:https://doi.org/10.1145/3422392.3422485</Link></li>
                    </ul>   
            </div>
            <div className="cards-livros">
                    <img src={ImageLivro} className="livro" alt="imagem do livro" />
                    <div className="bloco-livro">
                        <h3 className="h3-documentacao">Livro:</h3>
                        <p className="paragrafo-documentacao">Aceleradora Ágil e Inclusiva, unindo conhecimento, projetos e pessoas para construir um futuro tecnológico justo. <Link href="https://www.pucrs.br/tecnopuc/wp-content/uploads/sites/110/2019/12/LivroThoughtWorksFinalMontado.pdf" target="_blank">Download</Link></p>
                    </div>
            </div> 
            <h2 className='cards-videos'>Vídeos:</h2>
            <div className="container-videos"> 
                <YoutubeEmbed embedId="YIjHgtnkf9M" />
            </div>
          </>
      )
  }


const Documentacao = () => {

    return(
        <>
            <Menu />
            <Header image={ImageIlustra}> Publicações e Apresentações</Header>
            <Body />
            <Footer />
        </>
    )
}
  

export default Documentacao







 
