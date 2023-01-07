import React, {useState} from 'react';
import { Container, Form, Button } from 'semantic-ui-react';

const Home = () => {
  const [search, setSearch] = useState();
  console.log(search);

  return (
    <>
    <Container>
      <h2>Starwars API ReactJS</h2>
      <p>Search for your favorite Star Wars Characters, vehicles, planets and more</p>
    </Container>
    </>
  )
}

export default Home