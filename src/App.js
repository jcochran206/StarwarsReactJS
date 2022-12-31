import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import People from './components/People/People';
import Planets from './components/Planets/Planets';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Container} from 'semantic-ui-react';


function App() {
  const [people, setPeople] = useState([]);
  const [planet, setPlanet] = useState([]);
  const [landing, setLanding] = useState(true);

  useEffect(() => {
    async function fetchPeople(){
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await res.json();
      setPeople(data.results);
    }

    async function fetchPlanet(){
      let res = await fetch('https://swapi.dev/api/planets/?format=json');
      let data = await res.json();
      setPlanet(data.results);
    }

    fetchPeople();
    fetchPlanet();
  }, [])
  console.log('people', people);
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
