const COLS = 30;
const ROWS = 20;
let game = new Game(ROWS, COLS);

$(".btn").click(function(e) {   
    let landingPage = $(".game-overlay");
    landingPage.removeClass("visible");

    let cell = $("<div/>");
    let block = $("<div/>");
    let x = game.world;
    let y = game.world;
    
    for (let i = 0; i < ROWS; i++) {
        block = $("<div/>").css("display", "block").addClass("block").addClass("row" + i);
        block.appendTo($("#game-board"));
        for (let j = 0; j < COLS; j++) {
            cell = $("<div/>").addClass("sky").addClass("cell").
            attr("data-pos", [x[i][j].row, y[i][j].col]);
            cell.appendTo($(".row" + i));
        }
    }
});