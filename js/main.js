const COLS = 20;
const ROWS = 20;

$(".btn").click(function(e) {
    let game = new Game(ROWS, COLS);
    let landingPage = $(".game-overlay");

    landingPage.removeClass("visible");

    let cell = $("<div/>");
    // for (let i = 0; i < ROWS; i++) {
    //     for (let j = 0; i < COLS; j++) {
    //         cell = $("<div/>");
    //         cell.appendTo($("#game-board"));
    //     }
    // }
    let iter = ROWS * COLS;
    for (let i = 0; i < iter; i++) {
        cell = $("<div/>").addClass("grid-item").addClass("sky").addClass("cell");
        cell.appendTo($("#game-board"));
    }
});