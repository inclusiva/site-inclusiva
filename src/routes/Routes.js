import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home/index'
import Turmas from '../pages/Turmas/index'
import Galeria from '../pages/Galeria/index'
import Equipe from '../pages/Equipe/index'
import Documentacao from '../pages/Documentacao/index'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/turmas" component={Turmas} />
        <Route path="/galeria" component={Galeria} />
        <Route path="/equipe" component={Equipe} />
        <Route path="/documentacao" component={Documentacao} />
      </Switch>
    </BrowserRouter>
  )
}
export default Routes