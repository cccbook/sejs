# 設計模式

## 回呼

```
PS D:\course\se107a\example\designPattern\00-callback> node io abc.txt
Error: { [Error: ENOENT: no such file or directory, open 'D:\course\se107a\example\designPattern\00-callback\abc.txt']
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path:
   'D:\\course\\se107a\\example\\designPattern\\00-callback\\abc.txt' }
PS D:\course\se107a\example\designPattern\00-callback> node io io.js
text= const fs = require('fs')

fs.readFile(process.argv[2], 'utf8', function (err, text) {
  if (err) {
    console.log('Error:', err)
    return
  }
  console.log('text=', text)
})
```

