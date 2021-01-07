//étape 1

var grid = [
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];


var rover = {
	direction : "N",
	positionX : 0,
	positionY : 0,
}

function turnLeft(rover){
	 

	if 	(rover.direction === "N"){
		rover.direction = "W";
		console.log(`Vous tounez à gauche ${rover.direction}`)

	} else if (rover.direction === "W"){
		rover.direction = "S";
		console.log(`Vous tounez à gauche ${rover.direction}`)


	} else if (rover.direction === "S"){
		rover.direction = "E";
		console.log(`Vous tounez à gauche ${rover.direction}`)


	} else if (rover.direction === "E"){
		rover.direction = "N";
		console.log(`Vous tounez à gauche ${rover.direction}`)


	} else {
		console.log("C'est pas bon bip boup")
	}
}

function turnRight(rover){
	if 	(rover.direction === "N"){
		rover.direction = "E";
		console.log(`Vous tounez à gauche ${rover.direction}`)

	} else if (rover.direction === "E"){
		rover.direction = "S";
		console.log(`Vous tounez à gauche ${rover.direction}`)


	} else if (rover.direction === "S"){
		rover.direction = "W";
		console.log(`Vous tounez à gauche ${rover.direction}`)


	} else if (rover.direction === "W"){
		rover.direction = "N";
		console.log(`Vous tounez à gauche ${rover.direction}`)


	} else {
		console.log("C'est pas bon bip boup")
	}


}
function moveForward(rover){
	if (rover.direction === "E"){
		rover.positionX += 1;
		console.log(`J'avance de un ${rover.positionX}`)
	} else if(rover.direction === "S"){
		rover.positionY -= 1;
		console.log(`J'avance de un ${rover.positionY}`)
	} else if (rover.direction === "W"){
		rover.positionX += 1;
		console.log(`J'avance de un ${rover.positionX}`)
	} else if (rover.direction === "N"){
		rover.positionY -= 1;
		console.log(`J'avance de un ${rover.positionY}`)
	}
}

/*function pilotRover(string){
	var commande = [];
	commande = string.charAt(i).split;
	for(var i = 0; i< string.lenght; i++){
		console.log(string.charAt(i));
		if(string[i] === "l"){
			turnLeft(rover)
			console.log(turnLeft(i));
		}else if(string.charAt(i) === "r"){
			console.log(turnRight());
			turnRight(rover)
		}else if(string.charAt(i) === "f"){
			console.log(moveForward());
			moveForward(rover)
		}else{
			console.log("Cela ne fonctionne pas bip");
		}
		
	}
}*/

//Test tard le soir
function pilotRover(string){
	for(var i = 0; i< string.length; i++){
		if(string === "l"){
			turnLeft(rover)
			console.log(`Je suis la fonction pilotRover je tourne à gauche`)
		} else if(string ==="r"){
			turnRight("r")
			console.log(`Je suis la fonction pilotRover je tourne à droite`)
		} else if(string === "f"){
			moveForward(rover)
			console.log(`Je suis la fonction pilotRover j'avance`)
		}
	}
}

pilotRover("f","r")

console.log(rover)

