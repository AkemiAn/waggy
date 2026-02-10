import './App.css';
import Footer from './components/footer/Footer';
import Gallery from './components/gallery/Gallery';
import Header from './components/Header';
import Home from './components/main/Home';
import Offer from './components/offer/Offer';
import Products from './components/products/Products';
import Nav from './components/nav/Nav';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
       
    <Header/>   
    <Nav/>
    {/* <Routes>
              <Route path="/basket" element={<Basket/> }/>
              
          
        </Routes>        */}
    <Home/>
    <Products />
    <Offer />
    <Gallery />
   <Footer/>
    </div>
  );
}

export default App;
