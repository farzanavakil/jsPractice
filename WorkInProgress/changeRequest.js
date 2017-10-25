function validateTextArea() {
    if ($(this).children("textarea")[0].value.length == 0) { // text area is empty
        $(this).children("p")[0].innerHTML = "Please input valid input";
    }
}

$("input#submitButton").click(function () {
    //   var element = $("#debug");
    //    validateTextArea(element);
    
    //$("div.textAreaInput").forEach(validateTextArea($(this)))
    $("div.textAreaInput").each( validateTextArea );
});
