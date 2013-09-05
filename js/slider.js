
	var numImages = 0;
	var currentImage = 1;
	var totalWidth = 0;

$(document).ready(function(){

	$('.gallery-li').each( function(){
		numImages++
		totalWidth +=480;
		console.log(numImages);
	});

	$('.gallery-ul').css('width', totalWidth +'px');


	$('.rightbtn').click( function(){
		moveLeft();
		hideBtns();
	});

	$('.gallery-mask').click( function(){
		moveLeft();
		hideBtns();
	});

	$('.leftbtn').click( function(){
		moveRight();
		hideBtns();
	});

	hideBtns();
});

function moveLeft() {
	if( currentImage < numImages) {
		$('.gallery-ul').animate( {'marginLeft': '-=480px'}, 1000, 'swing')
		currentImage++;
	}
}

function moveRight() {
	if( currentImage > 1) {
		$('.gallery-ul').animate( {'marginLeft': '+=480px'}, 1000, 'swing')
		currentImage--;
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