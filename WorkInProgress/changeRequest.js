$(document).ready(function () {

    // Function to validate Text Areas
    // It expects $(this) to have a div containig textbox
    function validateTextArea() {
        if ($(this).children("textarea")[0].value.length == 0) { // text area is empty
            $(this).children("p")[0].innerHTML = "Please input valid input";
        }
    }

    $("input#submitButton").click(function () {
        $("div.textAreaInput").each(validateTextArea);
    });

});