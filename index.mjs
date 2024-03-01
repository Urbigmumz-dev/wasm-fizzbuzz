import express from 'express';
import http from 'https';
import bodyParser from 'body-parser';

const app = express();
const PORT = 8080;

app.use(express.static('doom/'));
app.use(bodyParser.urlencoded({ extended: true, }));

app.get('/', (req, res) => {
    res.sendFile('index.html', {
        root: 'doom/',
    }, (err) => {
        if (err) {
            console.error(err.message);
        }
    });
});

http.createServer(app).listen(PORT, (err) => {
    if (!err) {
        console.log('ur mom');
    } else {
        console.error(err.message);
    }
});