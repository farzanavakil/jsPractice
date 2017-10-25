$(document).ready(function () {
    
    // Function to validate Text Areas
    // It expects $(this) to have a div containig textbox
    function validateTextArea() {
        console.log($(this));
        if ($(this).children("textarea")[0].value.length == 0) { // text area is empty
            $(this).children("p")[0].innerHTML = "Please input valid input";
        }
    }
    
    function validateCheckbox(){
        console.log("hello");
        if ( $(this).find('input[type="checkbox" input:checked]').length == 0 ) {
            $(this).children("p")[0].innerHTML = "Please check least one box";
        }
    }
    
    $("#submit").click(function () {
        $("div.textAreaInput").each(validateTextArea);
        $("div.checkboxInput").each(validateCheckbox);
    });
    
});