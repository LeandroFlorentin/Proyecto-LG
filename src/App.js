import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import Count from './components/Count.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar titulo="hola">
          <div>Hola</div>
          <div>Hola hermano</div>
        </NavBar>
        <ItemListContainer greeting='Hola, bienvenido a mi proyecto.' />
        <Count />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
