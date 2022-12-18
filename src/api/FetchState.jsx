const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/parks`
console.log('this is baseURL', BASE_URL)

export const fetchState = async (state) => {
  try {
    const res = await fetch(`${BASE_URL}/states/${state}`)
    console.log(res)
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}