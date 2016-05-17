function changeDimensions() {
  $(".thumbnail").each(function(){
    var imgwidth = $(this).outerWidth();
    var imgheight = $(this).outerHeight();
    $(this).next('.product-information').css('width', imgwidth + 'px');
    $(this).next('.product-information').css('height', imgheight + 'px');
    // console.log(imgwidth + 'px')
    // console.log(imgheight + 'px')
  });
};

$(window).load(function() {
  changeDimensions();
});

$(window).resize(function() {
  changeDimensions();
});
