
  try {
    require('./index1')
    require('./index1')
    require('./index1')
  } catch (err) {
    console.log('An error occurred !')
    throw new Error()
  }


