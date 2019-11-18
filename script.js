//FONCTION 1 - 1BIS
//Affiche clique dans la console quand on clique sur le footer
//Puis compte le nombre de clique
var footer = document.querySelector('footer');
footer.addEventListener('click', footerClick);
clickCount = 0

function footerClick() {
	console.log("clic")
	clickCount++
	console.log("clic numéro " + clickCount)
}

footer.addEventListener('click', footerClick);

//FONCTION 2 - Hamburger Menu
var menu = document.getElementById('navbarHeader')
var menuBtn = document.getElementsByClassName('navbar-toggler')[0];

function hamburger(){
	menu.classList.toggle('collapse');
}

menuBtn.addEventListener('click', hamburger);

//FONCTION 3 - Card 1 color in red
var firstCard = document.getElementsByClassName('card')[0];
var editBtn1 = document.getElementsByClassName('btn-outline-secondary')[0];

function editBtnChange() {
	firstCard.style.color = 'red';
}

editBtn1.addEventListener('click', editBtnChange)

//FONCTION 4 - Card 2 color green 
var secondCard = document.getElementsByClassName('card')[1];
var editBtn2 = document.getElementsByClassName('btn-outline-secondary')[1];

function editBtnChange2() {
	if (secondCard.style.color === 'green') {
		secondCard.style.color = '';
	}
	else  {
		secondCard.style.color = 'green';
	}
}

editBtn2.addEventListener('click', editBtnChange2);

//FONCTION 5 - Bootstrap delete
var bootstrapLink = document.querySelector('link');
var navbar = document.querySelector('header')

function bootstrapDelete () {
	if (bootstrapLink.disabled === false) {
		bootstrapLink.disabled = true;
	}
	else {
		bootstrapLink.disabled = false;
	}
}

navbar.addEventListener('dblclick', bootstrapDelete)

//FONCTION 6 - Card style change

var allCardText = document.getElementsByClassName('card-text');
var allCardImg = document.getElementsByClassName('card-img-top');
var cards = document.getElementsByClassName('col-md-4');
var viewBtn = document.getElementsByClassName('btn-success');

for (let i = 0; i < cards.length; i++) {
	viewBtn[i].addEventListener('mouseover', function(){
	if (allCardImg[i].style.width === '100%') {
		allCardImg[i].style.width = '20%';
	}
	else {
		allCardImg[i].style.width = '100%';
	}
	if (allCardText[i].style.display === 'block') {
		allCardText[i].style.display = 'none';
	}
	else {
		allCardText[i].style.display = 'block';
	}
});
};

//FONCTION 7 - 
