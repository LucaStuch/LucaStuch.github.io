function ToDayMode() {
    $.cookie('userThemePreference', 'day', {
        path: '/'
    });
    $("#proPic").attr("src", "assets/img/dayMode/profile-img.jpg");
    $("#styleContainer").attr("href", "assets/css/dayMode.css");
    $("#changeMode").attr("currentMode", "day");
    $("#modeIcon").attr("class", "bx bx-moon");
    $("#spanMode").text("Night Mode");
}

function ToNightMode() {
    $.cookie('userThemePreference', 'night', {
        path: '/'
    });
    $("#proPic").attr("src", "assets/img/nightMode/profile-img.jpg");
    $("#styleContainer").attr("href", "assets/css/nightMode.css");
    $("#changeMode").attr("currentMode", "night");
    $("#modeIcon").attr("class", "bx bx-sun");
    $("#spanMode").text("Day Mode");
}