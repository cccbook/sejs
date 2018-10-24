const blog = {
  controller : window,
  view: {},
  model: {}
}

// const R = {}

window.onhashchange = async function () {
  var r
  var tokens = window.location.hash.split('/')
  console.log('tokens=', tokens)
  switch (tokens[0]) {
    case '#show':
      let post = await blog.model.getPost(tokens[1])
      blog.view.show(post)
      break
    case '#new':
      blog.view.new()
      break
    default:
      let posts = await blog.model.list()
      blog.view.list(posts)
      break
  }
}

window.onload = function () {
  window.onhashchange()
}

blog.view.layout = function (title, content) {
  document.querySelector('title').innerText = title
  document.querySelector('#content').innerHTML = content
}

blog.view.list = function (posts) {
  let list = []
  for (let post of posts) {
    list.push(`
    <li>
      <h2>${post.title}</h2>
      <p><a id="show${post.id}" href="#show/${post.id}">Read post</a></p>
    </li>
    `)
  }
  let content = `
  <h1>Posts</h1>
  <p>You have <strong>${posts.length}</strong> posts!</p>
  <p><a id="createPost" href="#new">Create a Post</a></p>
  <ul id="posts">
    ${list.join('\n')}
  </ul>
  `
  return blog.view.layout('Posts', content)
}

blog.view.new = function () {
  return blog.view.layout('New Post', `
  <h1>New Post</h1>
  <p>Create a new post.</p>
  <form>
    <p><input id="title" type="text" placeholder="Title" name="title"></p>
    <p><textarea id="body" placeholder="Contents" name="body"></textarea></p>
    <p><input id="savePost" type="button" onclick="blog.model.savePost()" value="Create"></p>
  </form>
  `)
}

blog.view.show = function (post) {
  return blog.view.layout(post.title, `
    <h1>${post.title}</h1>
    <p>${post.body}</p>
  `)
}

blog.model.savePost = async function () {
  let title = document.querySelector('#title').value
  let body = document.querySelector('#body').value
  let r = await window.fetch('/post', {
    body: JSON.stringify({title: title, body: body}),
    method: 'POST'
  })
  window.location.hash = '#list'
  return r
}

blog.model.getPost = async function (id) {
  let r = await window.fetch('/post/' + id)
  let post = await r.json()
  return post
}

blog.model.list = async function () {
  let r = await window.fetch('/list/')
  let posts = await r.json()
  return posts  
}
