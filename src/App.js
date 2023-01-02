import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import People from './components/People/People';
import Planets from './components/Planets/Planets';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Container, Dimmer, Loader} from 'semantic-ui-react';


function App() {
  const [people, setPeople] = useState([]);
  const [planet, setPlanet] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPeople(){
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }

    async function fetchPlanet(){
      let res = await fetch('https://swapi.dev/api/planets/?format=json');
      let data = await res.json();
      setPlanet(data.results);
      setLoading(false);
    }

   

    fetchPeople();
    fetchPlanet();
  }, [])
  console.log('people', people);
  return (
   <>
   <BrowserRouter>
   <Navbar />
   <Container>
    {loading ? (
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    ):(
    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/people' element={<People data={people}/>}></Route>
      <Route exact path='/planets' element={<Planets data={planet}/>}></Route>
    </Routes>
    )}
   </Container>
   </BrowserRouter>
   </>
  );
}

export default App;
