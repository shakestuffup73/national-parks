import axios from 'axios'

const parkURL = 'https://developer.nps.gov/api/v1/webcams'
const key = process.env.REACT_APP_API_KEY

export const fetchCam = (state, park) => {
  return ( 
    axios.get(`${parkURL}?stateCode=${state}parkCode=${park}&api_key=${key}`)
      .then(res => {
        const { data: { data }} = res
        return data
      })
      .catch(err => {
        console.log(err)
      })
  );
}