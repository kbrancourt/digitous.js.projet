//étape 1

var grid = [
	[" N", " ", " ", " ", " ", " ", " ", " ", " ", " "],
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
	direction: "N",
	positionX: 0,
	positionY: 0,
	/* 
	travelLog = [], 
	*/
}

// Voir si nous ne pouvons pas avoir une limite de grille ?
// peut être avec une condition comme cela rover.poisitonX < 0 || rover.poisitonX > 10/9 ? Une condition dans une condition ?

function turnLeft(rover) {


	if (rover.direction === "N") {
		rover.direction = "W";
		console.log(`Vous tounez à gauche ${rover.direction}`)

	} else if (rover.direction === "W") {
		rover.direction = "S";
		console.log(`Vous tounez à gauche ${rover.direction}`)


	} else if (rover.direction === "S") {
		rover.direction = "E";
		console.log(`Vous tounez à gauche ${rover.direction}`)


	} else if (rover.direction === "E") {
		rover.direction = "N";
		console.log(`Vous tounez à gauche ${rover.direction}`)


	} else {
		console.log("C'est pas bon bip boup")
	}
}

function turnRight(rover) {
	if (rover.direction === "N") {
		rover.direction = "E";
		console.log(`Vous tounez à gauche ${rover.direction}`)

	} else if (rover.direction === "E") {
		rover.direction = "S";
		console.log(`Vous tounez à gauche ${rover.direction}`)


	} else if (rover.direction === "S") {
		rover.direction = "W";
		console.log(`Vous tounez à gauche ${rover.direction}`)


	} else if (rover.direction === "W") {
		rover.direction = "N";
		console.log(`Vous tounez à gauche ${rover.direction}`)


	} else {
		console.log("C'est pas bon bip boup")
	}


}
function moveForward(rover) {
	if (rover.direction === "E") {
		rover.positionX += 1;
		console.log(`J'avance de un ${rover.positionX}`)
	} else if (rover.direction === "S") {
		rover.positionY -= 1;
		console.log(`J'avance de un ${rover.positionY}`)
	} else if (rover.direction === "W") {
		rover.positionX += 1;
		console.log(`J'avance de un ${rover.positionX}`)
	} else if (rover.direction === "N") {
		rover.positionY -= 1;
		console.log(`J'avance de un ${rover.positionY}`)
	}
}


// Ajout de la fonction moveBackward

function moveBackward(rover) {
	if (rover.direction === "N") {
		rover.positionY += 1;
		console.log(`Je suis la fonction "moveBackward" je recule ${rover.positionY}`)
	} else if (rover.direction === "E") {
		rover.positionX -= 1;
		console.log(`Je suis la fonction "moveBackward" je recule ${rover.positionX}`)
	} else if (rover.direction === "S") {
		rover.positionY -= 1;
		console.log(`Je suis la fonction "moveBackward" je recule ${rover.positionY}`)
	} else if (rover.direction === "W") {
		rover.positionX += 1
		console.log(`Je suis la fonction "moveBackward" je recule ${rover.positionX}`)
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

// Il faut voir comment prendre toutes les versions d'une lettre et donc avoir peut-être un toUpperCase 
// exemple : r => R, l = L, f => F
function pilotRover(string) {
	var i = 0;
	for (var i = 0; i < string.length; i++) {
		if (string === "l") {
			turnLeft(rover)
			console.log(`Je suis la fonction pilotRover je tourne à gauche`)
		} else if (string === "r") {
			turnRight("r")
			console.log(`Je suis la fonction pilotRover je tourne à droite`)
		} else if (string === "f") {
			moveForward(rover)
			console.log(`Je suis la fonction pilotRover j'avance`)
		} else if (string === "b") {
			moveBackward(rover)
		}
	}
}



pilotRover("b")

console.log(rover)

/*
console.log(grid)

*/
