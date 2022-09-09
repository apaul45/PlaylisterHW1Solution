/**
 * Playlist.js
 * 
 * This class represents our playlist.
 * 
 * @author McKilla Gorilla
 * @author ?
 */
export default class Playlist {
    constructor(initId) {
        this.id = initId;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    setName(initName) {
        this.name = initName;
    }

    addSong(index) {
        this.songs.splice(index, 0, {
            title: "Unknown", 
            artist: "Unknown",
            youTubeId: "dQw4w9WgXcQ"
        });
        return this.songs.length;
    }

    addSongAtIndex(index, song) { 
        this.songs.splice(index, 0, song);
    }

    deleteSong(index) {
        this.songs.splice(index, 1);
    }

    getSongAt(index) {
        return this.songs[index];
    }

    setSongAt(index, song) {
        this.songs[index] = song;
    }

    setSongs(initSongs) {
        this.songs = initSongs;
    }

    moveSong(oldIndex, newIndex) {
        this.songs.splice(newIndex, 0, this.songs.splice(oldIndex, 1)[0]);
    }
}