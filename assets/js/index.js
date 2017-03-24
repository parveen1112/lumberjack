"use strict";

(function (window, $) {
    $.ajax({
        url: '/host/error?host=localhost:1337',
        success: function (data) {
            var html = new EJS({
                url: '/templates/contentpage.ejs'
            }).render(data);
            $(".feeddata").append(html);
            var acc = document.getElementsByClassName("accordion");
            var i;
            for (i = 0; i < acc.length; i++) {
                acc[i].onclick = function () {
                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    if (panel.style.display === "block") {
                        panel.style.display = "none";
                    } else {
                        panel.style.display = "block";
                    }
                }
            }
        },
        error: function (err, b, c) {
            console.log('AjaxError', err, b, c)
        }
    });



})(window, jQuery);
