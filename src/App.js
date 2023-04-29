import logo from './logo.svg';
import './App.css';
import { PrimerComponente } from './components/primerComponente';
import { SegundoComponente } from './components/segundoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Esto es un repaso de React</p>
        <PrimerComponente />
        <hr />
        <SegundoComponente />
      </header>
    </div>
  );
}

export default App;
