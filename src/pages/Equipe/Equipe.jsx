import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ImageAbout from '../../assets2/about.svg'
import ImagemPuc from '../../assets2/pucrs-logo.png'
import ImagemTW from '../../assets2/thoughtworks-logo.png'
import ImagemSicredi from '../../assets2/sicredi-logo.png'
import ImagemGlobo from '../../assets2/globo.com-logo.png'

import './equipe.styless.css'

import equipe from '../../data/database'

const Equipe = () => {
 return (
      <>
        <Menu />
        <Header image={ImageAbout}> Equipe e Empresas </Header>
        <div className="div-equipe-empresas">
            <h2 className="h2-equipe">Equipe:</h2>
              <div className='container-equipe'>
                      {equipe.map((equipe)=>
                          <div className='card' key={equipe.id}>
                            <h2>{equipe.nome}</h2>
                              <p id="funcao-equipe">{equipe.funcao}</p> 
                              <p id="email-equipe">{equipe.email}</p> 
                              <img id='imagem-equipe' src={equipe.capa} alt={equipe.nome}/>
                      </div>
                      )}
              </div>
              <h2 className="h2-equipe">Empresas parceiras:</h2>
              <img id='imagem-logo' src={ImagemPuc} alt="Imagem da PUCRS"/>
              <img id='imagem-logo' src={ImagemTW} alt="Imagem da TW"/>
              <img id='imagem-logo' src={ImagemSicredi} alt="Imagem da Sicredi"/>
              <img id='imagem-logo' src={ImagemGlobo} alt="Imagem da Globo"/>
        </div>
        <Footer />
      </>
 )
}

export default Equipe 