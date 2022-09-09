import jsTPS_Transaction from "../../common/jsTPS.js"

export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initModel) {
        super();
        this.model = initModel;
        this.index = this.model.currentList.songs.length;
    }

    doTransaction() {
        this.index = this.model.addSong(this.index);
    }
    
    undoTransaction() {
        this.model.deleteSong(this.index);
    }
}