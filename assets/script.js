const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


document.addEventListener('DOMContentLoaded', function() {
	let currentSlide = 0;
	const bannerImg = document.querySelector('.banner-img');
	const dots = document.querySelectorAll('.dot');

	//Ajout des event listener
	function showSlide(index) {
		currentSlide = index;

		if(bannerImg) {
			bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;

			//Mettre à jour les points actifs
			dots.forEach(dot => dot.classList.remove('active'));
			if(dots[index]) {
				dots[index].classList.add('active');
			}
		}else {
			console.error("Error: L'image du slider n'a pas été trouvée.");
		}
	}

	function nextSlide() {
		currentSlide = (currentSlide + 1) % slides.length;
		showSlide(currentSlide);
	}

	function prevSlide() {
		currentSlide = (currentSlide - 1 + slides.length) % slides.length;
		showSlide(currentSlide);
	}

	const arrowLeft = document.querySelector('.arrow_left');
	const arrowRight = document.querySelector('.arrow_right');

	if(arrowLeft && arrowRight) {
		arrowLeft.addEventListener('click', function() {
			prevSlide();
		});

		arrowRight.addEventListener('click', function() {
			nextSlide();
		});
	}else {
		console.error("Error : Les flèches n'ont pas été trouvées");
	}

	//Initialisation de la première slide
	showSlide(0);

	//Ajout d'un interval automatique pour changer la slide toutes les 5s
	setInterval(nextSlide, 5000);
});



