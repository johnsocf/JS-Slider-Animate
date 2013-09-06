	var numImages = 0,
	currentImage = 1,
	totalWidth = 0;

	var $first = $('.gallery-li:first').clone(),
	$last = $('.gallery-li:last').clone(),
	windowWidth = $(window).width(),
	startPos = -((totalWidth * 2) - (windowWidth/2) + 240),
	position = 0;

	
	
	

$(document).ready(function(){

	function getPosition() {
		for (var i=0; i < numImages; i++) {
		var position = -((totalWidth * 2) - (windowWidth/2) + 240*i);
		console.log("position : " + position);
		}
	}
	getPosition();

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
	// hideBtns();
});

function galleryStart() {
	$('.gallery-ul').animate( {'marginLeft': '-=480px'}, 1, 'swing')
	currentImage++;
}

galleryStart();

function moveLeft() {
	var item_width = $('.gallery-li').outerWidth(); 
    var left_value = item_width * (-1); 

	if (currentImage < numImages) {
		$('.gallery-ul').animate( {'marginLeft': '-=480px'}, 1000, 'swing')
		currentImage++;
	}
	else {
		$('.gallery-ul').css("left", startPos);
		console.log("end position " + position);
	}
}

function moveRight() {
	if (currentImage > 1) {
		$('.gallery-ul').animate( {'marginLeft': '+=480px'}, 1000, 'swing')
		currentImage--;
		console.log("here");
		var position = $('gallery-ul').position();
		console.log(position);
		// console.log(position);
		// set the position to a global variable.  then set the position with css in the 'else' statement.
	}
	else {
		$('.gallery-ul').css("left", startPos);
		console.log("start position " + startPos);
	}
}

function hideBtns() {
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