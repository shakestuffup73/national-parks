import axios from 'axios'

const parkURL = 'https://developer.nps.gov/api/v1/parks'
const key = process.env.REACT_APP_API_KEY

export const fetchData = (state) => {
  return ( 
    axios.get(`${parkURL}?stateCode=${state}&api_key=${key}`)
      .then(res => {
        const { data: { data }} = res
        return data
      })
      .catch(err => {
        console.log(err)
      })
  );
}