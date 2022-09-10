import { PlaylistInterface, Song } from "../types";

export default class Playlist implements PlaylistInterface {
    id: number;
    name!: string;
    songs!: Song[];

    constructor(initId: number) {
        this.id = initId;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getSongAt(index: number) {
        return this.songs[index];
    }

    setName(initName: string) {
        this.name = initName;
    }

    setSongAt(index: number, song: Song) {
        this.songs[index] = song;
    }

    setSongs(initSongs: Song[]) {
        this.songs = initSongs;
    }

    addSong(index: number) {
        this.songs.splice(index, 0, {
            title: "Unknown", 
            artist: "Unknown",
            youTubeId: "dQw4w9WgXcQ"
        });
        return this.songs.length;
    }

    addSongAtIndex(index: number, song: Song) { 
        this.songs.splice(index, 0, song);
    }

    deleteSong(index: number) {
        this.songs.splice(index, 1);
    }

    moveSong(oldIndex: number, newIndex: number) {
        this.songs.splice(newIndex, 0, this.songs.splice(oldIndex, 1)[0]);
    }
}