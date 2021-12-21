const express = require ('express');
const app = express();
const path = require ('path')

app.listen (process.env.POR || 3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.get('/', (req, res) => {
    let htmlPath = path.resolve(__dirname,'./views/home.html')
    res.sendFile(htmlPath)
});

app.get('/register', (req, res) => {
    let htmlPath1 = path.resolve(__dirname,'./views/register.html')
    res.sendFile(htmlPath1)
});

app.get('/login', (req, res) => {
    let htmlPath2 = path.resolve(__dirname, './views/login.html')
    res.sendFile(htmlPath2)
})

