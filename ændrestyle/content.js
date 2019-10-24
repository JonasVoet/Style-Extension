chrome.runtime.sendMessage({ todo: "showPageAction" });

chrome.runtime.onMessage.addListener(function (request, sender, sendRespons) {
    if (request.todo == "changeColor") {
        let addColor = '#' + request.clickedColor;
        $('h2').css('color', addColor);
    }
});