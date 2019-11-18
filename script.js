//FONCTION 1 - 1BIS
//Affiche clique dans la console quand on clique sur le footer
//Puis compte le nombre de clique
var footer = document.querySelector('footer');
footer.addEventListener('click', seeText);

function seeText() {
	console.log("clique")
}

footer.addEventListener('click', seeText)
console.log()

