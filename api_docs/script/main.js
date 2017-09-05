var $ = window.$;

var headerHeight = 103;
var windowHeight = $(window).height();
var sidebarHeight;
var $navigationLinks;
var $sections;
var sectionIdTonavigationLink;
var throttle = function(fn, interval){
  var lastCall;
  var timeoutId;
  return function(){
    var now = new Date().getTime();
    if (lastCall && now < (lastCall + interval)) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function(){
        lastCall = now;
        fn.call();
      }, interval - (now - lastCall));
    } else {
      lastCall = now;
      fn.call();
    }
  };
};
var highlightNavigation = function(){
  var scrollPosition = $(window).scrollTop();

  $sections.each(function callback() {
    var currentSection = $(this);
    var sectionTop = currentSection.offset().top;
    if (scrollPosition >= (sectionTop - 100)) {
      var id = currentSection.attr('id');
      var $navigationLink = sectionIdTonavigationLink[id];
      if (!$navigationLink.hasClass('active')) {
        $navigationLinks.removeClass('active');
        $navigationLink.addClass('active');
        history.replaceState({}, '', "#"+id);
      }
      return false;
    }
    return null;
  });
};
var swaggerSuccessCallback = function(){
  sidebarHeight = $('#sidebar').height() + 40;

  $navigationLinks = $('#sidebarUl > li > a');
  $sections = $($('.apiItem').get().reverse());
  // scrollAdded = false;
  sectionIdTonavigationLink = {};
  $sections.each(function callback() {
    var id = $(this).attr('id');
    sectionIdTonavigationLink[id] = $("#sidebarUl>li>a[href=\"#"+id+"\"]");
  });

  if (window.location.hash) {
    var idDiv = document.getElementById(window.location.hash.substr(1));
    if(idDiv){
      $('html, body').animate({
        scrollTop: $(idDiv).offset().top - 50,
      }, 500);
    }
  }


  $(window).scroll(throttle(highlightNavigation, 100));
  $('#pageContents').on('click', '.tabHeaderItem', function tabClickCallback() {
    var index = $(this).attr('data-id');
    var tabs = $(this).parent().next();
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $(tabs).children().removeClass('active');
    $(tabs).children().eq(index).addClass('active');
  });
  $($navigationLinks).on('click', function linkClickCallback(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $(document.getElementById($(this).attr('href').substr(1))).offset().top - 50,
    }, 500);
  });
};

$(document).ready(function(){
  setTimeout(swaggerSuccessCallback, 1000);
});
