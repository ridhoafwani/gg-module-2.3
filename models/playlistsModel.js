const playlists = [];
let nextSongId = 0;

module.exports = class Playlists {
    static addSong(title, artists, url) {
        const newSong = {
            id: nextSongId++,
            title,
            artists,
            url,
            play_count: 0
        }
        playlists.push(newSong)
    }

    static playSong(id) {
        const song = playlists.find(s => s.id == id);
        if(!song){
            throw new Error('Song not found');
        }
        song.play_count++;
        return song;
    }

    static getSongs() {
        const songList = playlists
        songList.sort((a, b) => {
            return b.play_count - a.play_count;
        });
        return songList;
    }
}