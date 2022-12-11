import { Grid, Card, CardContent } from '@mui/material'

export default function ParksCard({parks}) {
  return ( 
    <Grid container spacing={5}>
      {parks.map((park, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <img src={park.images[0].url} alt='national park' />
              <h1>{park.fullName}</h1>
              <h3>{park.description}</h3>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}