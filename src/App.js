import './App.css';
import { Route, Routes } from "react-router-dom";
import Navigation from './Component/NavigationBar/Navigation';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import Blog from './Component/Blog/Blog';
import SignUp from './Component/Sign-In-Up/SignUp/SignUp';
import SignIn from './Component/Sign-In-Up/SignIn/SignIn';
import Inventory from './Component/Inventory/Inventory';
import ManageInventory from './Component/ManageInventory/ManageInventory';
import AddNewInventory from './Component/AddNewInventory/AddNewInventory';
import Notfound from './Component/Notfound/Notfound';

function App() {
  return (
    <div className="App">
     <Navigation></Navigation>
     <Routes>
       <Route path='/' element={<Home />}></Route>
       <Route path='*' element={<Notfound />}></Route>
       <Route
          path='inventory/:id'
          element={
            
              <Inventory />
          }
        ></Route>
       <Route path='blog' element={<Blog />}></Route>
       <Route
          path='manageInventory'
          element={
              <ManageInventory />
          }
        ></Route>
        <Route
          path='addNewInventory'
          element={
              <AddNewInventory />

          }
        ></Route>
        <Route path='login' element={<SignIn />}></Route>
       <Route path='signup' element={<SignUp />}></Route>

     </Routes>
    
     <br /> <br />
      <Footer></Footer>
    </div>
  );
}

export default App;
