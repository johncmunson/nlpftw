const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Language = require('@google-cloud/language')

const app = module.exports = express()

app.use(cors())
app.use(bodyParser.json())

// Your Google Cloud Platform project ID
const projectId = 'YOUR_PROJECT_ID'

// Instantiates a client
const languageClient = Language({
    projectId: projectId
})

app.post('/api/analyze', function(req, res) {
    languageClient.annotate(req.body.content)
        .then(results => {
            res.status(200).json(results)
        })
})

app.listen(4000, () => {
    console.log("App is listening on port 4000")
})
