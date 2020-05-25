const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("Hello World!")
})

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`server running on port ${port}\nvisit http://127.0.0.1:${port}`))