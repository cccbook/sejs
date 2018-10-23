const fs = require('fs')

fs.readFile(process.argv[2], 'utf8', function (err, text) {
  if (err) { 
    console.log('Error:', err)
    return
  }
  console.log('text=', text)
})
