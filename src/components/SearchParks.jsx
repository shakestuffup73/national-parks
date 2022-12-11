import { useState, useEffect } from 'react';
import { Select, InputLabel, MenuItem } from '@mui/material'
import { usStates } from '../data/usStates.js'
import { fetchState } from '../api/FetchState.jsx'
import ParksCard from './ParksCard'

const SearchParks = (props) => {

  const [states, setState] = useState([])
  const [parks, setPark] = useState([])

  const getUsStates = () => {
    setState(Object.keys(usStates))
  }

  useEffect(() => {
    getUsStates()
  }, [])

  const handleStateChange = async (usState) => {
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
        <ParksCard parks={parks} />
      </div>
    </>
  );
}

export default SearchParks;