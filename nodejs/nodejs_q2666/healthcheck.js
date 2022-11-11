
import axios from 'axios'

const healthCheck = async (appBasePath) => {
  const PORT = '4000'
  const SERVER = 'healthcheckserver'

  console.log('appBasePath',appBasePath)


  if (!process.env.ENVIRONMENT || !appBasePath) {
    console.log('Environment not set, returning')
    return
  }

  const service = appBasePath.split('/').shift()
  // const endpoint = `https://${SERVER}:${PORT}/${service}`
  const endpoint= 'http://api.weatherapi.com/v1/current.json?key=&q=London&aqi=no'

  try {
    await axios.get(endpoint)
    return
  } catch (err) {
    // console.log('****err****', err)
    console.error(err.response.data);
    // console.log('An error occurred', err)
    throw err
  }
}

export default healthCheck