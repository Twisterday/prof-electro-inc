// function openGallery(event, element) {
// 	event.preventDefault();

// 	var imgContainer = element.closest('.project__item-img');
// 	var imgUrl = imgContainer.style.backgroundImage.slice(5, -2);

// 	var overlay = document.getElementById('galleryOverlay');
// 	var zoomedImg = document.getElementById('zoomedImg');

// 	zoomedImg.src = imgUrl;
// 	overlay.style.display = 'flex';
// }

// function closeGallery() {
// 	var overlay = document.getElementById('galleryOverlay');
// 	overlay.style.display = 'none';
// }

function openGallery(event, element) {
	event.preventDefault();

	var imgContainer = element.closest('.project__item-img');
	var imgUrl = imgContainer.style.backgroundImage.slice(5, -2);

	var overlay = document.querySelector('.gallery-overlay');
	var zoomedImg = document.querySelector('.zoomed-img');

	zoomedImg.src = imgUrl;
	overlay.style.display = 'flex';

	overlay.addEventListener('click', function (e) {
		if (!e.target.closest('.gallery-content')) {
			closeGallery();
		}
	});
}

function closeGallery() {
	var overlay = document.querySelector('.gallery-overlay');
	overlay.style.display = 'none';

	overlay.removeEventListener('click', function () { });
}