const express = require('express');

const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('\n\nHello, world! Sub1\n\n');
});
app.listen(port, () => {
    console.log(`Sub1 listening on port ${ port }`);
});