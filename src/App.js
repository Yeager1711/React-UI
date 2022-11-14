
import CtrlDowload from './components/ControlDowload/CtrlDowload';
import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import SearchMusic from './components/SearchMusic/SearchMusic';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Feature />
      <SearchMusic />
      <CtrlDowload />
      <Footer />
    </div>
  );
}

export default App;
