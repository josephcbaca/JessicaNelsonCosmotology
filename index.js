// Whole site
$(document).ready(function () {
    $(".sidenav").sidenav();
});

// totems.html
// Anytime I add an image in ./assets/totems/ I need to add number to code
let nums = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

for (let i = 0; i < nums.length; i++) {

    let totemRow = $("<div>");
    totemRow.addClass("row");
    totemRow.attr("id", `row-${nums[i]}`)

    let beginDiv = $("<div>");
    beginDiv.addClass("col s3");
    beginDiv.attr("id", `begin-div-${nums[i]}`)

    let imgTotem = $("<img>");
    imgTotem.addClass("totem col s6 materialboxed z-depth-1");
    imgTotem.attr("src", `./assets/totems/totem-${nums[i]}.png`);

    let endDiv = $("<div>");
    endDiv.addClass("col s3");
    beginDiv.attr("id", `end-div-${nums[i]}`)

    $("#totemPole").append(totemRow);
    $(`#row-${nums[i]}`).append(beginDiv);
    $(`#row-${nums[i]}`).append(imgTotem);
    $(`#row-${nums[i]}`).append(endDiv);
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

// pattern_work.html
  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });