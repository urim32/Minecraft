class Game extends World {
    constructor(rows, cols) {
        super(rows, cols);
        this.currentTool = null;
        this.tile = null;
        this.rules = {
            "axe": ["oak", "leaves"],
            "pickaxe": ["gravel"],
            "shoval": ["grass"]
        }
    }

    changeTool(tool) {
        this.currentTool = tool;
    }

    removeTile(x,y) {
        if (this.currentTool === "pickaxe" && this.world[x][y]["gp"] === "gravel") {
            this.world[x][y]["gp"] = "sky";
        } else if (this.currentTool === "shoval" && this.world[x][y]["gp"] === "grass") {
            this.world[x][y]["gp"] = "sky";
        } else if (this.currentTool === "axe" && (this.world[x][y]["gp"] === "oak" || 
                   this.world[x][y]["gp"] === "leaves")) {
            this.world[x][y]["gp"] = "sky";
        }
    }

    // addInventory(gp) {
    //     if        
    // }
}