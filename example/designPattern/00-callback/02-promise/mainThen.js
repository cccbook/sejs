const web = require('./web')

web
  .get(process.argv[2])
  .then(function (text) {
    console.log(text)
  })
  .catch(function (error) {
    console.log('error:' + error)
  })
