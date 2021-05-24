let toggleBtn = document.querySelector('.price-toggle');
let basicPrice = document.querySelector('.basic .price');
let professionalPrice = document.querySelector(".professional .price");
let masterPrice = document.querySelector(".master .price");


toggleBtn.addEventListener('click',(e)=>{
	toggleBtn.classList.toggle("checked");
	if (e.target.classList.contains("checked")) {
	basicPrice.textContent = `19.99`;
	professionalPrice.textContent = `24.99`;
	masterPrice.textContent = `39.99`;
}
if (!e.target.classList.contains("checked")) {
	basicPrice.textContent = `199.99`;
	professionalPrice.textContent = `249.99`;
	masterPrice.textContent = `399.99`;
}
})










/*let monthlyPrice = document.getElementsByClassName('price-month');
let yearlyPrice = document.getElementsByClassName('price-year');
const toggleEl = document.querySelector('input[type=checkbox][name=price]');

toggleEl.addEventListener('click', () => {
	if (toggleEl.checked) {
		yearlyPrice.classList.add('hidden');
		monthlyPrice.classList.remove('hidden');
	} else {
		yearlyPrice.classList.remove('hidden');
		monthlyPrice.classList.add('hidden');
	}
	
})*/

/*toggleEl.addEventListener('click', (event) => {
	if (event.target.checked) {
		console.log('checked')
	}
})

/*toggleEl.addEventListener('toggle', () => {
	if(toggleEl.checked) {
		yearlyPrice.forEach(price => price.classList.add('hidden'));
		monthlyPrice.forEach(price => price.classList.remove('hidden'));
	} else {
		yearlyPrice.forEach(price => price.classList.remove('hidden'));
		monthlyPrice.forEach(price => price.classList.add('hidden'));
	}
})*/

/*toggleEl.addEventListener('click', () => {
	if(toggleEl.checked === true) {
		yearlyPrice.classList.add('hidden');
		monthlyPrice.classList.remove('hidden');
	} else {
		yearlyPrice.classList.remove('hidden');
		monthlyPrice.classList.add('hidden');
	}
})*/

/*
 function changePrice () {
	toggleEl.addEventListener("change", () => {
		if(toggleEl.checked === true) {
			yearlyPrice.classList.add('hidden');
			monthlyPrice.classList.remove('hidden');
		} else {
			yearlyPrice.classList.remove('hidden');
			monthlyPrice.classList.add('hidden');
		}
	})
 }

 changePrice();
checked = monthly*/