const http = require('http');
const fs = require('fs');
const port = 1001;

const server  = http.createServer((req, res)=>{
    let data = fs.readFileSync('index.html').toString();
    res.end(data);
})

server.listen(port, ()=>{
    console.log(`hi i am listening u on ${port} 😊`);
});