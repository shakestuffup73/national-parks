import { Grid, Card, CardContent } from '@mui/material'

export default function ParksCard({ parks }) {
  return ( 
    <Grid container spacing={3}>
      {parks.map((park, index) => (
        <Grid item key={index} xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <img src={park.images[0].url} alt='national park' />
              <h2>{park.fullName}</h2>
              <h4>{park.description}</h4>
              <div>{park.url}</div>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}