//Итоговая(И промежуточная) карточка подбора подроды
const resultImg = document.getElementById('resultImg');

//Базовые значения критериев
let price = 0;
let size = '';
let breedType = '';
let fur = '';
let character = '';

//Секции (блоки) из HTML
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');
const section4 = document.getElementById('section4');
const section5 = document.getElementById('section5');
const section6 = document.getElementById('section6');
const sectionResult = document.getElementById('sectionResult');

const body = document.querySelector('body');

//Характеристики породы
const spanPrice = document.getElementById('spanPrice');
const spanBreed = document.getElementById('spanBreed');
const spanBreedType = document.getElementById('spanBreedType');
const spanWeight = document.getElementById('spanWeight');
const spanGrowth = document.getElementById('spanGrowth');
const link = document.getElementById('link');

//Модуль объяснения решений

const spanExplanation = document.getElementById('spanExplanation');

//Старт

const btnStart = document.getElementById('btnStart');

btnStart.addEventListener('click', () => {
	section1.classList.add('d-none');
	section2.classList.remove('d-none');
	body.style.backgroundImage = "url(bg2.png)";
});


//Отбор по цене

const priceInput = document.getElementById('priceInput');
const priceBtn = document.getElementById('priceBtn');

//Промежуточные переменные
let tempArray = [];
let maxPrice = 0;
let weight = 0;


priceBtn.addEventListener('click', () => {
	section2.classList.add('d-none');

	price = priceInput.value;
	price = Number(price);

	//Отбор по самой высокой цене
	for (let i = 0; i < data.length; i++) {
		if (price > data[i].price) {
			tempArray.push(data[i]);
		}
	}
	if (tempArray.length != 0) 
		{
			for (let j = 0; j < tempArray.length; j++) {
				tempArray[j].weight = 0;
			if (tempArray.length > 0 && tempArray[j].price > maxPrice) 
			{
				maxPrice = tempArray[j].price;
			}
		}
	}
	else 
	{
		group1.classList.add('d-none');
		reloadPageGroup.classList.remove('d-none');
	}
	
	let actualBreed = tempArray.find((el) => el.price === maxPrice);
	resultImg.src = actualBreed.image;
	spanPrice.innerText = actualBreed.price + ' рублей';
	spanBreed.innerText = actualBreed.breed;
	spanBreedType.innerText = actualBreed.breedType;
	spanWeight.innerText = actualBreed.adultDogWeight;
	spanGrowth.innerText = actualBreed.growth;
	link.href = actualBreed.link;

	section3.classList.remove('d-none');
	sectionResult.classList.remove('d-none');
});

//Отбор по размеру

const sizeBtn = document.getElementById('sizeBtn');
const sizeSelect = document.getElementById('sizeSelect');

sizeBtn.addEventListener('click', () => {
	size = sizeSelect.value;

	for (let i = 0; i < tempArray.length; i++) {
		if (tempArray[i].size === size) 
			{
				tempArray[i].weight += 1;
			}
	}

	maxPrice = 0;

	for (let j = 0; j < tempArray.length; j++) {
		//Пробегаемся по tempArray. Смотрим, где вес совпадает с 1. Если такого нет, выводим самый дорогой автомобиль с весом 0.
		if (tempArray[j].weight === 1 && tempArray[j].price > maxPrice) 
			{
				maxPrice = tempArray[j].price;
				actualBreed = tempArray[j];
			}
	}

	//Если нет ни одного элемента с весом 1 - actualBreed приравниваем к самому дорогому элементу с весом 0.
	if (maxPrice === 0) {
			for (let j = 0; j < tempArray.length; j++) {
			//Пробегаемся по tempArray. Смотрим, где вес совпадает с 1. Если такого нет, выводим самый дорогой автомобиль с весом 0.
			if (tempArray[j].weight === 0 && tempArray[j].price > maxPrice) 
				{
					maxPrice = tempArray[j].price;
					actualBreed = tempArray[j];
				}
		}
	}

	resultImg.src = actualBreed.image;
	spanPrice.innerText = actualBreed.price + ' рублей';
	spanBreed.innerText = actualBreed.breed;
	spanBreedType.innerText = actualBreed.breedType;
	spanWeight.innerText = actualBreed.adultDogWeight;
	spanGrowth.innerText = actualBreed.growth;

	spanExplanation.innerText = 'Данная порода подходит вам по бюджету и удовлетворяет выбранным желаниям в количестве: ' + actualBreed.weight;

	section3.classList.add('d-none');
	section4.classList.remove('d-none');
});

//Отбор по типу породы

const breedTypeSelect = document.getElementById('breedTypeSelect');
const breedTypeBtn = document.getElementById('breedTypeBtn');

breedTypeBtn.addEventListener('click', () => {
	breedType = breedTypeSelect.value;

	for (let i = 0; i < tempArray.length; i++) {
		if (tempArray[i].breedType == breedType) 
			{
				//Если критерий совпадает с выбранным, добавляем вес(+1) всем подходящим по цене автомобилям.
				tempArray[i].weight += 1;
				// weight = 2;
				
			}
	}

	maxPrice = 0;

	for (let j = 0; j < tempArray.length; j++) {
		//Пробегаемся по tempArray. Смотрим, где вес совпадает с 2. Если такого нет, выводим самый дорогой автомобиль с весом 0.
		if (tempArray[j].weight === 2 && tempArray[j].price > maxPrice) 
			{
				maxPrice = tempArray[j].price;
				actualBreed = tempArray[j];
			}
	}

	if (maxPrice === 0) {
			for (let j = 0; j < tempArray.length; j++) {
			//Пробегаемся по tempArray. Смотрим, где вес совпадает с 1. Если такого нет, выводим самый дорогой автомобиль с весом 0.
			if (tempArray[j].weight === 1 && tempArray[j].price > maxPrice) 
				{
					maxPrice = tempArray[j].price;
					actualBreed = tempArray[j];
				}
		}
	}

	if (maxPrice === 0) {
			for (let j = 0; j < tempArray.length; j++) {
			
			if (tempArray[j].weight === 0 && tempArray[j].price > maxPrice) 
				{
					maxPrice = tempArray[j].price;
					actualBreed = tempArray[j];
				}
		}
	}

	resultImg.src = actualBreed.image;
	spanPrice.innerText = actualBreed.price + ' рублей';
	spanBreed.innerText = actualBreed.breed;
	spanBreedType.innerText = actualBreed.breedType;
	spanWeight.innerText = actualBreed.adultDogWeight;
	spanGrowth.innerText = actualBreed.growth;

	spanExplanation.innerText = 'Данная порода подходит вам по бюджету и удовлетворяет выбранным желаниям в количестве: ' + actualBreed.weight;

	section4.classList.add('d-none');
	section5.classList.remove('d-none');
});

//Отбор по длине шерсти

const furBtn = document.getElementById('furBtn');
const furSelect = document.getElementById('furSelect');

furBtn.addEventListener('click', () => {
	fur = furSelect.value;

	for (let i = 0; i < tempArray.length; i++) {
		if (tempArray[i].fur == fur) 
			{
				//Если критерий совпадает с выбранным, добавляем вес(+1) всем подходящим по цене автомобилям.
				tempArray[i].weight += 1;
				// weight = 3;
			}
	}

	maxPrice = 0;

	for (let j = 0; j < tempArray.length; j++) {
		//Пробегаемся по tempCarArray. Смотрим, где вес совпадает с 2. Если такого нет, выводим самый дорогой автомобиль с весом 0.
		if (tempArray[j].weight === 3 && tempArray[j].price > maxPrice) 
			{
				maxPrice = tempArray[j].price;
				actualBreed = tempArray[j];

				// alert(tempCarArray[j].mark + ' ' + tempCarArray[j].model + ' ' + tempCarArray[j].weight);
			}
	}

	if (maxPrice === 0) {
			for (let j = 0; j < tempArray.length; j++) {
			//Пробегаемся по tempCarArray. Смотрим, где вес совпадает с 1. Если такого нет, выводим самый дорогой автомобиль с весом 0.
			if (tempArray[j].weight === 2 && tempArray[j].price > maxPrice) 
				{
					maxPrice = tempArray[j].price;
					actualBreed = tempArray[j];

					// alert(tempCarArray[j].mark + ' ' + tempCarArray[j].model + ' ' + tempCarArray[j].weight);
				}
		}
	}

	if (maxPrice === 0) {
			for (let j = 0; j < tempArray.length; j++) {
			//Пробегаемся по tempCarArray. Смотрим, где вес совпадает с 1. Если такого нет, выводим самый дорогой автомобиль с весом 0.
			if (tempArray[j].weight === 1 && tempArray[j].price > maxPrice) 
				{
					maxPrice = tempArray[j].price;
					actualBreed = tempArray[j];

					// alert(tempCarArray[j].mark + ' ' + tempCarArray[j].model + ' ' + tempCarArray[j].weight);
				}
		}
	}

	if (maxPrice === 0) {
			for (let j = 0; j < tempArray.length; j++) {
			
			if (tempArray[j].weight === 0 && tempArray[j].price > maxPrice) 
				{
					maxPrice = tempArray[j].price;
					actualBreed = tempArray[j];
				}
		}
	}

	resultImg.src = actualBreed.image;
	spanPrice.innerText = actualBreed.price + ' рублей';
	spanBreed.innerText = actualBreed.breed;
	spanBreedType.innerText = actualBreed.breedType;
	spanWeight.innerText = actualBreed.adultDogWeight;
	spanGrowth.innerText = actualBreed.growth;

	spanExplanation.innerText = 'Данная порода подходит вам по бюджету и удовлетворяет выбранным желаниям в количестве: ' + actualBreed.weight;

	section5.classList.add('d-none');
	section6.classList.remove('d-none');

});

//Отбор по характеру

const characterBtn = document.getElementById('characterBtn');
const characterSelect = document.getElementById('characterSelect');

const pTitle = document.getElementById('pTitle');

characterBtn.addEventListener('click', () => {
	character = characterSelect.value;

	for (let i = 0; i < tempArray.length; i++) {
		if (tempArray[i].character == character) 
			{
				//Если критерий совпадает с выбранным, добавляем вес(+1) всем подходящим по цене автомобилям.
				tempArray[i].weight += 1;
				// weight = 4;
			}
	}

	maxPrice = 0;

	for (let j = 0; j < tempArray.length; j++) {
		//Пробегаемся по tempCarArray. Смотрим, где вес совпадает с 2. Если такого нет, выводим самый дорогой автомобиль с весом 0.
		if (tempArray[j].weight === 4 && tempArray[j].price > maxPrice) 
			{
				maxPrice = tempArray[j].price;
				actualBreed = tempArray[j];

				// alert(tempCarArray[j].mark + ' ' + tempCarArray[j].model + ' ' + tempCarArray[j].weight);
			}
	}

	if (maxPrice === 0) {
			for (let j = 0; j < tempArray.length; j++) {
			//Пробегаемся по tempCarArray. Смотрим, где вес совпадает с 1. Если такого нет, выводим самый дорогой автомобиль с весом 0.
			if (tempArray[j].weight === 3 && tempArray[j].price > maxPrice) 
				{
					maxPrice = tempArray[j].price;
					actualBreed = tempArray[j];

					// alert(tempCarArray[j].mark + ' ' + tempCarArray[j].model + ' ' + tempCarArray[j].weight);
				}
		}
	}

	if (maxPrice === 0) {
			for (let j = 0; j < tempArray.length; j++) {
			//Пробегаемся по tempCarArray. Смотрим, где вес совпадает с 1. Если такого нет, выводим самый дорогой автомобиль с весом 0.
			if (tempArray[j].weight === 2 && tempArray[j].price > maxPrice) 
				{
					maxPrice = tempArray[j].price;
					actualBreed = tempArray[j];

					// alert(tempCarArray[j].mark + ' ' + tempCarArray[j].model + ' ' + tempCarArray[j].weight);
				}
		}
	}

	if (maxPrice === 0) {
			for (let j = 0; j < tempArray.length; j++) {
			//Пробегаемся по tempCarArray. Смотрим, где вес совпадает с 1. Если такого нет, выводим самый дорогой автомобиль с весом 0.
			if (tempArray[j].weight === 1 && tempArray[j].price > maxPrice) 
				{
					maxPrice = tempArray[j].price;
					actualBreed = tempArray[j];

					// alert(tempCarArray[j].mark + ' ' + tempCarArray[j].model + ' ' + tempCarArray[j].weight);
				}
		}
	}

	if (maxPrice === 0) {
			for (let j = 0; j < tempArray.length; j++) {
			
			if (tempArray[j].weight === 0 && tempArray[j].price > maxPrice) 
				{
					maxPrice = tempArray[j].price;
					actualBreed = tempArray[j];
				}
		}
	}

	resultImg.src = actualBreed.image;
	spanPrice.innerText = actualBreed.price + ' рублей';
	spanBreed.innerText = actualBreed.breed;
	spanBreedType.innerText = actualBreed.breedType;
	spanWeight.innerText = actualBreed.adultDogWeight;
	spanGrowth.innerText = actualBreed.growth;
	pTitle.innerText = 'Согласно вашим желаниям, вам больше всего подходит данная порода собаки:';

	spanExplanation.innerText = 'Данная порода подходит вам по бюджету и удовлетворяет выбранным желаниям в количестве: ' + actualBreed.weight;

	section6.classList.add('d-none');
});