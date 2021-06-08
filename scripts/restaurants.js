import HeaderModule from './modules/HeaderModule.js';
import SortModule from './modules/SortModule.js';
import RestaurantModule from './modules/RestaurantModule.js';

// DOM variables.
const outputEmployeeSection = document.getElementById('outputEmployee');
const outputRestaurantSection = document.getElementById('outputSection');
const restaurantInfo = document.getElementById('infoSection');

// Empty array
const employees = [];
// Restaurant array
const restaurants = RestaurantModule.getAllRestaurants();

// Fetch from local json script.
function getDataFromJSON() {
	fetch('../../employees.json')
		.then((result) => result.json())
		.then((data) => {
			data.forEach((employee) => {
				employees.push(employee);
			});
			document.getElementById('Bystasjonen').click();
		});
}

window.onload = getDataFromJSON();

// EventListener for restaurant links. Each link has an unique ID. The ID passes inn the function printRestaurants.
document.querySelectorAll('a').forEach((button) => {
	button.addEventListener('click', (e) => {
		printRestaurants(e);
	});
});

// Function prints restaurants, key info about each restaurants and the employees. 
const printRestaurants = (id) => {
	let numberOfEmployees = RestaurantModule.numberOfEmployees(employees, id.currentTarget.id);
	let numberOfManYears = RestaurantModule.manYears(employees, id.currentTarget.id);
	let numberOfChefs = RestaurantModule.numberOfChefs(employees, 'Kokk', id.currentTarget.id)

	outputEmployeeSection.innerHTML = '';
	outputRestaurantSection.innerHTML = '';
	restaurants.forEach((restaurant) => {
		if (restaurant.location === id.currentTarget.id) {
			outputRestaurantSection.innerHTML = RestaurantModule.restaurantText(
				restaurant);
			restaurantInfo.innerHTML = RestaurantModule.restaurantInfo(restaurant,numberOfEmployees, numberOfManYears , numberOfChefs)
		}
	});
	SortModule.sortByRestaurant(employees, id.currentTarget.id).forEach((employee) => {
		outputEmployeeSection.innerHTML += RestaurantModule.employeesText(employee);
	});
};


// Underline on active menu

document.getElementById('Bystasjonen').addEventListener("click", () => underLineMenu('Bystasjonen'));
document.getElementById('Åsane').addEventListener("click", () => underLineMenu('Åsane'));
document.getElementById('Lagunen').addEventListener("click", () => underLineMenu('Lagunen'));
document.getElementById('Straume').addEventListener("click", () => underLineMenu('Straume'));

function underLineMenu (id) {
	let bystasjonen = document.getElementById('Bystasjonen');
	let asane = document.getElementById('Åsane');
	let lagunen = document.getElementById('Lagunen');
	let straume = document.getElementById('Straume');

	switch(id) {
		case 'Bystasjonen': {
			addUnderline(bystasjonen)
			swapClasses(asane);
			swapClasses(lagunen);
			swapClasses(straume);
		} 
			break;
		case 'Åsane': {
			addUnderline(asane)
			swapClasses(bystasjonen);
			swapClasses(lagunen);
			swapClasses(straume);
		}
			break;
		case 'Lagunen': {
			addUnderline(lagunen);
			swapClasses(bystasjonen);
			swapClasses(asane);
			swapClasses(straume);
		}
			break;
		case 'Straume': {
			addUnderline(straume);
			swapClasses(bystasjonen);
			swapClasses(asane);
			swapClasses(lagunen);
		}
		break;
	}


}

function addUnderline(id) {
	id.classList.add('border-b-2','border-red-400');
}

function swapClasses(id) {
    id.classList.remove('border-b-2','border-red-400');
    id.classList.add('menu-animation');
}