function imageSlider() {
  var $imgs = $('#slider > li');
  var totalImgs = $imgs.length;
  var imgWidth = 1000;
  var totalWidth = imgWidth * totalImgs;
  
  var $slider = $('#slider').width(totalWidth);
  
  var count = 1;
  var dirLeft = true;
  setInterval(function() {    
    if ( dirLeft ) {
      $slider.animate({
        left: '-=' + imgWidth + 'px'
      }, 500, function() {
        count++;
        if ( (count % totalImgs) == 0 ) {
          dirLeft = !dirLeft;
          count--;
        }
        
      });
    } else {
      $slider.animate({
        left: '+=' + imgWidth + 'px'
      }, 500, function() {
        count--;
        if ( (count % totalImgs) == 0 ) {
          dirLeft = !dirLeft;
          count++;
        }
      });
    }
  }, 2500);
}