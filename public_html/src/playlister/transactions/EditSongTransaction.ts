import jsTPS_Transaction from "../../common/jsTPS.js"
import { Song } from "../../types.js";
import PlaylisterModel from "../PlaylisterModel.js";

export default class EditSong_Transaction extends jsTPS_Transaction {
    model: PlaylisterModel;
    newSong: Song;
    index: number;
    oldSong: Song;

    constructor(initModel: PlaylisterModel, initSong: Song, initIndex: number) {
        super();
        this.model = initModel;
        this.newSong = initSong;
        this.index = initIndex;
        this.oldSong = this.model.currentList!.getSongAt(this.index);
    }

    undoTransaction() {
        this.model.editSong(this.index, this.oldSong);
    }
    
    doTransaction() {
        this.model.editSong(this.index, this.newSong);
    }
}