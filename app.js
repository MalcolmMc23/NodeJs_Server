const http = require("http");
const fs = require("fs");
const mime = require('mime');
mime.getType("txt");
mime.getExtension('text/plain')
const port = 3000;

const server = http.createServer(function (req, res) {
    let mimeType = mime.getType('html')
    res.writeHead(200, { "Content-Type": mimeType })
    fs.readFile("index.html", function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write("Error: File Not Found");
        } else {
            res.write(data);
        }
        res.end()
    })

    // res.writeHead(200, { "Content-Type": "application/javascript" })
    // fs.readFile("main.js", function (error, data) {
    //     if (error) {
    //         res.writeHead(404);
    //         res.write("Error: File Not Found");
    //     } else {
    //         res.write(data)
    //     }
    // })
});

server.listen(port, function (error) {
    if (error) {
        console.log("something went wrong", error);
    } else {
        console.log("server is listening on port " + port)
    }
})
