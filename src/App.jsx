import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Land from './Pages/Land';   
import Dashboard from './Pages/Dashboard'; 
import Product from './components/Product';  
import Notification from './components/Notification';  
import Orders from './components/Orders';  
import Transaction from './components/TransactionTable';  
import Analytics from './components/Analytics';  
import Demography from './components/Demography'; 
import DashboardHome from './components/DashboardHome';
import TransactionTable from './components/TransactionTable';
import Profile from './components/Profile';
import MainLayout from './components/Mainlayout';
import SignupForm from './components/SignupForm';
import Footer from './components/footer';
import Support from './components/Support';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Features from './Pages/Features';

const App = () => {  
  const [profilePicture, setProfilePicture] = useState('default-avatar.jpg');

  // Callback to update the profile picture
  const handleProfileUpdate = (newProfilePicture) => {
    setProfilePicture(newProfilePicture);
  };

  return (  
    <Router>  
      <MainLayout profilePicture={profilePicture} onProfileUpdate={handleProfileUpdate}>
        <Routes>  
          {/* Storefront / Land Route */}
          <Route path="/" element={<Land />} />   
          <Route path="/signupform" element={<SignupForm />} /> 
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features" element={<Features />} />
          {/* Dashboard and its sub-routes */}
          <Route path="/dashboard" element={<Dashboard />}>  
            <Route index element={<DashboardHome />} />
            <Route path="products" element={<Product />} />  
            <Route path="transactionTable" element={<TransactionTable />} />  
            <Route path="orders" element={<Orders />} />  
            <Route path="analytics" element={<Analytics />} />  
            <Route path="profile" element={<Profile onProfileUpdate={handleProfileUpdate} />} />
            <Route path="notification" element={<Notification />} />  
            <Route path="demography" element={<Demography />} />  
          </Route>  
        </Routes>  
      </MainLayout>
      <Footer />
    </Router>  
  );  
};  

export default App;
