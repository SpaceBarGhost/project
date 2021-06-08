
	const rootElement = document.documentElement;
	const scrollToTopBtn = document.getElementById("scrollToTopBtn");

	const scrollToTop = () => {
		rootElement.scrollTo({
   			top: 0,
    		behavior: "smooth"
 		 })
	}

	window.addEventListener('scroll', function(e) {
		const windowOffset = window.scrollY;

		if (windowOffset < 300) {
			scrollToTopBtn.classList.add("hide");
		} else {
			scrollToTopBtn.classList.remove("hide");
		}
	});

	scrollToTopBtn.addEventListener("click", scrollToTop)


	const swiper = new Swiper('.swiper-container', {
  // Optional parameters
 
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
