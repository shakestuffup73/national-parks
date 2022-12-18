import { useLocation } from 'react-router-dom'
import { Grid, Card, CardContent } from '@mui/material'
import { fetchCam } from '../api/FetchCam'
import { useEffect } from 'react'

const ParkDetails = (props) => {
  const { state } = useLocation()
  console.log('this is state', state)

  useEffect(()=>{
    const getCams = async() => {
      const data = await fetchCam(state.states, state.parkCode)
      console.log('this is data', data)
    }
    getCams()
  },[state])

  return ( 
    <>
      <h1>Park Details</h1>
      <h4>{state.description}</h4>
      <div>
        {state.images.map((image, index)=> (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <img src={state.images[index].url} alt='national park' />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </div>
      <div>{state.url}</div>
    </>
  );
}

export default ParkDetails;