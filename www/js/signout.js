$(function () {


    function onConfirm(buttonIndex) {
        //alert('You selected button ' + buttonIndex);
        if (buttonIndex == 1) {
            window.localStorage.removeItem("username");
            window.localStorage.removeItem("password");
            window.location = "index.html";
        }
    }

    // Show a custom confirmation dialog
    //
    function showConfirm() {
       
        navigator.notification.confirm(
            'Do you want to logout!', // message
             onConfirm,            // callback to invoke with index of button pressed
            'AsseTrack',           // title
            ['Yes', 'No']         // buttonLabels
        );
    }
    $("#signout").click(function () {
        
        showConfirm();
    });

});