var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号\n 例：node server.js 8888 ')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var pathWithQuery = request.url 
  var queryString = ''
  if(pathWithQuery.indexOf('?') >= 0){ queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
  var path = parsedUrl.pathname
  var query = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/

  console.log('*有新请求*路径（带查询参数）为：' + pathWithQuery)

  if(path === '/'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="/style.css">
    </head>
    <body>
    <div class="rubiksCube">
    <div class="top1"></div>
    <div class="top2"></div>
    <div class="top3"></div>
    <div class="top4"></div>
    <div class="top5"></div>
    <div class="top6"></div>
    <div class="top7"></div>
    <div class="top8"></div>
    <div class="top9"></div>
    <div class="back1"></div>
    <div class="back2"></div>
    <div class="back3"></div>
    <div class="back4"></div>
    <div class="back5"></div>
    <div class="back6"></div>
    <div class="back7"></div>
    <div class="back8"></div>
    <div class="back9"></div>
    <div class="bottom1"></div>
    <div class="bottom2"></div>
    <div class="bottom3"></div>
    <div class="bottom4"></div>
    <div class="bottom5"></div>
    <div class="bottom6"></div>
    <div class="bottom7"></div>
    <div class="bottom8"></div>
    <div class="bottom9"></div>
    <div class="front1"></div>
    <div class="front2"></div>
    <div class="front3"></div>
    <div class="front4"></div>
    <div class="front5"></div>
    <div class="front6"></div>
    <div class="front7"></div>
    <div class="front8"></div>
    <div class="front9"></div>
    <div class="right1"></div>
    <div class="right2"></div>
    <div class="right3"></div>
    <div class="right4"></div>
    <div class="right5"></div>
    <div class="right6"></div>
    <div class="right7"></div>
    <div class="right8"></div>
    <div class="right9"></div>
    <div class="left1"></div>
    <div class="left2"></div>
    <div class="left3"></div>
    <div class="left4"></div>
    <div class="left5"></div>
    <div class="left6"></div>
    <div class="left7"></div>
    <div class="left8"></div>
    <div class="left9"></div>
  </div>  
    </body>
    </html>
    `)
    response.end()
  } else if(path === '/style.css'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/css;charset=utf-8')
    response.write(`
    *{margin:0;padding:0;box-sizing:border-box;}
    .rubiksCube{
      margin-top:-150px;
      width:120px;
      height:120px;
      display:grid;
      grid-template-columns:40px 40px 40px 40px 40px 40px 40px 40px 40px ;
      grid-template-rows:40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px ;
      transform-style: preserve-3d;
      transform-origin:180px 300px 60px;
      transform:rotate3d(1,1,1,0deg);
      perspective-origin:center;
      perspective:100000px;
      animation:cuberotate 5s linear infinite;
    }
    @keyframes cuberotate{
      0%{
        transform:rotate3d(1,0,0,0deg)
      }
      /*20%{
        transform:rotate3d(1,0,0,180deg)
      }
      40%{
        transform:rotate3d(0,1,0,180deg)
      }*/
      100%{
        transform:rotate3d(1,2,1,360deg)
      }
    }
    .rubiksCube>div{
       border-radius:6px;
    }
    .top1{
      background:#ff0000;
      border:2px solid white;
      grid-row-start:7;
      grid-row-end:8;
      grid-column-start:4;
      grid-column-end:5;
      transform:translatez(120px);
    }
    .top2{
      background:#ff0000;
      border:2px solid white;
      grid-row-start:7;
      grid-row-end:8;
      grid-column-start:5;
      grid-column-end:6;
      transform:translatez(120px);
    }
    .top3{
      background:#ff0000;
      border:2px solid white;
      grid-row-start:7;
      grid-row-end:8;
      grid-column-start:6;
      grid-column-end:7;
      transform:translatez(120px);
    }
    .top4{
      background:#ff0000;
      border:2px solid white;
      grid-row-start:8;
      grid-row-end:9;
      grid-column-start:4;
      grid-column-end:5;
      transform:translatez(120px);
    }
    .top5{
      background:#ff0000;
      border:2px solid white;
      grid-row-start:8;
      grid-row-end:9;
      grid-column-start:5;
      grid-column-end:6;
      transform:translatez(120px);
    }
    .top6{
      background:#ff0000;
      border:2px solid white;
      grid-row-start:8;
      grid-row-end:9;
      grid-column-start:6;
      grid-column-end:7;
      transform:translatez(120px);
    }
    .top7{
      background:#ff0000;
      border:2px solid white;
      grid-row-start:9;
      grid-row-end:10;
      grid-column-start:4;
      grid-column-end:5;
      transform:translatez(120px);
    }
    .top8{
      background:#ff0000;
      border:2px solid white;
      grid-row-start:9;
      grid-row-end:10;
      grid-column-start:5;
      grid-column-end:6;
      transform:translatez(120px);
    }
    .top9{
      background:#ff0000;
      border:2px solid white;
      grid-row-start:9;
      grid-row-end:10;
      grid-column-start:6;
      grid-column-end:7;
      transform:translatez(120px);
    }
    .back1{
      background:#be0aff;
      border:2px solid white;
      grid-row-start:4;
      grid-row-end:5;
      grid-column-start:4;
      grid-column-end:5;
      transform-origin:center 120px;
      transform:rotatex(-90deg);
    }
    .back2{
      background:#be0aff;
      border:2px solid white;
      grid-row-start:4;
      grid-row-end:5;
      grid-column-start:5;
      grid-column-end:6;
      transform-origin:center 120px;
      transform:rotatex(-90deg);
    }
    .back3{
      background:#be0aff;
      border:2px solid white;
      grid-row-start:4;
      grid-row-end:5;
      grid-column-start:6;
      grid-column-end:7;
      transform-origin:center 120px;
      transform:rotatex(-90deg);
    }
    .back4{
      background:#be0aff;
      border:2px solid white;
      grid-row-start:5;
      grid-row-end:6;
      grid-column-start:4;
      grid-column-end:5;
      transform-origin:center 80px;
      transform:rotatex(-90deg);
    }
    .back5{
      background:#be0aff;
      border:2px solid white;
      grid-row-start:5;
      grid-row-end:6;
      grid-column-start:5;
      grid-column-end:6;
      transform-origin:center 80px;
      transform:rotatex(-90deg);
    }
    .back6{
      background:#be0aff;
      border:2px solid white;
      grid-row-start:5;
      grid-row-end:6;
      grid-column-start:6;
      grid-column-end:7;
      transform-origin:center 80px;
      transform:rotatex(-90deg);
    }
    .back7{
      background:#be0aff;
      border:2px solid white;
      grid-row-start:6;
      grid-row-end:7;
      grid-column-start:4;
      grid-column-end:5;
      transform-origin:bottom center;
      transform:rotatex(-90deg);
    }
    .back8{
      background:#be0aff;
      border:2px solid white;
      grid-row-start:6;
      grid-row-end:7;
      grid-column-start:5;
      grid-column-end:6;
      transform-origin:bottom center;
      transform:rotatex(-90deg);
    }
    .back9{
      background:#be0aff;
      border:2px solid white;
      grid-row-start:6;
      grid-row-end:7;
      grid-column-start:6;
      grid-column-end:7;
      transform-origin:bottom center;
      transform:rotatex(-90deg);
    }
    .bottom1{
      background:#ffd300;
      border:2px solid white;
      grid-row-start:7;
      grid-row-end:8;
      grid-column-start:4;
      grid-column-end:5;
    }
    .bottom2{
      background:#ffd300;
      border:2px solid white;
      grid-row-start:7;
      grid-row-end:8;
      grid-column-start:5;
      grid-column-end:6;
    }
    .bottom3{
      background:#ffd300;
      border:2px solid white;
      grid-row-start:7;
      grid-row-end:8;
      grid-column-start:6;
      grid-column-end:7;
    }
    .bottom4{
      background:#ffd300;
      border:2px solid white;
      grid-row-start:8;
      grid-row-end:9;
      grid-column-start:4;
      grid-column-end:5;
    }
    .bottom5{
      background:#ffd300;
      border:2px solid white;
      grid-row-start:8;
      grid-row-end:9;
      grid-column-start:5;
      grid-column-end:6;
    }
    .bottom6{
      background:#ffd300;
      border:2px solid white;
      grid-row-start:8;
      grid-row-end:9;
      grid-column-start:6;
      grid-column-end:7;
    }
    .bottom7{
      background:#ffd300;
      border:2px solid white;
      grid-row-start:9;
      grid-row-end:10;
      grid-column-start:4;
      grid-column-end:5;
    }
    .bottom8{
      background:#ffd300;
      border:2px solid white;
      grid-row-start:9;
      grid-row-end:10;
      grid-column-start:5;
      grid-column-end:6;
    }
    .bottom9{
      background:#ffd300;
      border:2px solid white;
      grid-row-start:9;
      grid-row-end:10;
      grid-column-start:6;
      grid-column-end:7;
    }
    .front1{
      background:#580aff;
      border:2px solid white;
      grid-row-start:10;
      grid-row-end:11;
      grid-column-start:4;
      grid-column-end:5;
      transform-origin:top;
      transform:rotatex(90deg);
    }
    .front2{
      background:#580aff;
      border:2px solid white;
      grid-row-start:10;
      grid-row-end:11;
      grid-column-start:5;
      grid-column-end:6;
      transform-origin:top;
      transform:rotatex(90deg);
    }
    .front3{
      background:#580aff;
      border:2px solid white;
      grid-row-start:10;
      grid-row-end:11;
      grid-column-start:6;
      grid-column-end:7;
      transform-origin:top;
      transform:rotatex(90deg);
    }
    .front4{
      background:#580aff;
      border:2px solid white;
      grid-row-start:11;
      grid-row-end:12;
      grid-column-start:4;
      grid-column-end:5;
      transform-origin:20px -40px;
      transform:rotatex(90deg);
    }
    .front5{
      background:#580aff;
      border:2px solid white;
      grid-row-start:11;
      grid-row-end:12;
      grid-column-start:5;
      grid-column-end:6;
      transform-origin:20px -40px;
      transform:rotatex(90deg);
    }
    .front6{
      background:#580aff;
      border:2px solid white;
      grid-row-start:11;
      grid-row-end:12;
      grid-column-start:6;
      grid-column-end:7;
      transform-origin:20px -40px;
      transform:rotatex(90deg);
    }
    .front7{
      background:#580aff;
      border:2px solid white;
      grid-row-start:12;
      grid-row-end:13;
      grid-column-start:4;
      grid-column-end:5;
      transform-origin:20px -80px;
      transform:rotatex(90deg);
    }
    .front8{
      background:#580aff;
      border:2px solid white;
      grid-row-start:12;
      grid-row-end:13;
      grid-column-start:5;
      grid-column-end:6;
      transform-origin:20px -80px;
      transform:rotatex(90deg);
    }
    .front9{
      background:#580aff;
      border:2px solid white;
      grid-row-start:12;
      grid-row-end:13;
      grid-column-start:6;
      grid-column-end:7;
      transform-origin:20px -80px;
      transform:rotatex(90deg);
    }
    .right1{
      background:#f4f4ef;
      border:2px solid white;
      grid-row-start:7;
      grid-row-end:8;
      grid-column-start:1;
      grid-column-end:2;
      transform-origin:120px 50%;
      transform:rotatey(90deg);
    }
    .right2{
      background:#f4f4ef;
      border:2px solid white;
      grid-row-start:7;
      grid-row-end:8;
      grid-column-start:2;
      grid-column-end:3;
      transform-origin:80px 50%;
      transform:rotatey(90deg);
    }
    .right3{
      background:#f4f4ef;
      border:2px solid white;
      grid-row-start:7;
      grid-row-end:8;
      grid-column-start:3;
      grid-column-end:4;
      transform-origin:right;
      transform:rotatey(90deg);
    }
    .right4{
      background:#f4f4ef;
      border:2px solid white;
      grid-row-start:8;
      grid-row-end:9;
      grid-column-start:1;
      grid-column-end:2;
      transform-origin:120px 50%;
      transform:rotatey(90deg);
    }
    .right5{
      background:#f4f4ef;
      border:2px solid white;
      grid-row-start:8;
      grid-row-end:9;
      grid-column-start:2;
      grid-column-end:3;
      transform-origin:80px 50%;
      transform:rotatey(90deg);
    }
    .right6{
      background:#f4f4ef;
      border:2px solid white;
      grid-row-start:8;
      grid-row-end:9;
      grid-column-start:3;
      grid-column-end:4;
      transform-origin:right;
      transform:rotatey(90deg);
    }
    .right7{
      background:#f4f4ef;
      border:2px solid white;
      grid-row-start:9;
      grid-row-end:10;
      grid-column-start:1;
      grid-column-end:2;
      transform-origin:120px 50%;
      transform:rotatey(90deg);
    }
    .right8{
      background:#f4f4ef;
      border:2px solid white;
      grid-row-start:9;
      grid-row-end:10;
      grid-column-start:2;
      grid-column-end:3;
      transform-origin:80px 50%;
      transform:rotatey(90deg);
    }
    .right9{
      background:#f4f4ef;
      border:2px solid white;
      grid-row-start:9;
      grid-row-end:10;
      grid-column-start:3;
      grid-column-end:4;
      transform-origin:right;
      transform:rotatey(90deg);
    }
    .left1{
      background:#a1ff0a;
      border:2px solid white;
      grid-row-start:7;
      grid-row-end:8;
      grid-column-start:7;
      grid-column-end:8;
      transform-origin:left;
      transform:rotatey(-90deg);
    }
    .left2{
      background:#a1ff0a;
      border:2px solid white;
      grid-row-start:7;
      grid-row-end:8;
      grid-column-start:8;
      grid-column-end:9;
      transform-origin:-40px 50%;
      transform:rotatey(-90deg);
    }
    .left3{
      background:#a1ff0a;
      border:2px solid white;
      grid-row-start:7;
      grid-row-end:8;
      grid-column-start:9;
      grid-column-end:10;
      transform-origin:-80px 50%;
      transform:rotatey(-90deg);
    }
    .left4{
      background:#a1ff0a;
      border:2px solid white;
      grid-row-start:8;
      grid-row-end:9;
      grid-column-start:7;
      grid-column-end:8;
      transform-origin:left;
      transform:rotatey(-90deg);
    }
    .left5{
      background:#a1ff0a;
      border:2px solid white;
      grid-row-start:8;
      grid-row-end:9;
      grid-column-start:8;
      grid-column-end:9;
      transform-origin:-40px 50%;
      transform:rotatey(-90deg);
    }
    .left6{
      background:#a1ff0a;
      border:2px solid white;
      grid-row-start:8;
      grid-row-end:9;
      grid-column-start:9;
      grid-column-end:10;
      transform-origin:-80px 50%;
      transform:rotatey(-90deg);
    }
    .left7{
      background:#a1ff0a;
      border:2px solid white;
      grid-row-start:9;
      grid-row-end:10;
      grid-column-start:7;
      grid-column-end:8;
      transform-origin:left;
      transform:rotatey(-90deg);
    }
    .left8{
      background:#a1ff0a;
      border:2px solid white;
      grid-row-start:9;
      grid-row-end:10;
      grid-column-start:8;
      grid-column-end:9;
      transform-origin:-40px 50%;
      transform:rotatey(-90deg);
    }
    .left9{
      background:#a1ff0a;
      border:2px solid white;
      grid-row-start:9;
      grid-row-end:10;
      grid-column-start:9;
      grid-column-end:10;
      transform-origin:-80px 50%;
      transform:rotatey(-90deg);
    }
    `)
    response.end()
  } else {
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(`地址错误\n`)
    response.end()
  }

  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请在浏览器打开 http://localhost:' + port)

