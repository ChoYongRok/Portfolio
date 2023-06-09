$(document).ready(function () {

  $(window).scroll(function () {
    $("#txt1").text($(this).scrollTop());
  });


  //브라우저 높이 가져오기
  let wh = $(window).height();

  /*브라우저 창 사이즈 변경시___________ */
  $(window).resize(function () {
    wh = $(window).height();
    $("html,body").stop().animate({ scrollTop: wh * a }, 300);
  });


  $("header li").click(function () {
    let num = $(this).index();
    $("html,body").stop().animate({ scrollTop: wh * num }, 300);
    $("header li").eq(num).addClass("active");
    $("header li").eq(num).siblings().removeClass("active");
  });



  /*   $(window).on("scroll",function(){
      if($(window).scrollTop() > 400){
        $("#con2 h3").animate({top:"30%",opacity:"1"}, 1000);
        $("#con2 p").delay(100).animate({top:"50%",opacity:"1"}, 1000);
      }
    }); */



  let a = 0;  //페이지번호
  let area_n = $(".area").length;  //섹션개수
  let wheel = true;

  $(".area").on("mousewheel DOMMouseScroll", function (e, delta) {

    e.preventDefault();  //요소의 기본기능해제
    if (wheel) {
      let n = $(this).index();

      if (delta < 0) { //휠을 아래로 돌렸다면
        a = n + 1;
      } else { //휠을 위로 돌렸다면
        a = n - 1;
      }

      if (a <= 0) { a = 0; }
      if (a >= area_n - 1) { a = area_n - 1; }

      $("#tt").text(a);
      $("header li").eq(a).addClass("active");
      $("header li").eq(a).siblings().removeClass("active");
      $("html,body").stop().animate({ scrollTop: wh * a }, 300);

    }

  });

  /* intro */
  let shape_cnt = 20;
  let $shape = $(".shape");
  let mouseX, mouseY, time_1 = 1, time_2 = 2, density = 20;

  for (let i = 0; i < shape_cnt; i++) {
    if (i % 2) {
      $("<div/>", { id: "item_" + i }).addClass("layer1").appendTo($shape);
    } else {
      $("<div/>", { id: "item_" + i }).addClass("layer2").appendTo($shape);
    }
  }

  function shape_move(e) {
    mouseX = e.pageX / density;
    mouseY = e.pageY / density;
    TweenLite.to(".layer1", time_1, { x: mouseX, y: -mouseY, ease: Power4.easeOut }),
      TweenLite.to(".layer2", time_2, { x: -mouseX, y: mouseY, ease: Power4.easeOut });
  }

  $('.shape').on('mousemove', shape_move);



  /* design */
  /*   $(".tab li").click(function(){
  
      
      for(i=0;i<6;i++){
        $(".tab li").eq(i).find("img").attr({"src":"image/tab"+i+".png"});
      }
  
  
  
      let inum = $(this).index();
      $(this).find("img").attr("src","image/tabon"+ inum +".png")
  
      $(".i1").removeClass("active"); 
      let result = $(this).attr("data-alt");
      $(".tabContents div").removeClass("active");
      $(`#${result}`).addClass("active");
  
    }); */


});