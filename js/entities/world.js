class Wrold {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.world = this.generateWorld(rows, cols);
    }

    generateWorld(rows, cols) {
        let world = [];
        let row = [];
        for (let i = 0; i < this.rows; i++) {
            world.push(row);
            for (let j = 0; j < this.cols; j++) {
                world[i][j] = new Cell(rows, cols);
            }
        }
    }
}