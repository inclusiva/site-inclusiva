import Menu from '../../components/Menu/index';
import './index.css';
import Breadcrumb from '../../components/BreadCrumb/index';
import FAQ from '../../components/FAQ';
import Timeline from '../../components/Timeline';
import Requirements from '../../components/Requirements';
import ProcessInformation from '../../components/ProcessInformation';
import TechnicalInformation from '../../components/TechnicalInformation';
import Banner from "../../assets2/banner-encerramento.png";


const Home = () => {

  return (
    <>
      <Menu />
      <div className="content">
        <Breadcrumb />
        <img id='img-banner' src={Banner} alt="Banner da Aceleradora Inclusiva" />
        <div id="about">
          <h2 className='title-about'>Sobre o programa</h2>
          <p>
            A iniciativa é viabilizada por uma parceria entre a <strong>Thoughtworks</strong>, a <strong>Globo</strong>, a <strong>PUCRS</strong> e o <strong>Tecnopuc</strong>, e tem como objetivo principal <strong>ensinar</strong>, de forma <strong>inclusiva</strong>, os fundamentos de lógica de programação e tecnologias web.
            Também busca trazer para o dia-a-dia<strong> conceitos</strong> e <strong>temáticas sociais</strong>, de maneira interdisciplinar, além de oferecer um espaço
            seguro para o desenvolvimento de empatia ao abordar temas de <strong>acessibilidade</strong> <strong>justiça econômica e social</strong>.
          </p>
        </div>
        <ProcessInformation />
        <TechnicalInformation />
        <Requirements />
        <Timeline />
      </div>
      <div id="info">
        <p>Para mais informações acesse o <a href=" https://docs.google.com/document/d/1PxP5a5FdXkAFmaEa0su9YQjVk6CVqtEXtjO1h33VKh8/edit?usp=sharing" rel="noreferrer" target='_blank'>edital</a></p>
      </div>
      <FAQ />
      <div id="contact">
        <p>Caso tenha mais dúvidas, entre em contato: <a href="mailto:inclusiva.aceleradora@gmail.com" rel="noreferrer" target='_blank'>inclusiva.aceleradora@gmail.com</a></p>
      </div>
    </>
  );
}

export default Home;
