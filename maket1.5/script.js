let read = document.querySelector('.read-more');
let show = document.querySelector('.brands__list--hidden');
read.addEventListener('click', function(){
	show.classList.toggle('brands__list--hidden');
	read.classList.toggle('icon-up');
	read.classList.toggle('icon-down');
	if (read.classList.contains('icon-down')) {
	  read.textContent = 'Скрыть';
	}  else {
	  read.textContent = 'Показать все';
	}  	
});

