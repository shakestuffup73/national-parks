import './App.css';
import SearchParks from './components/SearchParks';
import ParkDetails from './components/ParkDetails';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      {/* <SearchParks /> */}
      <Routes>
        <Route path='/parks' element={<SearchParks />} />
        <Route path='/parkDetails' element={<ParkDetails />} />
      </Routes> 
    </>
  );
}

export default App;
