import { Grid, Card, CardContent } from '@mui/material'
import { Link } from 'react-router-dom'

export default function ParksCard({ parks }) {
  return ( 
    <Grid container spacing={3}>
      {parks.map((park, index) => (
        <Grid key={index} item xs={12} sm={6} md={3}>
          <Link key={index}
            to='/parkDetails'
            state={park}
          >
            <Card>
              <CardContent>
                <img src={park.images[0].url} alt='national park' />
                <h2>{park.fullName}</h2>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}