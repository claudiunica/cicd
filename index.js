const app = require(`express`)();
const port = process.argv.slice(2)[0];


//listen to port 3000 by default
app.listen(port || 3000, () => {
    console.log(`Started listing to port ${port ? port : 3000}`);
});

app.get('/hello', (req, res) => {
    //test build
    res.send('hello world');
})

module.exports = app;