# 模式 -- callback Promise

* 參考 
  * https://nodejs.org/api/http.html#http_http_get_options_callback
  * https://eyesofkids.gitbooks.io/javascript-start-es6-promise/content/contents/intro.html


執行 mainThen

```
$ node mainThen http://railway.hinet.net/Foreign/TW/index.html
Got response: 200
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
        <meta http-equiv="pragma" content="no-cache">
        <meta http-equiv="cache-control" content="no-cache">
        <meta http-equiv="expires" content="0">

    <title>交通部臺灣鐵路管理局-網路訂票系統</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link rel="shortcut icon" href="../img/favicon.ico">
    <link rel="stylesheet" href="../css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../css/styles.css" rel="stylesheet">
    <link rel="stylesheet" href="/Foreign/TW/dbase.css" type="text/css">

    <!--[if lt IE 9]>
      <script src="//oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="//oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body class="demo-include">
    <div class="container">
        <div class="_header"><span class="sr-only">Header</span></div>
        <div class="_menu"><span class="sr-only">Menu</span></div>

        <noscript>
            <div class="sr-only">
                當 script 無法執行時，於網站內進行任何查詢操作、表單填寫，必須先手動清除文字方塊內的預設文字，否
則將會以預設文字為條件進行查詢。（預設文字是為了符合無障礙網頁規範）
            </div>
        </noscript>

        <!-- === Contents === -->
        <span class="sr-only"><a href="#" accesskey="C" title="中間主要內容區，此區塊呈現網頁的網頁內容">:::</a></span>
        <div class="row contents">

                <iframe style="margin-top:1%;" scrolling="auto" frameborder="0" marginwidth="0" marginheight="0"
width="100%" height="800" src="/Public/index_menu.html" style="height:auto !important;"></iframe>
                <noframes title="noframes">
                        <p>您使用的瀏覽器不支援框架功能。</p>
                </noframes>

        </div>
        <!-- === END Contents === -->

        <div class="_footer"><span class="sr-only">Footer</span></div>
    </div>

    <script src="../js/jquery.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="js/tip_demo.js"></script>

</body>
</html>
```

執行 mainAwait

```
PS D:\course\se107a\example\designPattern\00-callback\02-promise> node mainAwait http://railway.hinet.net/Foreign/TW/index.html
Got response: 200
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
        <meta http-equiv="pragma" content="no-cache">
        <meta http-equiv="cache-control" content="no-cache">
        <meta http-equiv="expires" content="0">

    <title>交通部臺灣鐵路管理局-網路訂票系統</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link rel="shortcut icon" href="../img/favicon.ico">
    <link rel="stylesheet" href="../css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../css/styles.css" rel="stylesheet">
    <link rel="stylesheet" href="/Foreign/TW/dbase.css" type="text/css">

    <!--[if lt IE 9]>
      <script src="//oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="//oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body class="demo-include">
    <div class="container">
        <div class="_header"><span class="sr-only">Header</span></div>
        <div class="_menu"><span class="sr-only">Menu</span></div>

        <noscript>
            <div class="sr-only">
                當 script 無法執行時，於網站內進行任何查詢操作、表單填寫，必須先手動清除文字方塊內的預設文字，否
則將會以預設文字為條件進行查詢。（預設文字是為了符合無障礙網頁規範）
            </div>
        </noscript>

        <!-- === Contents === -->
        <span class="sr-only"><a href="#" accesskey="C" title="中間主要內容區，此區塊呈現網頁的網頁內容">:::</a></span>
        <div class="row contents">

                <iframe style="margin-top:1%;" scrolling="auto" frameborder="0" marginwidth="0" marginheight="0"
width="100%" height="800" src="/Public/index_menu.html" style="height:auto !important;"></iframe>
                <noframes title="noframes">
                        <p>您使用的瀏覽器不支援框架功能。</p>
                </noframes>

        </div>
        <!-- === END Contents === -->

        <div class="_footer"><span class="sr-only">Footer</span></div>
    </div>

    <script src="../js/jquery.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="js/tip_demo.js"></script>

</body>
</html>
```
