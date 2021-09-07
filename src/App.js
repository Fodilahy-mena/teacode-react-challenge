import './App.css';
import Header from './components/Header';
import ConatctList from './components/ContactList';
function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <ConatctList/>
      </main>
    </div>
  );
}

export default App;
