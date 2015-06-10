$(function () {
    $("#signout").click(function () {
        window.localStorage.removeItem("username");
        window.localStorage.removeItem("password");
        window.location = "index.html";
    });

});