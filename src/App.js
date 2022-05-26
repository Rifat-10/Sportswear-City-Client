import './App.css';
import { Route, Routes } from "react-router-dom";
import Navigation from './Component/NavigationBar/Navigation';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import Blog from './Component/Blog/Blog';
import SignUp from './Component/Sign-In-Up/SignUp/SignUp';
import SignIn from './Component/Sign-In-Up/SignIn/SignIn';

function App() {
  return (
    <div className="App">
     <Navigation></Navigation>
     <Routes>
       <Route path='/' element={<Home />}></Route>
       <Route path='blog' element={<Blog />}></Route>
       <Route path='login' element={<SignIn />}></Route>
       <Route path='signup' element={<SignUp />}></Route>

     </Routes>
    
     <br /> <br />
      <Footer></Footer>
    </div>
  );
}

export default App;
