$(document).ready(function () {

    // Function to validate Text Areas
    // It expects $(this) to have a div containing a textbox
    validateTextArea = function () {
        console.log($(this));
        if ($(this).find("textarea")[0].value.length == 0) {
            $(this).find("p")[0].innerHTML = "Please input valid input";
        }
    }

    validateCheckbox = function() {
        console.log("hello");
        if ($(this).find('input[type="checkbox" input:checked]').length == 0) {
            $(this).children("p")[0].innerHTML = "Please check least one box";
        }
    }
 

    $("#submitButton").click(function () {
        //checking for required fields
        var $val = 0;
        //check text fields
        $("input.required").each(function () {
            if (($(this).val()) == "") {
                $(this).addClass("error");
                $val = 1
            }
            else {
                $(this).removeClass("error");
            }

        });
        if ($val > 0) {
            alert('Please enter the hightlighted values');
        }
        //checking the text areas
        $("div.validateTextArea").each(validateTextArea);
        //checking the checkboxes
        $("div.checkboxInput").each(validateCheckbox);

        if (!$('#chkcat input[type="checkbox"]').is(':checked')) {
            alert("Please check at least change category.");
        }
        if (!$('#chanAff input[type="checkbox"]').is(':checked')) {
            alert("Please check at least one change affect.");
        }
    });

    
});