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
                world[i].push(new Cell(i, j, "sky"));
            }
        }

        //Setting grass
        for (let i = 0; i < cols; i++) {
            world[12][i]["gp"] = "grass"; 
        }

        //Setting ground
        for (let i = 13; i < rows; i++) {
            for (let j=0; j < cols; j++) {
                world[i][j]["gp"] = "ground";
            }
        }
        for (let j = 4; j < 7; j++) {
            world[11][j]["gp"] = "leaves";
        }
        world[10][5]["gp"] = "leaves";

        //Clouds
        for (let j = 8; j < 17; j++) {
            world[4][j]["gp"] = "clouds";
        }
        for (let j = 9; j < 17; j++) {
            if (j == 14) {
                continue;
            }
            world[3][j]["gp"] = "clouds";
        }
        for (let j = 13; j < 15; j++) {
            world[5][j]["gp"] = "clouds";
        }
        world[2][11]["gp"] = "clouds";

        //Gravel
        world[11][29]["gp"] = "gravel";
        for (let j = 22; j < 24; j++) {
            world[11][j]["gp"] = "gravel";
        }

        //Tree
        for (let i = 11; i > 8; i--) {
            world[i][26]["gp"] = "oak";   
        }
        for (let i = 6; i < 9; i++) {
            for (let j = 25; j < 28; j++) {
                world[i][j]["gp"] = "leaves";       
            }
        }

        return world;
    }
}