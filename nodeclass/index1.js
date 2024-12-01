const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parseUrl = url.parse(req.url, true);
    // console.log(parseUrl,"jwdhwujnw");
    // console.log(req);


    const { method, pathname } = parseUrl;
    const queryParams = parseUrl.query;
    console.log(req.body);
    
    res.setHeader('Content-Type', 'application/json');
    if (pathname.startsWith('/items')) {
        if (req.method === 'GET') {
            res.writeHead(200);
            res.end(JSON.stringify({ message: 'fetched items', params: queryParams }))
        }
        if (req.method === 'POST') {
            // let body = '';
            // req.on('data', chunk => {
            //     body += chunk;
            // })
            res.writeHead(200);
            res.end(JSON.stringify({
                message:"created successfully",
            }))
            // req.on('end', () => {
            //     const data = JSON.parse(body);
            //     res.writeHead(201);
            //     res.end(JSON.stringify({ message: 'item created', data }));
            // })
        }
        if (req.method === 'PUT') {
            // let body = '';
            // req.on('data', chunk => {
            //     body += chunk;
            // })
            res.writeHead(200);
            res.end(JSON.stringify({
                message:"updated successfully",
            }))
            // res.on('end', () => {
            //     const data = JSON.parse(body);
            //     res.writeHead(200);
            //     res.end(JSON.stringify({ message: 'item updated', data }));
            // })
        }
        if (req.method === 'DELETE') {
            res.writeHead(200);
            res.end(JSON.stringify( {
                message:"deleted successfully",
                data:req.body
            }))
        }
        else {
            res.writeHead(404);
            res.end(JSON.stringify({ error: "not found" }))
        }
    }
})

server.listen(4000, () => {
    console.log('server listening on port 4000');

})