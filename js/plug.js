$("document").ready(function () {
    $(".loading").fadeOut();
    var local = "css/"+ localStorage.getItem("color") +".css";
    $(".changer-color").attr("href", (local !== "css/themes.css" ||"css/themes2.css" ||"css/themes3.css" ||"css/themes4.css" ||"css/themes5.css" ? local : "css/themes.css"));
    
    $(`.themes .color span[data-color = ${localStorage.getItem("color")}]`).addClass("active").siblings().removeClass("active");
});
                    /* button to-up */
$(window).scroll(function () {
    "use strict";
    
    if($("button.custom-btn.to-up").offset().top > 1200) {
        $("button.custom-btn.to-up").css("opacity","1");
    }
    else{
        $("button.custom-btn.to-up").css("opacity","0")
    }
});

$("button.custom-btn.to-up").click(function () {
    "use strict";
    $("html ,body").animate({
        scrollTop: 0
    },1000)
});
                    /* button to-up */

                    /* themes */
$(".themes .color .setting").click(function () {
    $(".themes .color").toggleClass("active");
});

$(".themes .color span").click(function () {
    "use strict";
    var x = $(this).data("color");
    $(".changer-color").attr("href","css/"+ x +".css");
    $(".themes .color span").removeClass("active");
    $(this).addClass("active");
    var y = $(this);
    localStorage.setItem("active",y);
    localStorage.setItem("color",x);
});
                    /* themes */

                    /* link page to li-nav */
$(".navbar li").click(function (e) {
    "use strict";
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $( "#"  + $(this).data("scroll")).offset().top + 1
    },1000)
});

$(window).scroll(function () {
    "use strict";
    $(".a77").each(function () {
        if($(window).scrollTop() > $(this).offset().top) {
            var i = $(this).attr("id");
            $(".navbar li").removeClass("active");
            $(".navbar li[data-scroll ='"+i+"']").addClass("active");
        }
    })
});
                    /* link page to li-nav */

                    /* add active on li */
$(".navbar li").click(function () {
    "use strict";
    $(".navbar li.active").removeClass("active");
    $(this).addClass("active");
});
                    /* add active on li */

                        /* toggle nav in mobile */
function toggle() {
    "use strict";
    $("ul.navbar").fadeToggle();
}
                        /* toggle nav in mobile */

                    /* custom-btn */
$("button.custom-btn").mouseenter(function () {
    "use strict";
    $(this).find("p.down").slideDown(50);
    $(this).find("p.up").slideUp(50);
});

$("button.custom-btn").mouseleave(function () {
    "use strict";
    $(this).find("p.up").slideDown(50);
    $(this).find("p.down").slideUp(50);
});
                    /* custom-btn */

                    /* support */
$(".support .item").click(function () {
    "use strict";
    if($(this).hasClass("active")){
        $(this).addClass("active");
    } else {
        $(".support .item.active").removeClass("active");
    }
    $(this).toggleClass("active");
})

$(".support .item").click(function () {
    $(".support .item").find("p").slideUp();
    $(".support .item.active").find("p").slideDown();
    $(".support .item").find("span").text("+");
    $(".support .item.active").find("span").text("-")
});
                    /* support */