import { useLocation } from 'react-router-dom'
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
    </>
  );
}

export default ParkDetails;