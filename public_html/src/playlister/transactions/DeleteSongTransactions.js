import jsTPS_Transaction from "../../common/jsTPS.js"

export default class DeleteSong_Transaction extends jsTPS_Transaction {
    constructor(initModel, initIndex) {
        super();
        this.model = initModel;
        this.index = initIndex;
        this.initSong = this.model.currentList.getSongAt(this.index);
    }

    undoTransaction() {
        console.log(this.initSong);
        this.model.addSongAtIndex(this.index, this.initSong);
    }
    
    doTransaction() {
        this.model.deleteSong(this.index);
    }
}