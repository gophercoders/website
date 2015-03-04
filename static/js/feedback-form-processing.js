// Using validation to check for the presence of an input
$( "#feedbackform" ).submit(function( event ) {
    clearAllWarnings();
    // If .required's value's length is zero
    var allRequiredFieldsPresent = true;

    allRequiredFieldsPresent = fieldPresent("name", allRequiredFieldsPresent);
    allRequiredFieldsPresent = fieldPresent("email", allRequiredFieldsPresent);
    allRequiredFieldsPresent = fieldPresent("subject", allRequiredFieldsPresent);
    allRequiredFieldsPresent = fieldPresent("feedback", allRequiredFieldsPresent);

    if(!allRequiredFieldsPresent) {
            event.preventDefault();
    } else {
        event.preventDefault()
        // Run $.ajax() here
        console.log("name had contents");
        // convert form data to JSON
        var formData = JSON.stringify($("#feedbackform").serializeArray());
        console.log(formData)

        var request = $.ajax({
            url: $(this).attr("action"),
            type: "post",
            dataType: "json",
            data: formData,
            processData: false,
            crossDomain: true
        })

        request.done(function (data, textStatus, jqXHR ) {
            console.log("Success called!");
            console.log("Data retutrned was ");
            console.log(data);
            if(data["Valid"] !== undefined) {
                if(data["Valid"] === true) {
                    processSuccessResponse();
                } else {
                    // error case
                    // data is already in JSON format at this point
                    processErrorResponse(data);
                }
            }
        })
    }
});

function fieldPresent(inputElement, allFieldsRequiredPresent) {
    console.log("inputElement: " + inputElement)
    if ( fieldNameElement(inputElement).val().length === 0 ) {
       displayInputWarning(inputElement, "This field is required.");
        if(allFieldsRequiredPresent) {
            return false;
        }
    } else {
//        var formGroup = formGroupNameElement(inputElement);
//        if ( formGroup.hasClass("has-error")) {
//            formGroup.removeClass("has-error");
//        }
        return allFieldsRequiredPresent;
    }
}

function processSuccessResponse(){
    window.location.replace("http://gophercoders.com/thank-you");
}

function processErrorResponse(data) {
    console.log("Error Data retutrned was ");
    console.log(data);
    console.log("Oops we have an error");
    console.log("Valid: " + data["Valid"]);
    clearAllWarnings();
    if (data["BadFields"] !== undefined ) {
        if(data["BadFields"] instanceof Array) {
            console.log("BadFields: " + data["BadFields"]);
            for(i=0; i<data["BadFields"].length; i++){
                console.log("BadFields: " + data["BadFields"][i])
                displayInputWarning(data["BadFields"][i], "Error: This field contains invalid content.");
            }
        } else {
            // this is not an array for some reason!
            // => Server side bug!
        }
    }
}

function clearAllWarnings() {
    clearWarning("#name-form-group");
    clearWarning("#email-form-group");
    clearWarning("#subject-form-group");
    clearWarning("#feedback-form-group");
}

function clearWarning(formGroup) {
    if ( $(formGroup).hasClass("has-error")) {
        $(formGroup).removeClass("has-error");
    }
    $("div").remove(".alert", ".alert-danger")
}

function displayInputWarning(fieldName, message) {
    formGroupNameElement(fieldName).addClass("has-error");
    var newElementHTML = "<div class=\"alert alert-danger\"><p>"+message+"</p></div>";
    var newElement = $(newElementHTML);
    newElement.insertBefore(fieldNameElement(fieldName));
}

function formGroupNameElement(fieldName) {
    return $("#"+fieldName+"-form-group");
}

function fieldNameElement(fieldName) {
    return $("#"+fieldName);
}
