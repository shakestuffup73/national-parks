import axios from 'axios'

const parkURL = 'https://developer.nps.gov/api/v1/webcams'
const key = process.env.REACT_APP_API_KEY
// webcams?parkCode=YOSE&stateCode=CA

export const fetchCam = async (stateCode, park) => {
  const res = await axios.get(`${parkURL}?parkCode=${park}&stateCode=${stateCode}&api_key=${key}`)
  console.log('this is res', res.data.data)
}