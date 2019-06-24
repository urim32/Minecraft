const COLS = 30;
const ROWS = 20;
let cellWidth = 30;
let cellHeight = 30;
let cloudPos = 0;
let treePos = 0;
let game = new Game(ROWS, COLS);

$(".btn").click(function(e) {   
    let landingPage = $(".game-overlay");
    landingPage.removeClass("visible");

    $("#game-board").css("width", `${COLS * cellWidth}px`).css("height", `${ROWS * cellWidth}px`)

    let cell = $("<div/>");
    let block = $("<div/>");
    let world = game.world;

    for (let i = 0; i < ROWS; i++) {
        block = $("<div/>").css("display", "block").addClass("block").addClass("row" + i);
        block.appendTo($("#game-board"));
        for (let j = 0; j < COLS; j++) {
            cell = $("<div/>").addClass(world[i][j]["gp"]).addClass("cell").
            attr("data-pos", [world[i][j].row, world[i][j].col]);
            cell.appendTo($(".row" + i));
        }
    }
});

$(".tool-item").click(function(e) {
    let tool = $(this).attr("id");
    game.changeTool(tool);

    $(".cell").click(function(event) {
        let target = event.target;
        let point = target.getAttribute("data-pos").split(",");
        let x = point[0];
        let y = point[1];
        let currentClass = target.getAttribute("class");
        currentClasses = currentClass.split(" ");
        let currentTile = "";
        for (let i = 0; i < currentClasses.length; i++) {
            if (currentClasses[i] == "grass" || currentClasses[i] == "gravel" || currentClasses[i] == "leaves" ||
                currentClasses[i] == "oak") {
                    currentTile = currentClasses[i];
                }
        }

        game.removeTile(x,y);
        $(this).removeClass(currentClass);
        $(this).addClass("cell");
        $(this).addClass(game.world[x][y]["gp"]);
        if (game.rules[game.currentTool].includes(currentTile)) {
            $("selectedItem").attr("class", null);
            $("#selectedItem").attr("class", currentClass);
        }
       
    });

})

$("#selectedItem").click(function(e) {
    $(".cell").click(function(event) {
        
    })
})