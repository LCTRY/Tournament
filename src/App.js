import Home from "./pages/Home"
import Standings from "./pages/Standings"
import Schedule from "./pages/Schedule"
import Auction from "./pages/Auction"
import Photos from "./pages/Photos"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import {Routes, Route} from "react-router-dom"

function App() {
  return (
      <div> 
        <Header/>
        <Nav/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/Standings" element={<Standings/>}/>
            <Route path="/Schedule" element={<Schedule/>}/>
            <Route path="/Auction" element={<Auction/>}/>
            <Route path="/Photos" element={<Photos/>}/>
          </Routes>
        <Footer/>
      </div>

      
  );
}

export default App;
