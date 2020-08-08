const express = require('express')

const app = express()

app.use('/api/widget', require('./routes/widget.routes'))

const PORT = 5000

app.listen(PORT, () => console.log(`App start on port ${PORT}`))