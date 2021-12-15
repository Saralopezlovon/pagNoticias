import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom'; //Para utilizar rutas
import {userContext} from './context/userContext'; //Para utilizar context

function App() {
  return (
    <div className="App">
    <BrowserRouter>

      <userContext.Provider>
        <Header/>
        <Main/>
      </userContext.Provider>      

    </BrowserRouter>
  
    <Footer/>
  </div>
  );
}

export default App;
