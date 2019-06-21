class World {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.world = this.generateWorld(rows, cols);
    }

    generateWorld(rows, cols) {
        let world = [];
        for (let i = 0; i < rows; i++) {
            world.push([]);
            for (let j = 0; j < cols; j++) {
                world[i].push(new Cell(i, j));
            }
        }

        return world;
    }
}