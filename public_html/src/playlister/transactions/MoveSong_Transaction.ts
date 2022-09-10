import jsTPS_Transaction from "../../common/jsTPS.js"
import PlaylisterModel from "../PlaylisterModel.js";
/**
 * MoveSong_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author ?
 */
export default class MoveSong_Transaction extends jsTPS_Transaction {
    model: PlaylisterModel;
    oldIndex: number;
    newIndex: number;

    constructor(initModel: PlaylisterModel, initOldIndex: number, initNewIndex: number) {
        super();
        this.model = initModel;
        this.oldIndex = initOldIndex;
        this.newIndex = initNewIndex;
    }

    doTransaction() {
        this.model.moveSong(this.oldIndex, this.newIndex);
    }
    
    undoTransaction() {
        this.model.moveSong(this.newIndex, this.oldIndex);
    }
}