 //   判断英文显示区域
var langtype = window.location.search.split('=')[1]; //语言类型

// 页面懒加载 
let lazyLoadByDefault = function (imgs) {
  var H = $(window).height();
  var S = $(window).scrollTop();
  for (var i = 0; i < imgs.length; i++) {
      var rect = imgs[i].getBoundingClientRect();
      if (rect.top <= H) {
          if (imgs[i].getAttribute("data-loading") == "lazy" && imgs[i].getAttribute("data-src")) {
              let src = decodeURI(imgs[i].getAttribute("data-src"));
              imgs[i].src = src;
              imgs[i].removeAttribute("data-loading");
          }
      }
  }
};
window.onload = window.onscroll = function () {
  var imgs = $('img');
  lazyLoadByDefault(imgs);
};
// 头部导航
// 滚动页面背景色变白
$(window).scroll(function (e) {
var istop = $(window).scrollTop();
  if (istop > 40) {
    $(".topnaverbox").addClass("navbg");
    $(".topnaverbox").removeClass("navpos");
  } else {
    $(".topnaverbox").addClass("navpos");
    $(".topnaverbox").removeClass("navbg");
  }
});
// 页面宽度大于1000px的情况下
if ($(window).width() >= 1000) {
  // 二级导航移入显示
  $(function () {
    $(".dropdown").mouseover(function () {
      $(this).children("a").addClass("show").next("ul").addClass("show");
    })
    $(".dropdown").mouseleave(function () {
      $(this).children("a").removeClass("show").next("ul").removeClass("show");
    });
  });
  // 三级导航移入显示
  $(function () {
    $(".dropdown3").mouseover(function () {
      $(this).children(".navdrop3").addClass("show").next("ul").addClass("show");
    })
    $(".dropdown3").mouseleave(function () {
      $(this).children(".navdrop3").removeClass("show").next("ul").removeClass("show");
    });
  });
}
// 动效
new WOW().init();