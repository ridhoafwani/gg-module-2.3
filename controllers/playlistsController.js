const PlaylistModel = require('../models/playlistsModel');
const songValidation = require('../validations/songValidation');

exports.getSongs = (req, res, next) => {
    const songs = PlaylistModel.getSongs()
    res.status(200).json({
        message: 'Songs fetched successfully.',
        songs: songs
    })
};

exports.playSong = (req, res, next) => {
    const songId = req.params.id;
    try {
        const song = PlaylistModel.playSong(songId);
        res.status(200).json({
        message: `Playing song with id = ${songId}`,
        songUrl: song.url
    })
    }catch(err) {
        return res.status(404).json({
            message: err.message
        })
    
    }
}

exports.addSong = (req, res, next) => {
    const {error} = songValidation(req.body)
    if(error) return res.status(400).json({
        message: error.details[0].message
    })

    const {title, artists, url} = req.body;
    PlaylistModel.addSong(title, artists, url);
    res.status(201).json({
        message: 'Song added successfully.'
    })
}