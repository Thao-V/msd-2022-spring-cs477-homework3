const fs = require('fs');

// require('http').createServer(
//     (req, res) => {
//         const url = new URL(req.url, `https://${req.headers.host}/`);
//         //const url = new URL('/p/a/t/h?course1=nodejs&course2=angular#hash', 'https://user:pass@sub.host.com:8080');
//         const method = req.method;

//         if (url.pathname === '/') {
//             return res.end('Hello World!'); // "retrun" here exits the function execution, otherwise continue.
//         }

//         if (url.pathname.includes('/users')) {
//             if (method === 'GET') {
//                 res.end(url.searchParams.toString())
//             } else if (method === 'POST') {
//                 const body = [];
//                 req.on('data', (chunk) => {
//                     body.push(chunk);
//                 });
//                 req.on('end', () => {
//                     const parsedBody = Buffer.concat(body).toString();
//                     console.log(parsedBody);
//                     res.end(parsedBody);
//                 });
//             }
//         }
//     }
// ).listen(3000, () => console.log('Listening on 3000...'))

var options = {
    key: fs.readFileSync('./privateKey.key'),
    cert: fs.readFileSync('./certificate.crt')
};

const server = require('https')
    .createServer(options);
server.on('request',
    (req, res) => {
        const url = new URL(req.url, `https://${req.headers.host}/`);
        //const url = new URL('/p/a/t/h?course1=nodejs&course2=angular#hash', 'https://user:pass@sub.host.com:8080');
        const method = req.method;

        if (url.pathname === '/') {
            return res.end('Hello World!'); // "retrun" here exits the function execution, otherwise continue.
        }

        if (url.pathname.includes('/users')) {
            if (method === 'GET') {
                res.end(url.searchParams.toString())
            } else if (method === 'POST') {
                const body = [];
                req.on('data', (chunk) => {
                    body.push(chunk);
                });
                req.on('end', () => {
                    const parsedBody = Buffer.concat(body).toString();
                    console.log(parsedBody);
                    res.end(parsedBody);
                });
            }
        }
    });

server.listen(443, console.log('Listen to 443 - https...'));