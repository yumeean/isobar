import logo from './logo.svg';
import './App.css';
import Isobar from './Isobar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header><div style={{width: '24px', height: '800px'}}>    
      <Isobar lowLabel="Low" highLabel="High" titleLabel="Pressure" colorTable={this.colorTable}    />
    </div>
    </div>
  );
}

export default App;
