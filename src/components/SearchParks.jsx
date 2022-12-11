import { useState, useEffect } from 'react';
import { NativeSelect, InputLabel } from '@mui/material'
import { usStates } from '../data/usStates.js'
import { fetchData } from '../api/Api.jsx'
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
    fetchData(usState).then(parks => {
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
        <NativeSelect defaultValue='' onChange={event => handleStateChange(event.target.value)}>
          <option value=''></option>
          {states.map((state, index) =>
            <option value={state} key={index}>{state}</option>
          )}
        </NativeSelect>
        <ParksCard parks={parks} />
      </div>
    </>
  );
}

export default SearchParks;