import { useState, useEffect } from 'react';
import { Select, InputLabel, MenuItem } from '@mui/material'
import { usStates } from '../data/usStates.js'
import { parkCodes } from '../data/parkCodes.js'
import { fetchState } from '../api/FetchState.jsx'
import ParksCard from './ParksCard'

const SearchParks = (props) => {

  const [states, setState] = useState([])
  const [parks, setPark] = useState([])
  const [cams, setCam] = useState([])

  const getUsStates = () => {
    setState(Object.keys(usStates))
  }

  const getParkCams = () => {
    setCam(Object.keys(parkCodes))
  }

  useEffect(() => {
    getUsStates()
    getParkCams()
  }, [])

  const handleStateChange = async (usState, parkCodes) => {
    fetchState(usState).then(parks => {
      setPark(parks)
    })
  }

  return (
    <>
      <div>
        <h1>Select a State from the drop-down menu</h1>
      </div>
      <div>
        <InputLabel>State</InputLabel>
        <Select defaultValue='' onChange={event => handleStateChange(event.target.value)}>
          {states.map((state, index) =>
            <MenuItem value={state} key={index}>{state}</MenuItem>
          )}
        </Select>
        <ParksCard parks={parks} webcams={cams} />
      </div>
    </>
  );
}

export default SearchParks;