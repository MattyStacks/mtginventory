import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Inventory from './components/inventory/Inventory';
import Footer from './components/footer/Footer';


function App() {
  return (
    
    <div>
          <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
    <div className="App">

      <Header />
      <Inventory />
      {/* <Footer /> */}

    </div>
    </div>
  );
}

export default App;
