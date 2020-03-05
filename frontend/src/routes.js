import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"

import Home from "./pages/Home"
import CadastroAgenda from "./pages/CadastroAgenda"

export default function Routes() {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cadastro" component={CadastroAgenda} />
      </Switch>
    </BrowserRouter>
  )
}
