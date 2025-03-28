import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <div className="card-container">
          <Card/>
          <Card/>
          <Card/>
      </div>
    </div>
  );
}

export default App;
