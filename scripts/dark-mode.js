$("#knowMoreBtn").click(function() {
    $("#resumeContainer").slideToggle(500, function() {
        if ($(this).is(":visible")) {
            $(this).css("display", "flex");
        }
    });
});

$("#changeModeBtn").click(function() {
   $("body").toggleClass("dark-mode");
});

