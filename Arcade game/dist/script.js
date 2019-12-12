"use strict";

$(document).ready(function() {
    var posHorse = $(".horserun ").position();
    console.log(posHorse.left);
    function animateMe(targetElement, speed) {
        $(targetElement).css({
            left: "-200px"
        }), $(targetElement).animate({
            left: $(document).width() + 200
        }, {
            duration: speed,
            complete: function() {
                animateMe(this, speed);
            }
        });
    }
    function animateMe2(targetElement, speed) {
        $(targetElement).css({
            right: "-200px"
        }), $(targetElement).animate({
            right: $(document).width() + 200
        }, {
            duration: speed,
            complete: function() {
                animateMe2(this, speed);
            }
        });
    }
    $(".cactus-wrapper ");
    animateMe($("#object1"), 17e3), animateMe($("#object2"), 15e3), animateMe2($(".cactus-wrapper"), 5500), 
    animateMe2($(".cactus-wrapper--second"), 9500), animateMe2($(".coin"), 15500), $(document).keydown(function(e) {
        switch (e.preventDefault(), e.which) {
          case 32:
            $(".horserun ").stop().animate({
                bottom: "+=50"
            }, 200, function() {
                $(".horserun ").animate({
                    bottom: "54"
                }, 600);
            });
        }
    });
    var hitNumber = 15, pointNumber = 0, checkArr = [], checkArr2 = [], checkArr3 = [];
    window.setInterval(function() {
        1 !== $(".horserun").collision(".coin").length || checkArr3.includes(5) || (checkArr3.push(5), 
        pointNumber += 5, $(".coin").css("opacity", "0"), $(".point-box").find("span").html(pointNumber)), 
        1200 < $(".coin").offset().left && $(".coin").offset().left < 1321 && (checkArr3 = [], 
        console.log("tu je"), $(".coin").css("opacity", "1"));
    }, 200), window.setInterval(function() {
        1 !== $(".horserun").collision(".cactus-wrapper").length || checkArr.includes(5) || (checkArr.push(5), 
        hitNumber -= 1, $(".hit-box").find("span").html(hitNumber)), 700 < $(".cactus-wrapper").offset().left && $(".cactus-wrapper").offset().left < 1021 && (checkArr = []), 
        0 === hitNumber && (alert("game over, you won " + pointNumber + " points"), location.reload());
    }, 200), window.setInterval(function() {
        1 !== $(".horserun").collision(".cactus-wrapper--second").length || checkArr2.includes(5) || (checkArr2.push(5), 
        hitNumber -= 1, $(".hit-box").find("span").html(hitNumber)), 700 < $(".cactus-wrapper--second").offset().left && $(".cactus-wrapper--second").offset().left < 1021 && (checkArr2 = []), 
        0 === hitNumber && (alert("game over, you won " + pointNumber + " points"), location.reload());
    }, 200);
});

for (var index = 0; index < 50; index++) $(".stars-wrapper").append("<div class='stars s" + index + "'></div>");