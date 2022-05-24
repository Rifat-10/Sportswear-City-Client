import './App.css';
import { Route, Routes } from "react-router-dom";
import Navigation from './Component/NavigationBar/Navigation';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Navigation></Navigation>
     <Routes>
       <Route path='/' element={<Home />}></Route>
     </Routes>
     <br /> <br />
      <Footer></Footer>
    </div>
  );
}

export default App;
