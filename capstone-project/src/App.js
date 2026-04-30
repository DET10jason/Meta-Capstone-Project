import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* This combined wrapper puts them on the same level */}
      <header className="top-bar">
        <Header />
        <Nav />
      </header>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
