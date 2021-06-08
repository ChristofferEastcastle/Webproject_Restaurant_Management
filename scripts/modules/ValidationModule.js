const ValidationModule = (function () {
	
	function validateFood(name, ingredients) {
		let valid = true;

		if (!name.value && !ingredients.value) {
			valid = false;
			name.classList.add('ring-2', 'ring-red-600');
			ingredients.classList.add('ring-2', 'ring-red-600');

			setTimeout(function () {
				name.classList.remove('ring-2', 'ring-red-600');
				ingredients.classList.remove('ring-2', 'ring-red-600');
			}, 3000);
		}

		return valid;
	}

	function showStatus(status, text, time) {
		const el = document.getElementById('statusOutput');

		el.classList.add(
			'hidden',
			'transition',
			'duration-75',
			'fixed',
			'bottom-3',
			'left-1/3',
			'w-2/5',
			'flex',
			'justify-start',
			'items-center',
			'rounded-3xl',
			'p-4',
			'space-x-5',
			'z-20',
			'shadow-2xl'
		);
		el.classList.remove('hidden');

		el.innerHTML = '';

		let color = '';
		let icon = '';
		let elText = `<p>${text}</p>`;

		if (status === 'confirm') {
			icon =
				'<svg class="h-8" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>';
			color = 'bg-green-500';

			el.innerHTML += `${icon}`;
			el.innerHTML += `${elText}`;
		} else if (status === 'warning') {
			icon =
				'<svg class="h-8" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation" class="svg-inline--fa fa-exclamation fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"></path></svg>';
			color = 'bg-gray-800';
			el.classList.add('text-white');

			el.innerHTML += `${icon}`;
			el.innerHTML += `${elText}`;
		} else if (status === 'error') {
			icon =
				'<svg class="h-8" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>';

			color = 'bg-red-500';

			el.innerHTML += `${icon}`;
			el.innerHTML += `${elText}`;
		}
		el.classList.add(color);

		if (!time) time = 3000;
		setTimeout(function () {
			el.classList.add('hidden');
			el.classList.remove(color);
			el.classList.remove('text-white');
		}, time);

	}
	
	function clearStatus(){
		document.getElementById('statusOutput').classList.add('hidden');
	}
	
	function validateEditedEmployee(employee) {
		let editedEmployee = JSON.parse(JSON.stringify(employee));

		let firstName = document.getElementById(`firstNameInput:${employee.id}`);
		let lastName = document.getElementById(`lastNameInput:${employee.id}`);
		let role = document.getElementById(`roleInput:${employee.id}`);
		let restaurant = document.getElementById(`restaurantInput:${employee.id}`);

		if (firstName.value !== employee.first_name && firstName.value !== '') editedEmployee.first_name = firstName.value;

		if (lastName.value !== employee.last_name && lastName.value !== '') editedEmployee.last_name = lastName.value;

		if (role.value !== employee.role) editedEmployee.role = role.value;

		if (restaurant.value !== employee.restaurant) editedEmployee.restaurant = restaurant.value;

		return editedEmployee;
	}


// Set border color according to input status
	function validateInput(id, status) {
		if (status === 'error') {
			id.classList.remove('border-green-600');
			id.classList.add('border-red-600');
		} else if (status === 'success') {
			id.classList.remove('border-red-600');
			id.classList.add('border-green-600');
		} else { // Clear the bordercolor upon closing the modal
			id.classList.remove('border-green-600', 'border-red-600');
		}
	}


	function validateNewEmployee(employee){
		const fname = document.getElementById('firstName'),
		lname = document.getElementById('lastName'),
		email = document.getElementById('mailAdress'),
		emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
		nameRegex = /^\D*$/;
		
		let valid = true;
		let statuses = [];
		let statusText = "Du må legge til ";
		
		if (employee.first_name === "") {
			statuses.push('fornavn');
			validateInput(fname, 'error');
		} else if (!employee.first_name.match(nameRegex)) {
			statuses.push('et gyldig fornavn');
			validateInput(fname, 'error');
		} else{
			validateInput(fname, 'success');
		}
	

		if (employee.last_name === "") {
			statuses.push('etternavn');
			validateInput(lname, 'error');
		} else if (!employee.last_name.match(nameRegex)) {
			statuses.push('et gyldig etternavn');
			validateInput(lname, 'error');
		} else {
			validateInput(lname, 'success');
		}

		if (employee.mail === "") {
			statuses.push('e-postadresse');
			validateInput(email, 'error');
		} else if(!(employee.mail.match(emailRegex))) {
			statuses.push('en gyldig e-postadresse');
			validateInput(email, 'error');
		} else {
			validateInput(email, 'success');
		}
		


		if (statuses.length > 0){
			for (let i = 0; i < statuses.length; i++){
				statusText += statuses[i];
				
				if (i == statuses.length - 1) break;
				if(i == statuses.length - 2) {
					statusText += " og ";
				} else {
					statusText += ", ";
				}
			}

			showStatus('error', statusText + ".");
			valid = false;
		}
	
		// Clear error
		statuses = [];
		statusText = '';
		

		return valid;
	}

	function validateNewMenuItem(){
		let valid = true;
		let arr = this.value.toLowerCase().split('');
		let invalidCharacters = [];

		
		arr.forEach(letter => {
			if (!inAlphabet(letter) && !invalidCharacters.includes(letter)){
				invalidCharacters.push(letter);
				valid = false;
			}
		});
		if (!valid){
			showStatus('error', `Disse bokstavene er ikke i alfabetet: ${invalidCharacters}`, 100000);
			this.name = 'invalid';
		}
		
		else {
			clearStatus();
			this.name = 'valid';
		}
	}

	function inAlphabet(letter){
		const alphabet = "abcdefghijklmnopqrstuvwxyzæøå ";
		let valid = true;
		if (!alphabet.includes(letter)) valid = false;

		return valid;
	}


	return { validateEditedEmployee, validateNewEmployee, showStatus, validateFood, validateInput, validateNewMenuItem, clearStatus };
})();

export default ValidationModule;
