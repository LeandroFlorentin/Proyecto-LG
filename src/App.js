import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import lg from './img/cosito/icon_lg.png'
import Footer from './components/Footer/footer.js'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js'
import { HashRouter, Switch, Route } from 'react-router-dom';
import Inicio from './components/Inicio/Inicio.js'
import Soporte from './components/Soporte/Soporte.js'
import IniciarSesion from './components/IniciarSesion/IniciarSesion';
function App() {
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
          <link rel='icon' href={lg} />
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <Inicio />
            </Route>
            <Route exact path='/tienda'>
              <ItemListContainer />
            </Route>
            <Route exact path='/item/:productId'>
              <ItemDetailContainer />
            </Route>
            <Route exact path='/soporte'>
              <Soporte />
            </Route>
            <Route exact path='/iniciar'>
              <IniciarSesion />
            </Route>
          </Switch>
        </header>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
