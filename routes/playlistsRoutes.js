const express = require('express');
const playlistController  = require('../controllers/playlistsController');

const router = express.Router();

// POST /playlists/songs
router.post('/songs', playlistController.addSong);

// GET /playlists/songs
router.get('/songs',  playlistController.getSongs);

// GET /playlists/songs/:id
router.get('/songs/:id', playlistController.playSong);

module.exports = router;