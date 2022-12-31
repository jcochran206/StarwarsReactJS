import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import People from './components/People/People';
import Planets from './components/Planets/Planets';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Container} from 'semantic-ui-react';


function App() {
  return (
   <>
   <BrowserRouter>
   <Container>
    <Navbar />
   <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/people' element={<People/>}></Route>
      <Route exact path='/planets' element={<Planets/>}></Route>
    </Routes>
   </Container>
   </BrowserRouter>
   </>
  );
}

export default App;
