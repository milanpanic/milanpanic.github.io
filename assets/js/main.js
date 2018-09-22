//Waiting for the HTML document to be fully loaded

document.addEventListener('DOMContentLoaded', function() { 
	
	//Calling the functions
	toggleMobileNav();
	
	addActiveClass();
	
	getYear();
	
});

//Function for toggle mobile navigation
function toggleMobileNav() {
	
	//Getting the elements
	let hamburgerBtn = document.getElementById('mobileNav'),
		navigation = document.getElementsByClassName('grid__header--nav');
	
	//console.log(hamburgerBtn);
	//console.log(navigation);
	
	//Adding click event on the mobile nav menu
	hamburgerBtn.addEventListener('click', function() {
		//Toggle classes on the mobile menu btn and main nav
		
		hamburgerBtn.classList.toggle('active-mobile');
		navigation[0].classList.toggle('open');
	});
}

//Function for adding active class to the navigation links

function addActiveClass() {

	//Variables (for all navigation links)
	let links = document.querySelectorAll('.grid__header--nav--imagelink, .grid__header--nav--item');
	
	//console.log(links);
	
	//Loop through the links and add active class to the current clicked link
	for (var i = 0; i < links.length; i++) {
		
		//Adding click event on the all links
		links[i].addEventListener('click', function() {
			
			//Link with active class
			let activeLink = document.getElementsByClassName('active');
			
			//Removing active class from the previous link
			//Replace active class with empty space on the el. with active classes
			activeLink[0].className = activeLink[0].className.replace(' active', '');
			
			//Adding activer class
			this.classList.add('active');
		});
	}
}

//Function for setting date to the page

function getYear() {
	
	//Initiate date
	let date = new Date(),
		dateElement = document.getElementById('siteDate');
	
	dateElement.setAttribute('datetime', date); //Set datetime attribute
	dateElement.innerHTML = date.getFullYear();
}