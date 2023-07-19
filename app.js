const express = require('express')
const playlistsRoutes = require('./routes/playlistsRoutes');

const app = express()
const port = 3000

app.use(express.json());

app.use('/playlists', playlistsRoutes)

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})