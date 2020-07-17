var read = document.querySelector('.read-more');
var show = document.querySelector('.brands__list-hidden');
read.addEventListener('click', function(){
	if (read.textContent === 'Показать все') {
	  show.classList.remove('brands__list-hidden');
	  read.textContent = 'Скрыть';
	  read.classList.remove('icon-up');
	  read.classList.add('icon-down');
	}  else {
	  show.classList.add('brands__list-hidden');
	  read.textContent = 'Показать все';
	  read.classList.remove('icon-down');
	  read.classList.add('icon-up');
	}  	
});

