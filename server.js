const http = require("http");

const server = http.createServer(function (req, res){
    if (req.url === "/factss")
    {
        res.end("Nitin ka taste movies me kharaab hai aur Nishant mahaan hai");

    }
    res.end("welcome");
});

server.listen(1608);
