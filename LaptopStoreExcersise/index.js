const fs = require('fs');
const http = require('http');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const laptopData = JSON.parse(json);                                   // Ovie dve linii se za prikazuvanje fajlovi

const server = http.createServer((req, res)=>{

    const pathName = url.parse(req.url, true).pathName;
    const id = url.parse(req.url, true).query.id;

    if(pathName === '/products' || pathName === '/'){
        res.writeHead(200, { 'Content-type': 'text/html'}); // 200 e standard za 'error' koga neso e pogresno stavame 404(statusen kod)
        res.end('This is the PRODUCTS page!');

    }else if(pathName === '/laptop' && id < laptopData.length){
        res.writeHead(200, { 'Content-type': 'text/html'});
        res.end(`This is the laptop page for laptop ${id}!`);

    }else{
        res.writeHead(404, { 'Content-type': 'text/html'}); 
        res.end('URL was not found on this server!');
    }
        
});          // 2 i server linijata e kako da napravime server

server.listen(8080, '127.0.0.1', () =>{                  // Mestenje porta 8080 i lokalna ip adresa(http://127.0.0.1:8080/)
    console.log('Listening for request now!')
});