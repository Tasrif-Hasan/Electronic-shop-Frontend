import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import Home from './Components/Home/Home';
import Add from './Components/Add/Add';
import MyItems from './Components/MyItems/MyItems';
import Invoice from './Components/Invoice/Invoice';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/manageinventory' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        <Route path='/add' element={<RequireAuth>
          <Add></Add>
        </RequireAuth>}></Route>
        <Route path='/myitems' element={<RequireAuth>
          <MyItems></MyItems>
        </RequireAuth>}></Route>
        <Route path='/invoice/:invoiceId' element={
          <RequireAuth>
            <Invoice></Invoice>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
