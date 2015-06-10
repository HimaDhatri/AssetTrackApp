$(function () {
    $("#signout").click(function () {
        navigator.notification.confirm(
  'Are you sure you want to logout?',
  function (button) {
      if (button == "1" || button == 1) {
          window.localStorage.removeItem("username");
          window.localStorage.removeItem("password");
          window.location = "index.html";
      }
      // alert( 'Success: ' + button );
  },
  'Asset Track',
  'Yes,No'
);

    });

});