const web = require('./web')

async function main (url) {
  try {
    let text = await web.get(url)
    console.log(text)
  } catch (error) {
    console.log('error:' + error)
  }
}

main(process.argv[2])
