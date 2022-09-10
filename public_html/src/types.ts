export interface Song {
    title: string
    artist: string
    youTubeId: string
}

export interface PlaylistInterface {
    id: number
    name: string
    songs: Song[]

    getName: Function
    getId: Function
    getSongAt: Function,

    setName: Function
    setSongAt: Function
    setSongs: Function

    addSong: Function, 
    addSongAtIndex: Function
    deleteSong: Function
    moveSong: Function
}