import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-body">
        <Sidebar />
      </div>
      <h1>Heya!</h1>
    </div>
  );
}

export default App;
