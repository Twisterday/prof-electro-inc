$(document).ready(function () {

	$(`[unique-script-id="w-w-dm-id"] .btn-box`).click(function () {
		$(this).parent().children(".overlay").show();

	});


	$(`[unique-script-id="w-w-dm-id"] .close`).click(function () {
		$(`[unique-script-id="w-w-dm-id"] .overlay`).hide();
	});
});

const overlay = document.querySelector('.gallery .overlay');
const closeButton = document.querySelector('.gallery .close');

function openOverlay() {
	overlay.style.display = 'block';
	document.body.classList.add('no-scroll'); // Додаємо блокування прокрутки
}

function closeOverlay() {
	overlay.style.display = 'none';
	document.body.classList.remove('no-scroll'); // Забираємо блокування прокрутки
}

overlay.addEventListener('click', closeOverlay);
closeButton.addEventListener('click', closeOverlay);
