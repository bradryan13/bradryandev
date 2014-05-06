$( document ).ready(function() {

if(!Modernizr.touch){ 
    $(window).stellar({
    	horizontalScrolling: false,
    	verticalOffset: 0,
    	horizontalOffset: 0
    });
}

if(!Modernizr.touch){ 
	$('#page').attr('data-snap-ignore', 'true');
}

//enable mobile-menu
    //

    var snapper = new Snap({
        element: document.getElementById('page'),
        disable: 'right',
        flickThreshold: 30,
        addBodyClasses: false
    });

       /* Get reference to toggle button, the html element with ID "open-left" */

    var myToggleButton = document.getElementById('open-left')

    /* Add event listener to our toggle button */
    myToggleButton.addEventListener('click', function() {

        if (snapper.state().state == "left") {
            snapper.close();
        } else {
            snapper.open('left');
        }

    });

  	 $(window).on('resize', function() {
      snapper.close();
    });



	if ($("#hero").hasClass("wide-hero")) {
		$("#content .row").addClass( "wide");
	};



var $container = $('#social');

$container.imagesLoaded( function(){

    var $container = $('#social .inner').isotope({
    itemSelector: '.item',
    masonry: {
    columnWidth: '.grid-sizer'
    }
});
});



if ($(window).width() < 739) {
  		$('#main-menu').prependTo('body');
};

if ($(window).width() < 739) {
	$('#games').prependTo('#content > .row');
};

	responsive_resize(); 
});



window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);

	$( ".more" ).click(function() {
		$( ".more-sub, .social" ).toggle();
		$( this ).toggleClass("open");
	});

    $(document).foundation();
 
	// Change width value on user resize, after DOM
	$(window).resize(function(){
	     responsive_resize();
	});
 
  function responsive_resize(){
	 var current_width = $(window).width();
    //do something with the width value here!
	 if(current_width < 481)
      $('html').addClass("m320").removeClass("m768").removeClass("desktop").removeClass("m480");
 

 
    else if(current_width < 739) {
      $('html').addClass("m768").removeClass("desktop").removeClass("m320").removeClass("tablet");
		$('#games').prependTo('#content > .row');
      	$('#main-menu').prependTo('body');
  	  }

  	else if(current_width > 740) {
  		$('#main-menu').prependTo('#main-nav .row');
  		$('#games').prependTo('.caption');
	}

    else if (current_width < 970){
      $('html').addClass("tablet").removeClass("desktop").removeClass("m320").removeClass("m768");
  	}
 
    else if (current_width > 971)
      $('html').addClass("desktop").removeClass("m320").removeClass("m768").removeClass("tablet");
 
    if(current_width < 650){
      $('html').addClass("mobile-menu").removeClass("desktop-menu");
	 $('.sf-menu').removeClass("sf-js-enabled").addClass("sf-js-disabled");
	}
 
    if(current_width > 651){
      $('html').addClass("desktop-menu").removeClass("mobile-menu");
	  $('.sf-menu').removeClass("sf-js-disabled").addClass("sf-js-enabled");
	}
}