import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import React,{ useEffect } from 'react';

import Login from './Login'
import Protected from './Protected'
import Register from './Register'
import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'
import Products from './Products'


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
       
         {/* <h1>Ecomm Dashboard</h1> */}
         <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
         
          {/* <Route path="/add"> */}
             
          {/* </Route> */}
          <Route path="/add" element={<Protected cmp={AddProduct} />} >  </Route>
          <Route path="/update/:id" element={<Protected cmp={UpdateProduct} />} >  </Route>
          <Route path="/" element={<Products />} />    
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
