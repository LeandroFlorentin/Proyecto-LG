import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import Count from './components/Count/Count.js';
import lg from './img/cosito/icon_lg.png'
import Footer from './components/Footer/footer.js'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <link rel='icon' href={lg} />
        <NavBar />
        <ItemListContainer />
        <ItemDetailContainer />
      </header>
      <Footer />
    </div>
  );
}

export default App;
