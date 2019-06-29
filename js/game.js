class Game extends World {
    constructor(rows, cols) {
        super(rows, cols);
        this.currentTool = null;
        this.tile = null;
        this.rules = {
            "axe": ["oak", "leaves"],
            "pickaxe": ["gravel"],
            "shoval": ["grass", "ground"]
        }
    }

    changeTool(tool) {
        this.currentTool = tool;
    }

    checkToolMatch(tool, tile) {
        if (this.rules[tool].includes(tile)) {
            return true;
        } else {
            return false;
        }
    }

    removeTile(x,y) {
        this.world[x][y]["gp"] = "sky";
    }

    addInventory(x,y,gp) {
        if (this.world[x][y]["gp"] === "sky") {
            this.world[x][y]["gp"] = gp;
        }        
    }
}