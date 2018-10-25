# 練習 -- 經典網誌系統

* https://github.com/cccbook/sejs/tree/master/project/blogMvc

1. 請安裝該網誌系統
    * npm i
2. 請學會使用該網誌系統
    * npm run start
3. 請學會測試該網誌系統
    * npm run test

```
PS D:\course\sejs\project\blogMvc> npm i

added 121 packages in 19.534s
PS D:\course\sejs\project\blogMvc> npm run start

> blogmvc@0.0.1 start D:\course\sejs\project\blogMvc
> node server

Server run at http://localhost:3000
要終止批次工作嗎 (Y/N)? y
PS D:\course\sejs\project\blogMvc> npm run test

> blogmvc@0.0.1 test D:\course\sejs\project\blogMvc
> mocha



  簡易網誌系統
    GET /
  <-- GET /
  --> GET / 200 89ms 1.13kb
      √ 內文標題應該為《貼文列表》，而且只有 0 則貼文 (246ms)
    POST /post
  <-- POST /post
  --> POST /post 302 91ms 33b
      √ 應該會創建新貼文，然後轉址到根目錄 / (120ms)
    GET /post/0
  <-- GET /post/0
  --> GET /post/0 200 4ms 1.02kb
      √ 應該會看到第 0 則貼文


  3 passing (453ms)
```
