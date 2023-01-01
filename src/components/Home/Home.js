import React from 'react';
import { Container, Form, Button } from 'semantic-ui-react';

const Home = () => {
  return (
    <>
    <Container>
      <Form inverted>
        <Form.Input fluid label="Search" placeholder='Search for your fav...'/>
        <Button type='submit'>Submit</Button>
      </Form>
      <p>Search for your favorite Star Wars Characters, vehicles, planets and more</p>
    </Container>
    </>
  )
}

export default Home