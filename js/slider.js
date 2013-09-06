	var numImages = 0,
	currentImage = 1,
	totalWidth = 0;

	var $first = $('.gallery-li:first').clone(),
	$last = $('.gallery-li:last').clone(),
	item_width = $('#gallery-li').outerWidth(),
	left_value = item_width * (-1);

$(document).ready(function(){

	$first.appendTo('.gallery-ul');
	$last.prependTo('.gallery-ul');

	$('.gallery-li').each( function(){
		numImages++
		totalWidth +=480;
		console.log(numImages);
	});

	

	$('.gallery-ul').css('width', totalWidth +'px');


	$('.rightbtn').click( function(){
		moveLeft();
		// hideBtns();
	});

	$('.gallery-mask').click( function(){
		moveLeft();
		// hideBtns();
	});

	$('.leftbtn').click( function(){
		moveRight();
		// hideBtns();
	});

	// $(.gallery-li):first.before(last.clone(true)); 
 //  	last.after(first.clone(true)); 

	// hideBtns();
});

function galleryStart() {
	$('.gallery-ul').animate( {'marginLeft': '-=480px'}, 1, 'swing')
	currentImage++;
}

galleryStart();

function moveLeft() {

	if (currentImage < numImages) {
		$('.gallery-ul').animate( {'marginLeft': '-=480px'}, 1000, 'swing')
		currentImage++;
	}
	else if (currentImage < (numImages - 1)) {
		$('.gallery-ul').css({'left' : left_value});
	}
}

function moveRight() {
	if (currentImage > 1) {
		$('.gallery-ul').animate( {'marginLeft': '+=480px'}, 1000, 'swing')
		currentImage--;
	}
	else if (currentImage == numImages) {
		$('.gallery-ul').css({'left' : left_value});
		console.log("here");
	}
}

function hideBtns() {
	// $('.gallery-mask','.leftbtn','.rightbtn').hover(
	// 	function() {
	// 	$('.leftbtn').css({'opacity': 1});
	// 	$('.rightbtn').css({'opacity': 1});
	// },
	// 	function(){
	// 	$('.leftbtn').css({'opacity': 0});
	// 	$('.rightbtn').css({'opacity': 0});
	// });
	if( currentImage == 1) {
		$('.leftbtn').hide();
	}
	else {
		$('.leftbtn').show();
	}
	if( currentImage == numImages) {
		$('.rightbtn').hide();
	}
	else {
		$('.rightbtn').show();
	}
}