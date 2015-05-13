Cufon.replace('h1,h2,.nvg a,.nvl h5');
jQuery(function($) { $('ul.gallery').galleria({								  
			history   : true, 
			clickNext : true,
			insert    : '#test',
			onImage   : function(image,caption,thumb) { 
				if(! ($.browser.mozilla && navigator.appVersion.indexOf("Win")!=-1) ) { 
					image.css('display','none').fadeIn(1000);
				}
				caption.css('display','none').fadeIn(1000);
				var _li = thumb.parents('li');
				_li.siblings().children('img.selected').fadeTo(500,0.3);
				thumb.fadeTo('fast',1).addClass('selected');
				image.attr('title','Next image >>');
			},
			onThumb : function(thumb) { 
				var _li = thumb.parents('li');
				var _fadeTo = _li.is('.active') ? '1' : '0.3';
				thumb.css({display:'none',opacity:_fadeTo}).fadeIn(1500);
				thumb.hover(
					function() { thumb.fadeTo('fast',1); },
					function() { _li.not('.active').children('img').fadeTo('fast',0.3); }
				)
			}
		});
	});




var showAllText = "Show all data";
var hideAllText = "Hide all data";
$(document).ready(function () {
  $("#cs ul.m1").parent().prepend('<h4 class="g1"><a href="#" title="' + showAllText + '" class="s6">' + showAllText + '</a></h4>');
  $('#cs h4.g1 a').click(function () {
    if ($(this).text() == showAllText) {
      $(this).attr({
        title: hideAllText
      });
      $(this).text(hideAllText);
      $(this).addClass('s7');
      $(this).removeClass('s6');
      $("#cs ul.m1 li.s6").addClass('s7');
      $("#cs ul.m1 li.s6").removeClass('s6');
    } else {
      $(this).attr({
        title: showAllText
      });
      $(this).text(showAllText);
      $(this).addClass('s6');
      $(this).removeClass('s7');
      $("#cs ul.m1 li.s7").addClass('s6');
      $("#cs ul.m1 li.s7").removeClass('s7');
    }
  });
  
 
 
   $("#cs ul.m1 > li").prepend('<a href="#" title="Click to expand extended data" class="g2">Expand</a>'); 
  $("#cs ul.m1 a.g2").click(function () {
    var $this = $(this);
    if ($this.parent('li').is('.s6')) {
      $this.text('Collapse');
      $this.attr({
        title: "Click to collapse extended data"
      });
      $this.parent('li').removeClass('s6');
      $this.parent('li').addClass('s7');
    } else {
      $this.text('Expand');
      $this.attr({
        title: "Click to expand extended data"
      });
      $this.parent('li').removeClass('s7');
      $this.parent('li').addClass('s6');
    }
    return false;
  });
  });    	