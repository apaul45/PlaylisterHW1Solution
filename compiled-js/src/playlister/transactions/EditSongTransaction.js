import jsTPS_Transaction from "../../common/jsTPS.js";
export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initModel, initSong, initIndex) {
        super();
        this.model = initModel;
        this.newSong = initSong;
        this.index = initIndex;
        this.oldSong = this.model.currentList.getSongAt(this.index);
    }
    undoTransaction() {
        this.model.editSong(this.index, this.oldSong);
    }
    doTransaction() {
        this.model.editSong(this.index, this.newSong);
    }
}
