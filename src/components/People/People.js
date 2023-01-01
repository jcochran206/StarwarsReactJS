import React from 'react';
import {Card, Grid} from 'semantic-ui-react';

const People = ({data}) => {
  return (
    <>
      <h1>People</h1>
      <Grid columns={4}>
        {data.map((people, i) => {
          return (
            <Grid.Column key={i}>
              <Card>
                <Card.Content>
                  <Card.Header>{people.name}</Card.Header>
                  <Card.Description>
                  <strong>Gender</strong>
                  <p>{people.gender}</p>
                  <strong>Height</strong>
                  <p>{people.height}</p>
                  <strong>weight</strong>
                  <p>{people.mass}</p>
                  <strong>Hair color</strong>
                  <p>{people.hair_color}</p>
                  <strong>Eye color</strong>
                  <p>{people.eye_color}</p>
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

export default People