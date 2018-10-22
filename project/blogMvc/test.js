/* eslint-env mocha */
const expect = require('chai').expect
const server = require('./server').listen()
const request = require('supertest').agent(server)

describe('簡易網誌系統', function () {
  after(function () {
    server.close()
  })

  describe('GET /', function () { // 路徑 GET /
    it('內文標題應該為《貼文列表》，而且只有 0 則貼文', function (done) {
      request.get('/').expect(200, function (err, res) {
        if (err) return done(err)

        expect(res.header['content-type']).to.include('html') // 根目錄是個 html 文件
        expect(res.text).to.include('<title>貼文列表</title>') // 內文標題為 Posts
        expect(res.text).to.include('<p>您總共有 <strong>0</strong> 則貼文!</p>')
        done()
      })
    })
  })

  describe('POST /post', function () { // 路徑 POST /post/new
    it('應該會創建新貼文，然後轉址到根目錄 /', function (done) {
      request
        .post('/post')
        .send({ title: '貼文 0', body: '內容 0' })
        .end(function (err, res) {
          if (err) return done(err)

          expect(res.header.location).to.equal('/') // 路徑 / => 根目錄是個 html 文件
          done()
        })
    })
  })

  describe('GET /post/0', function () {
    it('應該會看到第 0 則貼文', function (done) {
      request.get('/post/0').expect(200, function (err, res) {
        if (err) return done(err)

        expect(res.header['content-type']).to.include('html')
        expect(res.text).to.include('<h1>貼文 0</h1>')
        expect(res.text).to.include('<p>內容 0</p>')
        done()
      })
    })
  })
})
