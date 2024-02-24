function openGallery(event, element) {
	event.preventDefault();

	var imgContainer = element.closest('.project__item-img');
	var imgUrl = imgContainer.style.backgroundImage.slice(5, -2);

	var overlay = document.getElementById('galleryOverlay');
	var zoomedImg = document.getElementById('zoomedImg');

	zoomedImg.src = imgUrl;
	overlay.style.display = 'flex';
}

function closeGallery() {
	var overlay = document.getElementById('galleryOverlay');
	overlay.style.display = 'none';
}