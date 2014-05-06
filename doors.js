$( document ).ready(function() {

	var playerMoveAmount = 25;
	var topBoundary = 0;
	var leftBoundary = 0;

	var playerWidth = $('.player').width();
	var playerHeight = $('.player').height();

	var roomWidth = $('.room').width();
	var roomHeight = $('.room').height();

	var doorHorizontalHeight = $('.door.horizontal').height();
	var doorHorizontalWidth = $('.door.horizontal').width();

	var doorVerticalHeight = $('.door.vertical').height();
	var doorVerticalWidth = $('.door.vertical').width();

	var bottomBoundary = $("#play-area").height() - playerHeight;
	var rightBoundary = $("#play-area").width() - playerWidth;


	$(".player").css({
		left: 0,
		top: 550
	});

	var currentY = $(".player").position().top;
	var currentX = $(".player").position().left;


	var currentRoom = "3-1";
	$("#current").html("<b>X</b>: " + $(".player").position().left + " | <b>Y</b>: " + $(".player").position().top );

	var rooms = demoLevel;

	var doorsArray = {};

	for(r in rooms) {
		var room = rooms[r];
		for(d in room.doors) {
			
			var door = rooms[r].doors[d];

			if(doorsArray[door.doorType]) {
				if(doorsArray[door.doorType][door.doorId]) {
					continue;
				}
			}

			var $div = $("<div>", {html: "", class: "door " + door.type + " " + door.doorType});

			var doorX = 0;
			var doorY = 0;

			if(door.type === "vertical") {
				if(door.direction === "right") {
					doorY = ((roomHeight/2) - (playerHeight/2)) + (roomHeight * (room.y - 1));
					doorX = (roomWidth - (doorVerticalWidth/2)) + (roomWidth * (room.x - 1));
				}
				else if(door.direction === "left") {
					doorY = ((roomHeight/2) - (playerHeight/2)) + (roomHeight * (room.y - 1));
					doorX = (roomWidth - (doorVerticalWidth/2)) + (roomWidth * (room.x - 2));
				}
			}
			else if(door.type === "horizontal") {
				if(door.direction === "bottom") {
					doorX = ((roomHeight/2) - (playerHeight/2)) + (roomHeight * (room.x - 1));
					doorY = (roomWidth - (doorVerticalWidth/2)) + (roomWidth * (room.y - 1));
				}
				else if(door.direction === "top") {
					doorX = ((roomHeight/2) - (playerHeight/2)) + (roomHeight * (room.x - 1));
					doorY = (roomWidth - (doorVerticalWidth/2)) + (roomWidth * (room.y - 2));
				}
				
			}

			if(door.locked) {
				$div.html("<span class=''><i class='fa fa-circle'/></span>");
			}
			else {
				$div.html("<span class='unlocked-icon'><i class='fa fa-circle'/></span>");
			}

			$div.css({
				top: doorY,
				left: doorX
			});
			$("#play-area").append($div);

			door.xCood = doorX;
			door.yCood = doorY;

			if(doorsArray[door.doorType]) {
				if(!doorsArray[door.doorType][door.doorId]) {
					doorsArray[door.doorType][door.doorId] = door;
				}
			}
			else {
				doorsArray[door.doorType] = {};
				doorsArray[door.doorType][door.doorId] = {};
				doorsArray[door.doorType][door.doorId] = door;
			}
		}
	}

	console.log("doors", doorsArray);


	$(".switch").click(function(){

		var classes = $(this).attr("class");
		classes = classes.substring(classes.indexOf(" ")+1,classes.length);
		console.log("?"+ classes);
		for(d in doorsArray[classes]) {
			doorsArray[classes][d].locked = !doorsArray[classes][d].locked;
		}

		$('.door.'+classes).each(function(){
			if($(this).children().hasClass('unlocked-icon')) {
				$(this).children().removeClass('unlocked-icon');
			}
			else {
				$(this).children().addClass('unlocked-icon');
			}
		});
	});


	$("body").keydown(function(e) {
		// get keycode of current keypress event
	    var code = (e.keyCode ? e.keyCode : e.which);

	    // do nothing if it's an arrow key
	    if(code == 37 || code == 38 || code == 39 || code == 40) {
	    	e.preventDefault();
	        movePlayer(code);
	    }
	});


	function movePlayer(direction) {
		currentY = $(".player").position().top;
		currentX = $(".player").position().left;

		var newPosition = 0;

		if(direction === 'up' || direction === 38) {

	 		newPosition = $(".player").position().top - playerMoveAmount;

	 		var cellBoundary = currentY%roomHeight;
	 		var door = (currentX+(playerWidth/2))%(roomHeight/2);

	 		//door check
	 		if(door === 0 && cellBoundary === 0 && rooms[currentRoom].doors['top']) {
	 			var doorId = rooms[currentRoom].doors['top'].doorId;
	 			var doorType = rooms[currentRoom].doors['top'].doorType;
	 			if(doorsArray[doorType][doorId].locked) {
	 				newPosition = currentY;
	 			}
	 		}
	 		else if(cellBoundary === 0) {
	 			newPosition = currentY;
	 		}

	 		if(newPosition <= topBoundary) {
	 			newPosition = topBoundary;
	 		}

	 		$(".player").css({
		        top: newPosition
		    });
	 	}
	 	else if (direction === 'down' || direction === 40) {

	 		newPosition = $(".player").position().top + playerMoveAmount;

	 		var cellBoundary = (currentY+playerHeight)%roomHeight;

	 		var door = (currentX+(playerWidth/2))%(roomHeight/2);

	 		//door check
	 		if(door === 0 && cellBoundary === 0 && rooms[currentRoom].doors['bottom']) {
	 			var doorId = rooms[currentRoom].doors['bottom'].doorId;
	 			var doorType = rooms[currentRoom].doors['bottom'].doorType;
	 			if(doorsArray[doorType][doorId].locked) {
	 				newPosition = currentY;
	 			}
	 		}
	 		else if(cellBoundary === 0) {
	 			newPosition = currentY;
	 		}

	 		if(newPosition >= bottomBoundary) {
	 			newPosition = bottomBoundary;
	 		}

	 		$(".player").css({
		        top: newPosition
		    });

	 	}
	 	else if (direction === 'left' || direction === 37) {

	 		newPosition = $(".player").position().left - playerMoveAmount;

	 		var cellBoundary = currentX%roomWidth;
	 		var door = (currentY+(playerHeight/2))%(roomWidth/2);

	 		//door check
	 		if(door === 0 && cellBoundary === 0 && rooms[currentRoom].doors['left']) {
	 			var doorId = rooms[currentRoom].doors['left'].doorId;
	 			var doorType = rooms[currentRoom].doors['left'].doorType;
	 			if(doorsArray[doorType][doorId].locked) {
	 				newPosition = currentX;
	 			}
	 		}
	 		else if(cellBoundary === 0) {
	 			newPosition = currentX;
	 		}

	 		if(newPosition <= leftBoundary) {
	 			newPosition = leftBoundary;
	 		}

	 		$(".player").css({
		        left: newPosition
		    });

	 	}
	 	else if (direction === 'right' || direction === 39) {
	 		newPosition = currentX + playerMoveAmount;
	 		
	 		var cellBoundary = (currentX+playerWidth)%200;

	 		var door = (currentY+(playerHeight/2))%(roomWidth/2);

	 		//door check
	 		if(door === 0 && cellBoundary === 0 && rooms[currentRoom].doors['right']) {
	 			var doorId = rooms[currentRoom].doors['right'].doorId;
	 			var doorType = rooms[currentRoom].doors['right'].doorType;
	 			if(doorsArray[doorType][doorId].locked) {
	 				newPosition = currentX;
	 			}
	 		}
	 		else if(cellBoundary === 0) {
	 			newPosition = currentX;
	 		}
	 		if(newPosition >= rightBoundary) {
	 			newPosition = rightBoundary;
	 		}

	 		$(".player").css({
		        left: newPosition
		    });

	 	}
	 	var x = Math.floor(($(".player").position().left/200)+1);
		var y = Math.floor(($(".player").position().top/200)+1);

		currentRoom = y + "-" + x;

	 	$("#current").html("<b>X</b>: " + $(".player").position().left + " | <b>Y</b>: " + $(".player").position().top + 
	 					"</br> ROOM:" + currentRoom);
	}

	 $(".keys").click(function() {
	 	movePlayer($(this).attr("id"));
	 });
});