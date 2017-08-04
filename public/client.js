$(document).ready(function () {

    console.log("why");

    $.ajax({
        method: 'GET',
        url: '/module-madnez',
        success: function (response) {
            console.log("$GOT");
            $('#moneyDiv').append(response);
        }
    })

});