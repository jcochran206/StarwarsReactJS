import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';

const Navbar = () => {
  return (
    <>
    <Menu>
        <Container>
            <Link to='/'>
                <Menu.Item>Starwars API</Menu.Item>
            </Link>
            <Link to='/people'>
                <Menu.Item>People</Menu.Item>
            </Link>
            <Link to='/planets'>
                <Menu.Item>Planets</Menu.Item>
            </Link>
        </Container>
    </Menu>
    </>
  )
}

export default Navbar