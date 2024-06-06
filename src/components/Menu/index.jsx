import { Link } from 'react-router-dom'
import './index.css'
import GloboLogo from '../../assets2/globo.com-logo.png';
import ThoughtWorksLogo from '../../assets2/thoughtworks-logo.png';
import TecnopucLogo from '../../assets2/tecnopuc-logo.webp';
import PUCRSLogo from '../../assets2/PUCRS-logo.webp';
import AceleradoraInclusivaLogo from '../../assets2/inclusiva-logo.png';

const Menu = () => {
  return (
    <ul className="navbar">
      <div className='logos-img'>
        <a href='/'>
          <img id='img-logo' src={AceleradoraInclusivaLogo} alt="Imagem da logo da Aceleradora Inclusiva" />
        </a>
        <a href="https://www.pucrs.br/tecnopuc/" target="_blank" rel="noreferrer">
          <img id='img-logo' className='img-logo' src={TecnopucLogo} alt="Imagem da logo do Tecnopuc" />
        </a>
        <a href="https://www.pucrs.br/" target="_blank" rel="noreferrer">
          <img id='img-logo' className='img-logo' src={PUCRSLogo} alt="Imagem da logo da PUCRS" />
        </a>
        <a href="https://www.thoughtworks.com/pt-br" target="_blank" rel="noreferrer">
          <img id='img-tw' src={ThoughtWorksLogo} alt="Imagem da logo da ThoughtWorks" />
        </a>
        <a href="https://www.globo.com/" target="_blank" rel="noreferrer">
          <img id='img-logo' src={GloboLogo} alt="Imagem da logo da Globo.com" />
        </a>
      </div>
      <div className="nav-links">
        <li>
          <Link className="link" to="/">Home</Link>
        </li>
        <li>
          <Link className="link" to="/turmas">Turmas</Link>
        </li>
        <li>
          <Link className="link" to="/galeria">Galeria</Link>
        </li>
        <li>
          <Link className="link" to="/equipe">Equipe</Link>
        </li>
        <li>
          <Link className="link" to="/documentacao">Documentação</Link>
        </li>
      </div>
    </ul>
  )
}

export default Menu
