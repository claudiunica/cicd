const express = require(`express`);

const app = express();
const port = process.argv.slice(2)[0];


//listen to port 3000 by default
app.listen(port, () => {
    console.log(`Started listing to port ${port}`);
});

module.exports = app;