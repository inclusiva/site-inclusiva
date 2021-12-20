import { Link } from 'react-router-dom'
import './menu.styless.css'

const Menu = () =>{
  return(<>
    <ul className="navbar">
      <li>
        <Link className="link" to="/">Home</Link>
      </li>
      <li>
        <Link  className="link" to="/turmas">Turmas</Link>
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
    </ul>
    </>
  )
}

export default Menu