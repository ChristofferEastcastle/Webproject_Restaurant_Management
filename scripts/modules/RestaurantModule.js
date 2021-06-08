const RestaurantModule = (function () {

	// Array of restaurant data
	const restaurants = [
		{
			location: 'Åsane',
			address: 'Åsamyrane 15',
			postnr: '5130 Bergen',
			capacity: 79,
			opens: '12:00',
			closes: '23:00',
			map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1966.524470573171!2d5.3202667161186445!3d60.46957138207224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cfdfa071db4d7%3A0x7a726053bedc7a74!2sHorisont!5e0!3m2!1sno!2sno!4v1621635747612!5m2!1sno!2sno',
		},
		{
			location: 'Lagunen',
			address: 'Laguneveien 1',
			postnr: '5239 Rådal',
			capacity: 110,
			opens: '14:00',
			closes: '22:00',
			map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7908.898213481355!2d5.3174779982051!3d60.292816760686996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf9e0ed5fe8e3%3A0x1c776a626023f424!2sLagunen%20Storsenter!5e0!3m2!1sno!2sno!4v1621944059000!5m2!1sno!2sno',
		},
		{
			location: 'Straume',
			address: 'Sartorveien 12',
			postnr: '5353 Straume',
			capacity: 90,
			opens: '15:00',
			closes: '22:00',
			map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1973.2176513211155!2d5.123479916678277!3d60.35904308203085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463ce4efac828943%3A0x3a92b4cca3aa3cc4!2sSartor%20Storsenter!5e0!3m2!1sno!2sno!4v1621941651346!5m2!1sno!2sno',
		},
		{
			location: 'Bystasjonen',
			address: 'Kaigaten 137',
			postnr: '5180 Bergen',
			capacity: 40,
			opens: '12:00',
			closes: '01:00',
			map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1971.377393268893!2d5.331139252157727!3d60.38944438195412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463f984b39fa7559%3A0x43095197b5575269!2sBergen%20Storsenter!5e0!3m2!1sno!2sno!4v1621944149795!5m2!1sno!2sno',
		},
	];

	// Method that returns the restaurant array
	const getAllRestaurants = () => restaurants;

	// Filter function on location.
	const getLocation = (location) => {
		return restaurants.filter((res) => res.location === location);
	};

	// Function that iterates through an array and counting number of employees that belongs to a certain restaurant.
	const numberOfEmployees = (data, type) => {
		let count = 0;
		data.forEach((res) => {
			if (res.restaurant === type) {
				count++;
			}
		});
		return count;
	};

	// Sums up the total amount of man years on each restaurant.
	const manYears = (data, type) => {
		let sum = 0;
		data.forEach((res) => {
			if (res.restaurant === type) {
				sum += res.vacancy_rate;
			}
		});
		return sum;
	};

	// Sums up the total amount of chefs on each restaurant.
	const numberOfChefs = (data, type, id) => {
		let sum = 0;
		data.forEach((res) => {
			if (res.role === type && res.restaurant === id) {
				sum ++;
			}
		});
		return sum;
	};

	// Restaurant output 
	const restaurantText = (res) => {
		return `
    <div class="mt-10 md:mt-20">
      <iframe
        class="w-64 h-64 mx-auto rounded-lg md:rounded-xl md:w-96 md:h-96"
        src="${res.map}"
        loading="lazy">
	  </iframe>
    </div>
    <div class="text-left mt-5 md:max-w-xs md:mt-28">
      <p class="text-red-800 font-light">${res.location}</p>
      <h1 class="title mt-5">
        ${res.address} </br>
        ${res.postnr}
      </h1>
	  <p class="text-xl"><span class="subtitle">Åpningstider (man - søn)</span><br> ${res.opens} - ${res.closes} </p> 
    </div>
    
    `;
	};

	// All key info number output about the restaurant and employees.
	const restaurantInfo = (res, employees, manYears, chefs) => {
		return `
		
	  <div class="text mt-12 flex flex-row flex-wrap justify-between md:mt-20">
		<div class="flex flex-col items-center">
			<img src="/icons/fork-knife.png" class="h-8 w-8" alt="Fork and knife icon">
			<p class="mt-2"> ${res.capacity} </p>
			<p class="font-bold">Sitteplasser</p>
		</div>
		<div class="flex flex-col items-center">
			<img src="/icons/users-icon.png" class="h-8 w-8" alt="Users icon">
			<p class="mt-2">${employees} </p>
			<p class="font-bold">Ansatte</p>
		</div>
		<div class="flex flex-col items-center">
			<img src="/icons/chef.png" class="h-8 w-8" alt="Chef hat icon">
			<p class="mt-2">${chefs} </p>
			<p class="font-bold">Kokker</p>
		</div>
		<div class="flex flex-col items-center">
			<img src="/icons/manyears.png" class="h-8 w-8" alt="Organization chart icon">
			<p class="mt-2">${manYears} </p>
			<p class="font-bold">Årsverk</p>
		</div>
	  </div>

		`
	}

	// Employee output.
	const employeesText = (emp) => {
		return `
        <div class="flex flex-col mb-6">
                <img
                  class="rounded-full w-24 h-24 mx-auto mb-2 md:order-2 md:mb-0 xl:w-48 xl:h-48"
                  src="/images/${emp.image}"
                  alt="Picture of ${emp.first_name} ${emp.last_name}"/>
                <h2 class="md:order-3 text mt-4 ml-3 font-bold  text-center">${emp.first_name} ${emp.last_name}</h2>
                <p class="text mt-1 ml-3 md:order-4 text-center md:mt-1">
                 <span class="italic"> ${emp.role} </span> </br>
				Stillingsprosent:  ${emp.vacancy_rate * 100}%
                </p>
        </div>
        `;
	};

	return { employeesText, getLocation, restaurantText, getAllRestaurants, numberOfEmployees, manYears, numberOfChefs, restaurantInfo };
})();

export default RestaurantModule;
