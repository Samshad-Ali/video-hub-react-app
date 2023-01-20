import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header'
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp'
import Upload from './Components/Upload';
import Videos from './Components/Videos'
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/upload' element={<Upload/>} />
        <Route path='/videos' element={<Videos/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='*' element={<p>not found 404 </p>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
