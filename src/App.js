import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './res-body/Body';
import Nav from './resp-nav/Nav';
import Vehicles from './resp-nav/Vehicles';
import Purchase from './resp-nav/Purchase';
import Owners from './resp-nav/Owners';
import Explore from './resp-nav/Explore';
// import Offcanvas from './Offcanvas';
// import Carousel from './Carousel/Slider';
// import Content from './Content/Contnt';
// import Footer from './Footer/Footer';
// import Nav from './Navbar/Nav';

function App() {
  return (
    <>
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/vehicles' element={<Vehicles/>}/>
        <Route path='/purchase' element={<Purchase/>}/>
        <Route path='/owners' element={<Owners/>}/>
        <Route path='/explore' element={<Explore/>}/>
      </Routes>
    </BrowserRouter>
    <Body/>
    {/* <Offcanvas/> */}
    </>
  );
}

export default App;
