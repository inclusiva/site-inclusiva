import './home.styless.css'
import Link from '@material-ui/core/Link';
import ImageLogo from '../../assets2/logo.jpeg'
import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'


const Home = () => {
 return (
   <>
       <Menu />
       <img src={ImageLogo} className="logo" alt="logo da Aceleradora Inclusiva, com uma onda crescente de pessoas emergindo de um computador" />
       <div className="container">
          <span className="message">Aceleradora Inclusiva</span>
       </div>

       <header className="Header">     
          <p>
            A <b>Aceleradora Inclusiva</b> é um projeto de educação inclusiva fruto de uma parceria entre 
            a <b><Link href="http://www.thoughtworks.com/pt" target="_blank">ThoughtWorks</Link></b>, 
            a <b><Link href="http://www.pucrs.br/" target="_blank">PUCRS</Link></b>, 
            e o <b><Link href="http://www.centrodeinovacao.org.br/" target="_blank">Centro de Inovação</Link></b>, 
            com o objetivo de facilitar o acesso de pessoas em 
            situação de vulnerabilidade socioeconômica à área de tecnologia através do ensino de <b>lógica de programação</b>
            e tecnologias para a construção de <b>páginas web</b>.
          </p>

          <p>
            Além de um empoderamento técnico, também desenvolvemos as <b>habilidades interpessoais</b> dos alunos, 
            trazendo para o dia-a-dia da classe atividades que envolvem trabalho em equipe, autonomia, 
            resolução de problemas e assuntos do pilar de <b>justiça econômica e social</b> da <b>ThoughtWorks</b>.
          </p>

          <p>
            Para construir um <b>futuro tecnológico</b> mais justo para e mudar a cara da área de tecnologia, 
            nós precisamos voltar nossos olhares para quem irá, de fato, <b>protagonizar</b> este futuro. 
          </p>

          <p>
            Nossa missão é <b>"melhorar a humanidade através do software e gerar um ecossistema 
            socialmente responsável e economicamente justo"</b> e, para isso, é necessário
            promover um empoderamento tecnologico par diminuir as distâncias que existem 
            entre quem vai produzir e quem vai consumir a tecnologia.
          </p>
    </header>
    <Footer />
  </>
 )
}

export default Home 