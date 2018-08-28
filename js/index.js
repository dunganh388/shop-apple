
// wow animate
$(document).ready(function() {
	new WOW().init();
});

// controller 
 $(document).ready(function() {
  $('.close_controll').click(function(event) {
    $('.controller_navbar').hide();
  });
 });

// button select eng + usd
$(document).ready(function() {
	var x, i, j, selElmnt, a, b, c;
		x = document.getElementsByClassName("custom-select");
		for (i = 0; i < x.length; i++) {
		  selElmnt = x[i].getElementsByTagName("select")[0];

		  a = document.createElement("DIV");
		  a.setAttribute("class", "select-selected");
		  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
		  x[i].appendChild(a);

		  b = document.createElement("DIV");
		  b.setAttribute("class", "select-items select-hide");
		  for (j = 0; j < selElmnt.length; j++) {

		    c = document.createElement("DIV");
		    c.innerHTML = selElmnt.options[j].innerHTML;
		    c.addEventListener("click", function(e) {

		        var y, i, k, s, h;
		        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
		        h = this.parentNode.previousSibling;
		        for (i = 0; i < s.length; i++) {
		          if (s.options[i].innerHTML == this.innerHTML) {
		            s.selectedIndex = i;
		            h.innerHTML = this.innerHTML;
		            y = this.parentNode.getElementsByClassName("same-as-selected");
		            for (k = 0; k < y.length; k++) {
		              y[k].removeAttribute("class");
		            }
		            this.setAttribute("class", "same-as-selected");
		            break;
		          }
		        }
		        h.click();
		    });
		    b.appendChild(c);
		  }
		  x[i].appendChild(b);
		  a.addEventListener("click", function(e) {

		      e.stopPropagation();
		      closeAllSelect(this);
		      this.nextSibling.classList.toggle("select-hide");
		      this.classList.toggle("select-arrow-active");
		    });
		}
		function closeAllSelect(elmnt) {

		  var x, y, i, arrNo = [];
		  x = document.getElementsByClassName("select-items");
		  y = document.getElementsByClassName("select-selected");
		  for (i = 0; i < y.length; i++) {
		    if (elmnt == y[i]) {
		      arrNo.push(i)
		    } else {
		      y[i].classList.remove("select-arrow-active");
		    }
		  }
		  for (i = 0; i < x.length; i++) {
		    if (arrNo.indexOf(i)) {
		      x[i].classList.add("select-hide");
		    }
		  }
		}

		document.addEventListener("click", closeAllSelect);
});

// typerwriter

$(document).ready(function() {
	(function ($) {
  "use strict";

  $.fn.placeholderTypewriter = function (options) {
    var settings = $.extend({
      delay: 50,
      pause: 1000,
      text: []
    }, options);
    function typeString($target, index, cursorPosition, callback) {

      var text = settings.text[index];
      var placeholder = $target.attr('placeholder');
      $target.attr('placeholder', placeholder + text[cursorPosition]);

      if (cursorPosition < text.length - 1) {
        setTimeout(function () {
          typeString($target, index, cursorPosition + 1, callback);
        }, settings.delay);
        return true;
      }

      callback();
    }

    function deleteString($target, callback) {
      var placeholder = $target.attr('placeholder');
      var length = placeholder.length;
      $target.attr('placeholder', placeholder.substr(0, length - 1));
      if (length > 1) {
        setTimeout(function () {
          deleteString($target, callback)
        }, settings.delay);
        return true;
      }

      callback();
    }

    function loopTyping($target, index) {
      $target.attr('placeholder', '');
      typeString($target, index, 0, function () {
        setTimeout(function () {
          deleteString($target, function () {
            loopTyping($target, (index + 1) % settings.text.length)
          })

        }, settings.pause);
      })

    }

    return this.each(function () {

      loopTyping($(this), 0);
    });

  };

}(jQuery));
});

$(function() {
	 var placeholderText = [
    "What do you need ?",
    "press the search...",
  ];

  $('#search').placeholderTypewriter({text: placeholderText});
});

// sticky menu
$(document).ready(function() {
	(function($) {

	var Navigation    = $(".wrap_menu"),
		CurrentScroll = $(document).scrollTop(),
		NavHeight     = Navigation.offset().top;
		
	function NavSticky() {
		var navScroll = $(document).scrollTop();

		if ( navScroll > NavHeight ) { 
			Navigation.addClass('sticky'); 
		} else { 
			Navigation.removeClass('sticky');
		}

		if ( navScroll > CurrentScroll ) { 
			Navigation.removeClass('nav-appear');
		} else { 
			Navigation.addClass('nav-appear');
		}

		CurrentScroll = $(document).scrollTop();
	}
	
	$(window).scroll(NavSticky);
	
})(jQuery);

});

$(document).ready(function() {
	$('.custom_owl_1').owlCarousel({
    loop:true,
    margin:15,
    autoplay: true,
    slideSpeed: 5000,
    nav:true,
    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
 })
});

// quantity
$(document).ready(function() {
	    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });
});

// thumbnail owl
$(document).ready(function() {
  var bigimage = $("#big");
  var thumbs = $("#thumbs");
  //var totalslides = 10;
  var syncedSecondary = true;

  bigimage
    .owlCarousel({
    items: 1,
    slideSpeed: 2000,
    nav: true,
    autoplay: true,
    dots: false,
    loop: true,
    responsiveRefreshRate: 200,
    navText: [
      '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
      '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
    ]
  })
    .on("changed.owl.carousel", syncPosition);

  thumbs
    .on("initialized.owl.carousel", function() {
    thumbs
      .find(".owl-item")
      .eq(0)
      .addClass("current");
  })
    .owlCarousel({
    items: 4,
    dots: true,
    nav: true,
    navText: [
      '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
      '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
    ],
    smartSpeed: 200,
    slideSpeed: 500,
    slideBy: 4,
    responsiveRefreshRate: 100
  })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if loop is set to false, then you have to uncomment the next line
    //var current = el.item.index;

    //to disable loop, comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }
    //to this
    thumbs
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = thumbs.find(".owl-item.active").length - 1;
    var start = thumbs
    .find(".owl-item.active")
    .first()
    .index();
    var end = thumbs
    .find(".owl-item.active")
    .last()
    .index();

    if (current > end) {
      thumbs.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      thumbs.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      bigimage.data("owl.carousel").to(number, 100, true);
    }
  }

  thumbs.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).index();
    bigimage.data("owl.carousel").to(number, 300, true);
  });
});

// countdown
$(document).ready(function() {
	//Set countdown goal here   
   var goalDay = '2018/9/2 00:00:00'

   var timerId = 0;
   timerId = setInterval(function() {
     var t = Date.parse(goalDay) - Date.parse(new Date());
     if (t < 0) {
       $(".days").text("0");
       $(".hours").text("0");
       $(".minutes").text("0");
       $(".seconds").text("0");
       clearInterval(timerId);
     } else {
       var seconds = Math.floor((t / 1000) % 60);
       var minutes = Math.floor((t / 1000 / 60) % 60);
       var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
       var days = Math.floor(t / (1000 * 60 * 60 * 24));
       $(".days").text(days);
       $(".hours").text(hours);
       $(".minutes").text(minutes);
       $(".seconds").text(seconds);
     }
   }, 1000); // repeat forever, polling every second

});


// owl carousel_2
$(document).ready(function() {
	$('.custom_owl_2').owlCarousel({
    loop:true,
    margin:15,
    autoplay: true,
    slideSpeed: 5000,
    nav:true,
    navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
 })
});

// owl carousel_3
$(document).ready(function() {
	$('.custom_owl_3').owlCarousel({
    loop:true,
    margin:15,
    autoplay: true,
    slideSpeed: 5000,
    nav:true,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
 })
});

// owl carousel_4
$(document).ready(function() {
	$('.custom_owl_4').owlCarousel({
    loop:true,
    margin:15,
    autoplay: true,
    slideSpeed: 4000,
    nav:true,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
 })
});


// owl carousel_5
$(document).ready(function() {
	$('.custom_owl_5').owlCarousel({
    loop:true,
    center:true,
    items:2,
    margin:10,
    autoplay: true,
    slideSpeed: 5000,
    nav:true,
    // navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:4
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
 })
});

$(document).ready(function() {
			// Show or hide the sticky footer button
			$(window).scroll(function() {
				if ($(this).scrollTop() > 200) {
					$('.go-top').fadeIn(200);
				} else {
					$('.go-top').fadeOut(200);
				}
			});
			
			// Animate the scroll to top
			$('.go-top').click(function(event) {
				event.preventDefault();
				
				$('html, body').animate({scrollTop: 0}, 500);
			})
		});

// slide up_item
$(document).ready(function(){
    $(".title_list_item_home").click(function(){
        $(".main_list_item_home").slideToggle("");
    });
});

// menumobile

$(document).ready(function() {
  $('.click_menu_respon').click(function(event){
    $('.menu_responsive').removeClass('show_menu');
    event.stopPropagation();
    $('.menu_responsive').toggleClass('show_menu');
  });

  $('.menu_responsive').click(function(event){
     event.stopPropagation();
    });

  $('body').click(function(){
            if($('.menu_responsive').hasClass('show_menu')){
                $('.menu_responsive').removeClass('show_menu');
            }
        });

  $('.close_menu').click(function(){
    $('.menu_responsive').removeClass('show_menu');
  });
});


// tool-tip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

// grid - list
$(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();
    	$('#products .item').addClass('list-group-item');});

    $('#grid').click(function(event){event.preventDefault();
    	$('#products .item').removeClass('list-group-item');
    		$('#products .item').addClass('grid-group-item');
    	});
});

// toogle (on) list-grid
$(document).ready(function() {
	$(".fix_tooltip").click(function(){
		$('.fix_tooltip').toggleClass('on');
	})
});


// filter price
$(document).ready(function() {
		var lowerSlider = document.querySelector('#lower');
		var  upperSlider = document.querySelector('#upper');

		document.querySelector('#two').value=upperSlider.value;
		document.querySelector('#one').value=lowerSlider.value;

		var  lowerVal = parseInt(lowerSlider.value);
		var upperVal = parseInt(upperSlider.value);

		upperSlider.oninput = function () {
		    lowerVal = parseInt(lowerSlider.value);
		    upperVal = parseInt(upperSlider.value);

		    if (upperVal < lowerVal + 4) {
		        lowerSlider.value = upperVal - 4;
		        if (lowerVal == lowerSlider.min) {
		        upperSlider.value = 4;
		        }
		    }
		    document.querySelector('#two').value=this.value
		};

		lowerSlider.oninput = function () {
		    lowerVal = parseInt(lowerSlider.value);
		    upperVal = parseInt(upperSlider.value);
		    if (lowerVal > upperVal - 4) {
		        upperSlider.value = lowerVal + 4;
		        if (upperVal == upperSlider.max) {
		            lowerSlider.value = parseInt(upperSlider.max) - 4;
		        }
		    }
		    document.querySelector('#one').value=this.value
		};
});

