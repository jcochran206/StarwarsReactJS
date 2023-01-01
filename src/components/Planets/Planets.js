import React from 'react';
import {Card, Grid, Image} from 'semantic-ui-react';

const Planets = ({data}) => {
  return (
    <>
    <h1>Planets</h1>
      <Grid columns={4}>
        {data.map((planet, i) => {
          return (
            <Grid.Column key={i}>
              <Card>
                <Card.Content>
                  <Card.Header>{planet.name}</Card.Header>
                  <Card.Description>
                  <strong>climate</strong>
                  <p>{planet.climate}</p>
                  <strong>population</strong>
                  <p>{planet.population}</p>
                  <strong>terrain</strong>
                  <p>{planet.terrain}</p>
                  <strong>Image</strong>
                  <Image src={planet.url} size='small' />
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          )
        })}
        
      </Grid>
    </>
  )
}

export default Planets