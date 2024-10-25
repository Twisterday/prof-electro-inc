document.addEventListener('DOMContentLoaded', function () {

	let scrollLinks = document.querySelectorAll('.call__btn');

	for (let link of scrollLinks) {
		if (link) {
			link.addEventListener('click', function (e) {
				e.preventDefault();
				let anchorId = this.getAttribute('href');
				document.querySelector(anchorId).scrollIntoView({
					behavior: 'smooth'
				});
			});
		}
	}
});

function removeAnimationClass() {
	const elements = document.querySelectorAll('.element-animation');

	if (window.innerWidth <= 639) {
		elements.forEach((element) => {
			element.classList.remove('element-animation');
		});
	}
}

window.addEventListener('load', removeAnimationClass);
window.addEventListener('resize', removeAnimationClass);
