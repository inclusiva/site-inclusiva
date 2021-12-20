import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Turmas from '../pages/Turmas/Turmas'
import Galeria from '../pages/Galeria/Galeria'
import Equipe from '../pages/Equipe/Equipe'
import Documentacao from '../pages/Documentacao/Documentacao'

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>                
        <Route path="/turmas" component={Turmas}/> 
        <Route path="/galeria" component={Galeria}/> 
        <Route path="/equipe" component={Equipe}/>  
        <Route path="/documentacao" component={Documentacao}/>        
      </Switch>  
    </BrowserRouter>
  )
}
export default Routes