import Footer from './components/Footer';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Transactions from './components/Transactions';
import './App.css';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <div className='header-bg'>
      <Navbar/>
      <Welcome/>
      </div>
      <Services/>
      <Transactions/>
      <Footer/>
    </div>
  );
}

export default App;
