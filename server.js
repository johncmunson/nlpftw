const express = require('express')
const bodyParser = require('body-parser')
// const cors = require('cors')

const app = module.exports = express()

app.use(bodyParser.json())

app.listen(4000, () => {
    console.log("App is listening on port 4000");
});
