const http = require("http");
const fs = require("fs");
const path = require("path");

const pathToIndex = path.join(__dirname, 'static', 'index.html');
const indexHtmlFile = fs.readFileSync(pathToIndex);
const scriptFile = fs.readFileSync(path.join(__dirname, 'static', 'script.js'));
const styleFile = fs.readFileSync(path.join(__dirname, 'static', 'style.css'));

const server = http.createServer((req, res) =>{ // создаем сервер
    switch (req.url){
        case "/": // если пользовать прошел на главную страницу
            return res.end(indexHtmlFile); // пользователю отобразиться html файл, путь к которому мы прописали в 5 строке и прочитали в 6
        case "/script.js": return res.end(scriptFile);
        case "/style.css": return res.end(styleFile);
    }
    res.statusCode = 404; // если return в 10 строке не сработал - функция не прерывается и мы передаем статус 404
    return res.end('Error 404'); // и выводим пользователю ошибку, а можно было бы вывести специально html страницу с ошибкой
})

server.listen(3000);