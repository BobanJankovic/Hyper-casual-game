$(document).ready(function () {
  var horse = $(".horserun ");
  var posHorse = horse.position();
  console.log(posHorse.left);
  var cactus = $(".cactus-wrapper ");
  var animateMe = function (targetElement, speed) {
    $(targetElement).css({
      left: '-200px'
    });
    $(targetElement).animate({
      'left': $(document).width() + 200
    }, {
      duration: speed,
      complete: function () {

        animateMe(this, speed);
      }
    });

  };

  var animateMe2 = function (targetElement, speed) {
    $(targetElement).css({
      right: '-200px' //ove pixele smanji i nece seckati kada se krece
    });
    $(targetElement).animate({
      'right': $(document).width() + 200
    }, {
      duration: speed,
      complete: function () {
        animateMe2(this, speed);
      }
    });
  };
  animateMe($('#object1'), 17000);
  animateMe($('#object2'), 15000);
  animateMe2($('.cactus-wrapper'), 5500);
  animateMe2($('.cactus-wrapper--second'), 9500);
  animateMe2($('.coin'), 15500);

  $(document).keydown(function (e) {
    e.preventDefault();
    switch (e.which) {
      case 32:
        $(".horserun ").stop().animate({
          bottom: "+=50"
        }, 200, function () {
          $(".horserun ").animate({
            bottom: "54"
          }, 600);
        });
        break;
    }
  });


  let hitNumber = 15;
  let pointNumber = 0;
  let hit_list = [];
  let hit_list2 = [];
  let checkArr = [];
  let checkArr2 = [];
  let hit_list3 = [];
  let checkArr3 = [];


  window.setInterval(function () {
    hit_list3 = $('.horserun').collision('.coin');
    if (hit_list3.length === 1 && !checkArr3.includes(5)) {
      checkArr3.push(5);
      pointNumber += 5;
      $('.coin').css("opacity", "0");
      $('.point-box').find('span').html(pointNumber);
    }
    if ($('.coin').offset().left > 1200 && $('.coin').offset().left < 1321) {
      checkArr3 = [];
      console.log("tu je")
      $('.coin').css("opacity", "1");
    }
  }, 200);

  window.setInterval(function () {
    hit_list = $('.horserun').collision('.cactus-wrapper');
    if (hit_list.length === 1 && !checkArr.includes(5)) {
      checkArr.push(5);
      hitNumber -= 1;
      $('.hit-box').find('span').html(hitNumber);
    }
    if ($('.cactus-wrapper').offset().left > 700 && $('.cactus-wrapper').offset().left < 1021) {
      checkArr = [];
    }
    if (hitNumber === 0) {
      alert("game over, you won " + pointNumber + " points")
      location.reload();
    }
  }, 200);

  window.setInterval(function () {
    hit_list2 = $('.horserun').collision('.cactus-wrapper--second');
    if (hit_list2.length === 1 && !checkArr2.includes(5)) {
      checkArr2.push(5);
      hitNumber -= 1;
      $('.hit-box').find('span').html(hitNumber);
    }
    if ($('.cactus-wrapper--second').offset().left > 700 && $('.cactus-wrapper--second').offset().left < 1021) {
      checkArr2 = [];
    }
    if (hitNumber === 0) {
      alert("game over, you won " + pointNumber + " points")
      location.reload();
    }
  }, 200);

});



for (let index = 0; index < 50; index++) {
  $('.stars-wrapper').append("<div class='stars s" + index + "'></div>")

};