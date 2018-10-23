const W = (module.exports = {})
const http = require('http')

W.get = function (url) {
  return new Promise(function (resolve, reject) {
    http
      .get(url, function (res) {
        let chunks = []
        console.log('Got response: ' + res.statusCode)
        res.on('data', function (chunk) {
          chunks.push(chunk)
        })
        res.on('end', function () {
          resolve(chunks.join())
        })
      })
      .on('error', function (e) {
        reject(e)
      })
  })
}
