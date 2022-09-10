import jsTPS_Transaction from "../../common/jsTPS.js";
export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initModel) {
        super();
        this.model = initModel;
        this.index = this.model.currentList.songs.length;
    }
    doTransaction() {
        const newSong = {
            title: "Untitled",
            artist: "Unknown",
            youTubeId: "dQw4w9WgXcQ"
        };
        this.model.addSongAtIndex(this.index, newSong);
    }
    undoTransaction() {
        this.model.deleteSong(this.index);
    }
}
