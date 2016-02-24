$(document).ready(function() {

  $("#required").validate({
    focusInvalid: false,

    onkeyup: false,
    onfocusout: false,

    errorElement: "div",

    errorPlacement: function(error, element) {
      error.appendTo("div#errors");
    },
    rules: {
      "form-name": {
        required: true,
        minlength: 5
      },
      "form-email": {
        required: true,
        minlength: 5
      },
      "form-phone": {
        required: true,
        number: true
      },
      "form-password": {
        required: true,
      }
    },
    messages: {
      "form-name": {
        required: "You must enter your full name",
        minlength: "First name must be at least 5 characters long"
      },
      "form-email": {
        required: "You must enter your email",
        number: "Phone number must contain digits only"
      },
      "form-phone": {
        required: "You must enter your phone number",
        number: "Phone number must contain digits only"
      },
      "form-password": {
        required: "You must enter your password",
      }
    }

    $("button").submit(function(){
    alert("Thank you for registering with us!");
  });

});
