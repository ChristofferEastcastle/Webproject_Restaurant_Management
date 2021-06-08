import HeaderModule from './modules/HeaderModule.js';
import EmployeeCardModule from './modules/EmployeeCardModule.js';
import SortModule from './modules/SortModule.js';
import FetchDataModule from './modules/FetchDataModule.js';
import ValidationModule from './modules/ValidationModule.js';


const employeeCardElement = document.getElementById('employeeCardElement');
const addEmployeeBtn = document.getElementById('addNewEmployeeBtn');
const createCard = EmployeeCardModule.createEmployeeCard;
const addEmployeeElement = document.getElementById('addEmployeeElement');
window.onload = getDataFromJSON();

addEmployeeBtn.addEventListener('click', addNewEmployee, {once:true});

// For saving all employees when fetched from JSON file
const employees = [];

let id = 0;
export default id;
function getDataFromJSON() {
	// Fetching employees from json, then generating cards. Also adding them to an array for easy use later.
	fetch('../../employees.json')
		.then((result) => result.json())
		.then((data) => {
			SortModule.sortByLastName(data).forEach((employee) => {
				employee.id = id;
				employeeCardElement.innerHTML += createCard(employee);
				id++;
				employees.push(employee);
			});
			addEventListenerToButtons(employees);
		});
}

// Setting up on change listener for the user drop down menu
const selector = document.getElementById('selector');
selector.onchange = changeListener;

function changeListener() {
	const value = this.value;
	// Guard clause. We want to exit the function if the value is not a useable value.
	if (value == 'NoValue') return;

	if (value == 'All') printCards(employees);
	else printCards(SortModule.sortByRestaurant(employees, value));
}

// For searching for employees, by last name
document.getElementById('searchInput').onkeyup = updateSearch;

function updateSearch() {
	const value = this.value;
	selector.value = 'All';
	printCards(EmployeeCardModule.getByName(employees, value));
}

addEmployeeElement.innerHTML = EmployeeCardModule.addEmployee();

function addNewEmployee() {
	addEmployeeElement.classList.remove('hidden');
	employeeCardElement.classList.add('opacity-50');
	// Have to get custom image here because we don't have the employee id in module.
	const imageElement = document.getElementById('inputImage');
	imageElement.addEventListener('change', () => FetchDataModule.readURL(imageElement, id));
	const saveButton = document.getElementById('saveNewEmployeeBtn');
	const cancelButton = document.getElementById('cancelNewEmployeeBtn');
	cancelButton.addEventListener('click', () =>{
		resetFormBorders();
		addEmployeeElement.classList.add('hidden');
		employeeCardElement.classList.remove('opacity-50');
		addEmployeeBtn.addEventListener('click', addNewEmployee);
	})

	saveButton.addEventListener('click', function saveNewEmployee() {
		const employee = EmployeeCardModule.saveEmployee();
		if (employee == undefined) return;
		employee.id = id;
		id++;
		employees.push(employee);
		printCards(SortModule.sortByLastName(employees));
		
		document.getElementById(`editEmployeeBtn:${employee.id}`).addEventListener('click', () => editEmployee(employee));
		resetFormBorders();
		addEmployeeElement.classList.add('hidden');
		employeeCardElement.classList.remove('opacity-50');
		addEmployeeBtn.addEventListener('click', addNewEmployee);
		saveButton.removeEventListener('click', saveNewEmployee);
		
		ValidationModule.showStatus('confirm', 'Ansatt lagt til!');
	});
	EmployeeCardModule.clearNewEmployeeFields(); // Clearing input fields from new employee card
	addEventListenerToButtons(employees);
}

// Reset validation borders on add new employee form
function resetFormBorders() {
	ValidationModule.validateInput(document.getElementById('firstName'));
	ValidationModule.validateInput(document.getElementById('lastName'));
	ValidationModule.validateInput(document.getElementById('mailAdress'));
}

function editEmployee(employee) {
	// Saving employee roles and restaurant for selector when editing.
	document.getElementById(`roleInput:${employee.id}`).value = employee.role;
	document.getElementById(`restaurantInput:${employee.id}`).value = employee.restaurant;
	document.getElementById(`${employee.id}card`).classList.add('flip');
	document.getElementById(`cancelEditButton:${employee.id}`).addEventListener('click', () => {
		document.getElementById(`${employee.id}card`).classList.remove('flip');
	});
	const saveEditBtn = document.getElementById(`saveEditButton:${employee.id}`);
	saveEditBtn.addEventListener('click', () => saveEditedEmployee(employee));
}

function saveEditedEmployee(employee) {
	const newEmployee = ValidationModule.validateEditedEmployee(employee);
	const old = employees.indexOf(employee);

	document.getElementById(`${employee.id}card`).classList.remove('flip');
	employees[old] = newEmployee;
	ValidationModule.showStatus('confirm', 'Ansatt lagret!');
	setTimeout(() => {
		printCards(SortModule.sortByLastName(employees));
	}, 300);
}

function printCards(cards) {
	clearPage();
	cards.forEach((employee) => {
		employeeCardElement.innerHTML += createCard(employee);
		if (employee.image === '/custom') {
			document
				.getElementById('imageElement:'.concat(employee.id))
				.setAttribute('src', localStorage.getItem(`inputImage:${employee.id}`));
		}
	});
	addEventListenerToButtons(cards);
}

function deleteEmployee(employee) {
	const obj = document.getElementById(employee.id + 'card');
	const el = document.getElementById('modalDeleteBtn');
	if (obj && el)
		el.addEventListener('click', function removeCard() {
			obj.remove();
			employees.splice(employees.indexOf(employee), 1);
			printCards(SortModule.sortByLastName(employees));
			el.removeEventListener('click', removeCard);
			ValidationModule.showStatus('confirm', 'Ansatt slettet!');
		});
}

function addEventListenerToButtons(employees) {

	for (let i = 0; i < employees.length; i++) {
		const editEl = document.getElementById(`editEmployeeBtn:${employees[i].id}`);
		const deleteEl = document.getElementById(`deleteBtn:${employees[i].id}`);

		if (deleteEl) deleteEl.addEventListener('click', () => deleteEmployee(employees[i]));

		if (editEl) editEl.addEventListener('click', () => editEmployee(employees[i]));
	}
}

function clearPage() {
	employeeCardElement.innerHTML = '';
}


// Toggle confirm delete modal
window.toggleModal = (modalID) => {
	const el = document.getElementById(modalID);
	const elBackdrop = document.getElementById(modalID + '-backdrop');
	el.classList.toggle('hidden');
	elBackdrop.classList.toggle('hidden');
	employeeCardElement.classList.toggle('opacity-50');
	el.classList.toggle('flex');
	elBackdrop.classList.toggle('flex');
};
