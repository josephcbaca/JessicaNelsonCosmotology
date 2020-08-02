// Gallery Page

$(document).ready(function () {
    $(".sidenav").sidenav();
});
// Anytime I add an image in ./assets/totems/ I need to add number to code
let nums = [1, 2, 3, 4, 5, 6]

for (let i = 0; i < nums.length; i++) {

    let imgTotem = $("<img>");
    imgTotem.addClass("totem col s12");
    imgTotem.attr("src", `./assets/totems/totem-${nums[i]}.png`);

    $("#totemPole").append(imgTotem);

}


// Contact Page
$("#copy-text").on("click", function () {
    copyToClipBoard("josephcbaca@gmail.com");
    popUpClipBoard()
});

const copyToClipBoard = (str) => {
    const el = document.createElement("textarea");
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
};

function popUpClipBoard() {
    $("#popUp").show();
    setTimeout(function () {
        $("#popUp").hide();
    }, 300);

}