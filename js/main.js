const COLS = 10;
const ROWS = 10;

$(".btn").click(function(e) {
    let game = new Game(ROWS, COLS);
    let landingPage = $(".game-overlay");

    landingPage.removeClass("visible");

    let cell = $("<div/>");
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; i < COLS; j++) {
            $("#game-board").append(cell);
        }
    }
});