		const field = document.querySelector(".search__field");
		const autocompleteContainer = document.querySelector(".autocomplete");
		const container = document.querySelector(".container");
		const button = document.querySelector(".card__button");
		const card = document.querySelector(".card");

		function autocomplete(arr) {
			arr.length = 5;
			console.log(arr);
			let fragment = document.createDocumentFragment();
			arr.forEach(elem => {
				let div = document.createElement("div");
				div.classList.add('autocomplete-elem');
				div.innerText = elem.name;
				fragment.appendChild(div);
				div.onclick = addItem(elem);
			})
			autocompleteContainer.innerHTML = "";
			autocompleteContainer.appendChild(fragment);
			console.log(fragment);
		};

		function search() {
			if (field.value) {
				let promise = fetch(`https://api.github.com/search/repositories?q=${field.value}&sort=stars`)
				.then(response => {
					return response.json();
				});
				promise.then(result => {
					autocomplete(result.items);
				});
			} else {
				autocompleteContainer.innerHTML = "";
			}
		}

		function addItem(el) {
			return function () {
			let div = document.createElement("div");
			div.classList.add("card");
			div.innerHTML = `<div class="info">Name: ${el.name}</br>Owner: ${el.owner.login}</br>Stars: ${el.stargazers_count}</div><div><button class="card__button"></button></div>`;
			div.lastChild.onclick = function() {
				this.parentElement.remove();
			};
			container.appendChild(div);
			field.value = "";
			autocompleteContainer.innerHTML = "";
			}
		}

		const debounce = (fn, debounceTime) => {
    		let inDebounce;
    		return function() {
        		clearTimeout(inDebounce);
        		inDebounce = setTimeout(() => fn.apply(this, arguments), debounceTime);
   			}
		};

		field.addEventListener('keyup', debounce(search, 500));