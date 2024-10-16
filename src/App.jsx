// src/App.jsx  
import React from 'react';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Navbar from './components/Navbar';  
import Land from './pages/Land';  
import Dashboard from './pages/Dashboard';  
import Product from './components/Product';  
import Notification from './components/Notification';  
import Orders from './components/Orders';  
import Transaction from './components/Transaction';  
import Analytics from './components/Analytics';  
import Demography from './components/Demography';  

const App = () => {  
  return (  
    <Router>  
      <div>  
        <Navbar />  
        <Routes>  
          <Route path="/" element={<Land />} />   
          <Route path="/dashboard" element={<Dashboard />}>  
            <Route path="products" element={<Product />} />  
            <Route path="transaction" element={<Transaction />} />  
            <Route path="orders" element={<Orders />} />  
            <Route path="analytics" element={<Analytics />} />  
            <Route path="notification" element={<Notification />} />  
            <Route path="demography" element={<Demography />} />  
          </Route>  
        </Routes>  
      </div>  
    </Router>  
  );  
};  

export default App;