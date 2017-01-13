// General ---------------------------------------------------------
function class_change(elmnt, prev, next){
	elmnt.classList.remove(prev);
	elmnt.classList.add(next);
}

function getByID(str){
	return document.getElementById(str);
}

// Menu Fucntionality ----------------------------------------------
function bind_mnu(){
	var body = $('.mnu');
	$('#mnu_toggle').bind('click', function(){
		body.toggleClass('mnu_open');
	});
}

function include_space(num){
	$('#space'+num).addClass('mouseover');
}

function exclude_space(num){
	$('#space'+num).removeClass('mouseover');
}

// Carousel Gallery Functionality -----------------------------------
function belt_moveup(belt, postmax){
	var cur_post = belt_getpost(belt, postmax);
	var bp = "beltPost";
	switch(cur_post){
		case 1: // 1 -> postmax	<<< Max Panels = postmax
			class_change(belt, bp+"1", bp+postmax);
			break;
		default: // i -> i-1
			class_change(belt, bp+cur_post, bp+(cur_post-1));
			break;
	}
}

function belt_movedown(belt, postmax){
	var cur_post = belt_getpost(belt, postmax);
	var bp = "beltPost";
	// Can't use a switch statement here
	// The maximum number of images is not constant
	if(cur_post == postmax){ // postmax -> 1	<<< Max Panels = postmax
		class_change(belt, bp+postmax, bp+"1");
	}else{ // i -> i+1
		class_change(belt, bp+cur_post, bp+(cur_post+1));
	}
}

function belt_getpost(belt, postmax){
	var post = 1;
	for(var i = 1; i < postmax+1; i++){ // <<< Max Panels = postmax
		var bclass = "beltPost"+i;
		if(belt.classList.contains(bclass)){
			post = i;
			break;
		}
	}
	return post;
}

// Slider Functionality -----------------------------------
function slide_over(num){
	$('#slider_f'+num).addClass('slider_fhover');
	$('#slider_b'+num).addClass('slider_bhover');
}

function slide_out(num){
	$('#slider_f'+num).removeClass('slider_fhover');
	$('#slider_b'+num).removeClass('slider_bhover');
}
