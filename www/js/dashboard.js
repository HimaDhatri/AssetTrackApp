function bindEvents() {
    
    document.addEventListener("backbutton", onBackKeyDown, false);
}
function onBackKeyDown() {
   
    navigator.notification.confirm(
            'Do you want to exit!', // message
             onConfirm,            // callback to invoke with index of button pressed
            'AsseTrack',           // title
            ['Yes', 'No']         // buttonLabels
        );
}

function onConfirm(buttonIndex) {
    //alert('You selected button ' + buttonIndex);
    if (buttonIndex == 1) {
        navigator.app.exitApp();
    }
}