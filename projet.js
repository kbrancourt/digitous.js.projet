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
	travelLog : [], 
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
		console.log("C'est pas bon bip bip boop")
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
		console.log("C'est pas bon bip  bip boop")
	}
}

function moveForward(rover) {
	if (rover.direction === "E") {
		rover.positionX += 1;
		if(rover.positionY >10){
			console.log("Error!")
		}
		console.log(`Je suis la fonction "moveForward" j'avance de un ${rover.positionX}`)
		rover.travelLog.push(rover.positionX);

	} else if (rover.direction === "S") {
		rover.positionY -= 1;
		if(rover.positionY >9){
			console.log("Error!")
		}
		console.log(`Je suis la fonction "moveForward" j'avance de un ${rover.positionY}`)
		rover.travelLog.push(rover.positionY);

	} else if (rover.direction === "W") {
		rover.positionX += 1;
		if(rover.positionY < 0){
			console.log("Error!")
		}
		console.log(`Je suis la fonction "moveForward" , j'avance de un ${rover.positionX}`)
		rover.travelLog.push(rover.positionX);

	} else if (rover.direction === "N") {
		rover.positionY -= 1;
		if(rover.positionY < 0){
			console.log("Error!")
		}
		console.log(`Je suis la fonction "moveForward" j'avance de un ${rover.positionY}`)
		rover.travelLog.push(rover.positionY);
	} 
}
moveForward(rover)

// Ajout de la fonction moveBackward

function moveBackward(rover) {
	if (rover.direction === "N") {
			if(rover.positionY < 9 ){
				rover.positionY += 1;

				console.log("Error!")
			}
		console.log(`Je suis la fonction "moveBackward" je recule ${rover.positionY}`)
		rover.travelLog.push(rover.positionY);

	} else if (rover.direction === "E") {
		rover.positionX -= 1;
			if(rover.positionX > 10 ){
				console.log("Error!")
			}
		console.log(`Je suis la fonction "moveBackward" je recule ${rover.positionX}`)
		rover.travelLog.push(rover.positionX);
	} else if (rover.direction === "S") {
		rover.positionY -= 1;
			if(rover.positionY > 9){
				console.log("Error!")
			}
		console.log(`Je suis la fonction "moveBackward" je recule ${rover.positionY}`)
		rover.travelLog.push(rover.positionY);

	} else if (rover.direction === "W") {
		rover.positionX += 1
		if(rover.positionX < 10){
			console.log("Error!")
		}
		console.log(`Je suis la fonction "moveBackward" je recule ${rover.positionX}`)
		rover.travelLog.push(rover.positionX);
	}
	
}
moveBackward(rover)

//methode 1 : pilotRover
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

//methode 2 : pilotRover
function pilotRover(string) {
	var i = 0;
	for (var i = 0; i < string.length; i++) {
		if (string[i] === "l") {
			turnLeft(rover)
			rover.travelLog.push(`Je tourne a gauche vers le ${rover.direction}`)
		} else if (string [i]  === "r") {
			turnRight("r")
			rover.travelLog.push(`Je tourne a droite vers le ${rover.direction}`)
		} else if (string [i]  === "f") {
			moveForward(rover)
			rover.travelLog.push(` x= ${rover.positionX} et y= ${rover.positionY}`)
		} else if (string [i]  === "b") {
			moveBackward("b")
			rover.travelLog.push(`je suis  backward x= ${rover.positionX} et y= ${rover.positionY}`)

		}else{
			console.log("Error: commande non valide ! On stoppe tout")
		}
	} 
}



pilotRover("r")
pilotRover("l")
pilotRover("r")
pilotRover("f")
pilotRover("f")
pilotRover("b")
pilotRover("b")







/*
console.log(grid)

*/
