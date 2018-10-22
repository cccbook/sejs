const logger = require('koa-logger')
const router = require('koa-router')()
const koaBody = require('koa-body')
const koaJson = require('koa-json')
const koaStatic = require('koa-static')

const Koa = require('koa')
const app = (module.exports = new Koa())

// "database"

const posts = [] // {id: 0, title: 'aaa', body: 'aaa'}, {id: 1, title: 'bbb', body: 'bbb'}

// middleware

app.use(logger())

// app.use(render)

app.use(koaBody())
app.use(koaStatic('./public'))

// route definitions

router.get('/list', list).get('/post/:id', show).post('/post', create)

app.use(router.routes())
app.use(koaJson())

/**
 * Post listing.
 */

async function list (ctx) {
  // console.log('list: posts=%j', posts)
  ctx.body = posts
}

/**
 * Show post :id.
 */

async function show (ctx) {
  const id = ctx.params.id
  const post = posts[id]
  if (!post) ctx.throw(404, 'invalid post id')
  ctx.body = post
}

/**
 * Create a post.
 */

async function create (ctx) {
  var post = JSON.parse(ctx.request.body)
  const id = posts.push(post) - 1
  console.log('create:id=>', id)
  console.log('create:get=>', post)
  post.created_at = new Date()
  post.id = id
  console.log('create:save=>', post)
  // ctx.redirect('/')
}

// listen
if (!module.parent) {
  app.listen(3000)
  console.log('Server run at http://localhost:3000')
}
