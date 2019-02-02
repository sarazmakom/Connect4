var curPlayer = "Red";

$(".column").on("click", function(e) {
    var slotsInColumn = $(e.currentTarget).find(".slot");
    for (var i = 5; i >= 0; i--) {
        if (!slotsInColumn.eq(i).hasClass("Red")) {
            if (!slotsInColumn.eq(i).hasClass("Yellow")) {
                break;
            }
        }
    }
    slotsInColumn.eq(i).addClass(curPlayer);

    if (checkForVictory(slotsInColumn)) {
        $(".victory").append("<div>" + curPlayer + " wins!" + "</div>");
    } else if (checkForVictory($(".row" + i))) {
        $(".victory").append("<div>" + curPlayer + " wins!" + "</div>");
    } else if (diagonalWin($(".slot"))) {
        $(".victory").append("<div>" + curPlayer + " wins!" + "</div>");
    }

    $("button").on("mousedown", function(e) {
        location.reload();
    });

    switchPlayers();
});

function switchPlayers() {
    if (curPlayer == "Red") {
        curPlayer = "Yellow";
    } else {
        curPlayer = "Red";
    }
}

function checkForVictory(slots) {
    var counter = 0;

    for (var i = 0; i < slots.length; i++) {
        if (slots.eq(i).hasClass(curPlayer)) {
            counter++;
            if (counter == 4) {
                return true;
            }
        } else {
            counter = 0;
        }
    }
}

function diagonalWin(slots) {
    for (var i = 0; i < slots.length; i++) {
        if (
            slots.eq(i).hasClass(curPlayer) &&
            slots.eq(i + 7).hasClass(curPlayer) &&
            slots.eq(i + 14).hasClass(curPlayer) &&
            slots.eq(i + 21).hasClass(curPlayer)
        ) {
            return true;
        } else if (
            slots.eq(i).hasClass(curPlayer) &&
            slots.eq(i + 5).hasClass(curPlayer) &&
            slots.eq(i + 10).hasClass(curPlayer) &&
            slots.eq(i + 15).hasClass(curPlayer)
        ) {
            return true;
        }
    }
}
