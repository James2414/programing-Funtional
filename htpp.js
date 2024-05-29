const http = require('http');

const server = http.createServer((req, res) => {

    if(req.url=== '/about') {
        res.write('this is the about page')
       
    }    
    res.end(`<h1>¡OPss!!</h1>
    <p>its's you in crack </p>
    `)
 
});

server.listen(5000, (err, res) => {
    if (err) {
        console.log(err)
    } else {
        console.log('server is running on port 5000')
    }
})