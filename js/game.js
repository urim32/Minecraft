class Game extends World {
    constructor(rows, cols) {
        super(rows, cols);
        this.currentTool = null;
        this.tile = null;
    }
}