const http = require('http');
const fs = require('fs/promises');

const host = 'localhost';
const port = 8000;

const server = http.createServer(async function (req, res) {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        try {
            const data = await fs.readFile('./index.html', 'utf8');
            res.write(data);
        } catch (err) {
            console.error(err);
        } finally {
            res.end();
        }
    } else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        try {
            const data = await fs.readFile('./about.html', 'utf8');
            res.write(data);
        } catch (err) {
            console.error(err);
        } finally {
            res.end();
        }
    } else if (req.url === '/contact-me') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        try {
            const data = await fs.readFile('./contact-me.html', 'utf8');
            res.write(data);
        } catch (err) {
            console.error(err);
        } finally {
            res.end();
        }
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        try {
            const data = await fs.readFile('./404.html', 'utf8');
            res.write(data);
        } catch (err) {
            console.error(err);
        } finally {
            res.end();
        }
    }
}).listen(8080);