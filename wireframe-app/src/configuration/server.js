const http = require('http');
const url = require('url');
const querystring = require('querystring');
const static = require('node-static');
const file = new static.Server('.', {
    cache: 0
});



function accept(req, res) {
    if (req.url === '/clients.json') {
        res.setHeader("Access-Control-Allow-Origin", "*"); // позволяем кросс-доменный запрос

        file.serve(req, res);
    }
}


// ------ запустить сервер -------


http.createServer(accept).listen(8081);

console.log('server is running (port 8081)');