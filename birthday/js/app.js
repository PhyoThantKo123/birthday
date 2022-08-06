console.log('hey i am working!!!');

$(document).ready(function(){
	// console.log('hey i am jquery')


	$(window).scroll(function(){
		var getscrolltop = $(this).scrollTop();
	    console.log(getscrolltop);

	    if(getscrolltop >= 100){
	    	$('.navs').addClass('nav-padding');
	    	$('.abouttexts').addClass('fromlefts');
	    	$('.aboutimg').addClass('fromrights');
	    }else{
	    	$('.navs').removeClass('nav-padding');
	    	$('.abouttexts').removeClass('fromlefts');
	    	$('.aboutimg').removeClass('fromrights');
	    }

	});



})