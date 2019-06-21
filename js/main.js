const COLS = 30;
const ROWS = 20;
let game = new Game(ROWS, COLS);

$(".btn").click(function(e) {   
    let landingPage = $(".game-overlay");
    landingPage.removeClass("visible");

    let cell = $("<div/>");
    let block = $("<div/>");
    let world = game.world;

    for (let i = 0; i < ROWS; i++) {
        block = $("<div/>").css("display", "block").addClass("block").addClass("row" + i);
        block.appendTo($("#game-board"));
        for (let j = 0; j < COLS; j++) {
            cell = $("<div/>").addClass("sky").addClass("cell").
            attr("data-pos", [world[i][j].row, world[i][j].col]);
            cell.appendTo($(".row" + i));
        }
    }

    //Setting grass
    for (let i = 0; i < COLS; i++) {
        $(`*[data-pos="${[12, i]}"]`).addClass("grass");
    }

    //Setting ground
    for (let i = 13; i < ROWS; i++) {
        for (let j=0; j < COLS; j++) {
            $(`*[data-pos="${[i, j]}"]`).addClass("ground");
        }
    }

    for (let i = 4; i < 7; i++) {
        $(`*[data-pos="${[11,i]}"]`).addClass("leaves");
    }

    $(`*[data-pos="${[10,5]}"]`).addClass("leaves");

    for (let j = 8; j < 17; j++) {
        $(`*[data-pos="${[4,j]}"]`).addClass("clouds");
    }

    for (let i = 9; i < 17; i++) {
        if (i == 14) {
            continue;
        }
        $(`*[data-pos="${[3,i]}"]`).addClass("clouds");
    }

    for (let i = 13; i < 15; i++) {
        $(`*[data-pos="${[5,i]}"]`).addClass("clouds");
    }

    $(`*[data-pos="${[2,11]}"]`).addClass("clouds");

    $(`*[data-pos="${[11,29]}"]`).addClass("gravel");

    for (let i = 22; i < 24; i++) {
        $(`*[data-pos="${[11,i]}"]`).addClass("gravel");
    }

    //tree
    for (let i = 11; i > 8; i--) {
        $(`*[data-pos="${[i,26]}"]`).addClass("oak");   
    }

    for (let i = 6; i < 9; i++) {
        for (let j = 25; j < 28; j++) {
            $(`*[data-pos="${[i,j]}"]`).addClass("leaves");       
        }
    }

});