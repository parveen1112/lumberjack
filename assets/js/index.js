"use strict";
(function (window, $) {
//    var jsData , ntfoundData , errData = {};
    $.ajax({
        url: 'errors',
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
                        $(panel).slideUp("slow");
                       // panel.style.display = "none";
                    } else {
                        $(panel).slideToggle("slow");
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


function testbutton() {
    var val = [];
    $(':checkbox:checked').each(function(i){
      val[i] = $(this).val();
    });


console.log(val);
// http://localhost:8282/api/exec
    $.ajax({
        url: 'http://localhost:8282/api/exec',
        method: 'POST',
        data: {data : val},
        success: function (data) {
            console.log("data:: ", data);
        },
        error: function (err, b, c) {
            console.log('AjaxError', err, b, c)
        }
    });


}