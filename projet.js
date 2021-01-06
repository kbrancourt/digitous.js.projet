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

function pilotRover(string){
	var commande = "rif";

	for(var i = 0; i< commande.lenght; i++){
		console.log(commande.charAt(i));
		if(commande.charAt(i) === "l"){
			console.log(turnLeft());
		}else if(commande.charAt(i) === "r"){
			console.log(turnRight());
		}else if(commande.charAt(i) === "f"){
			console.log(moveForward());
		}else{
			console.log();
		}
		
	}
}
pilotRover("rif")

turnLeft(rover)
moveForward(rover)
turnRight(rover)
moveForward(rover)
turnRight(rover)
console.log(rover)

