import jsTPS_Transaction from "../../common/jsTPS.js"
import { Song } from "../../types.js";
import PlaylisterModel from "../PlaylisterModel.js";

export default class AddSong_Transaction extends jsTPS_Transaction {
    model: PlaylisterModel;
    index: number;

    constructor(initModel: PlaylisterModel) {
        super();
        this.model = initModel;
        this.index = this.model.currentList!.songs.length;
    }

    doTransaction() {
        const newSong: Song = {
            title: "Untitled",
            artist: "Unknown",
            youTubeId: "dQw4w9WgXcQ"
        }

        this.model.addSongAtIndex(this.index, newSong);
    }
    
    undoTransaction() {
        this.model.deleteSong(this.index);
    }
}