// now we want to connect to server and for connecting to server we need a protocol which is HTTP so

const http = require('http');

const  server = http.createServer((req, res)=>{
    console.log(req.url);
    if (req.url.includes("/post")) {
      return res.end("This is post page");
      
    }
    else if (req.url.includes("/user")){
        return res.end("This is user page");
        
    }
    else
     res.end("welcome to the server");
});

const port = 1001;
server.listen(port, () => {
  console.log(`Hi, Listening on ${port} 😊`);
});

