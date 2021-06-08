import ValidationModule from "./ValidationModule.js";

const EmployeeCardModule = (function(){

    function createEmployeeCard(employee) {
        return `
        <!--Ansattkort-->
        <div class="flex flex-row card m-2" id="${employee.id}card">
        <div class="flex justify-center mb-5 card-front" >
            <div class="w-64">
                <div class="flex flex-col p-5 items-center rounded-t-2xl bg-white h-80">
                    <img class="rounded-full w-36 h-36 mb-5" src="../images/${employee.image}" alt="Employee No. ${employee.id}" id="imageElement:${employee.id}" />
                    <h3 class="text-l font-bold text-gray-900 text-center">${employee.first_name}</h3>
                    <h3 class="text-xl font-bold text-gray-900 text-center mb-4">${employee.last_name}</h3>
                    <h3 class="space-y-0 font-thin text-gray-900 text-base">${employee.role}</h3>
                    <p class="text-red-800 font-thin italic text-center leading-relaxed">${employee.restaurant}</p>
                </div>
                <div class="flex items-center h-16">
                    <div class="bg-gray-800 hover:bg-gray-900 w-full h-16 flex items-center justify-center rounded-bl-2xl">
                        <button class="h-6 w-6 fill-current text-white focus:outline-none" onclick="location.href='tel:${employee.phone}';" value="Ring ${employee.first_name}">
                            <img class="" src="../icons/phone-alt-solid.svg" alt="phone-icon">
                        </button>
                    </div>
                    <div class="bg-gray-800 hover:bg-gray-900 w-full h-16 flex items-center justify-center">
                        <button class="h-6 w-6 fill-current text-white focus:outline-none" id="editEmployeeBtn:${employee.id}">
                            <img class="" src="../icons/pen-solid.svg" alt="edit-icon">
                        </button>
                    </div>
                    <div class="bg-gray-800 hover:bg-gray-900 w-full h-16 flex items-center justify-center rounded-br-2xl">
            
                        <button class="h-6 w-6 fill-current text-white focus:outline-none" type="button" id="deleteBtn:${employee.id}" onclick="toggleModal('modal-id')">
                            <img class="" src="../icons/trash-solid.svg" alt="trash-icon">
                        </button>
                    </div>
                </div>
            </div>
            </div>
        <!--Ansattkort:Edit-->
        <div class="flex justify-center absolute card-back">
            <div class=" w-64">
                <div class="flex flex-col px-5 py-5 items-center h-80 bg-white rounded-t-2xl"> 
                    <label for="firstNameInput:${employee.id}" class="font-bold">Fornavn</label>
                    <input type="text" class="border font-sans text-gray-900 text-center h-10 rounded mb-3" placeholder="${employee.first_name}" id="firstNameInput:${employee.id}">
                    <label for="lastNameInput:${employee.id}"class="font-bold">Etternavn</label>
                    <input type="text" class="border font-sans  text-center h-10 rounded mb-5" placeholder="${employee.last_name}" id="lastNameInput:${employee.id}">
                    <div>
                        <div class="flex flex-col justify-center mb-3">
                            <label for="roleInput:${employee.id}" class="text-center font-bold">Rolle</label>
                            <select class="border h-8 rounded" id="roleInput:${employee.id}">
                                <option value="Kokk">Kokk</option>
                                <option value="Daglig Leder">Daglig Leder</option>
                                <option value="Servitør">Servitør</option>
                            </select>
                        </div>
                        <div class="flex flex-col">
                            <label for="restaurantInput:${employee.id}" class="text-center font-bold">Restaurant</label>
                            <select class="border h-8 rounded" id ="restaurantInput:${employee.id}">
                                <option value="Bystasjonen">Bystasjonen</option>
                                <option value="Lagunen">Lagunen</option>
                                <option value="Straume">Straume</option>
                                <option value="Åsane">Åsane</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row">
                    <div class="bg-gray-800 hover:bg-gray-900 rounded-bl-2xl w-full h-16 text-center flex justify-center content-center">
                        <button class="text-white focus:outline-none" id="cancelEditButton:${employee.id}">
                            Avbryt
                        </button>
                    </div>
                    <div class="bg-gray-800 hover:bg-gray-900 rounded-br-2xl w-full h-16 text-center flex justify-center content-center">
                    <button class="text-white focus:outline-none" id="saveEditButton:${employee.id}">
                        Lagre
                    </button>
                </div>
                </div>
            </div>  
        </div>  
    </div>      
    `;
    }

    function addEmployee () {
        return `
        <div class="fixed h-72 w-80 z-10 top-5 md:top-20 left-2/4 items-center">
            <div class=" bg-white rounded-2xl relative -left-2/4" id="addNewEmployee">
                <form class=" flex flex-col p-8">
                    <label class="text-gray-900 text-center mb-3" for="firstName">Fornavn:</label>
                        <input type="text" id="firstName" name="firstName" placeholder='Skriv inn fornavn' class="border-2 mb-5 h-12 p-2 rounded">
                    <label class="text-gray-900 text-center mb-3" for="lastName">Etternavn:</label>
                        <input type="text" id="lastName" name="lastName" placeholder="Skriv inn etternavn" class="border-2 mb-5 h-12 p-2 rounded">
                    <label class="text-gray-900 text-center mb-3" for="mailAdress">E-postadresse:</label>
                        <input type="text" id="mailAdress" name="mailAdress" placeholder="Skriv inn e-postadresse" class="border-2 mb-5 h-12 p-2 rounded">
                    <label class="text-gray-900 text-center mb-3" for="roles">Rolle: </label>
                        <select class="mb-5 h-12 rounded border-2" id="roles" name="roles">
                            <option value="Kokk">Kokk</option>
                            <option value="Daglig Leder">Daglig Leder</option>
                            <option value="Servitør">Servitør</option>
                        </select>
                    <label class="text-gray-900 text-center mb-3" for="restaurantSelector">Restaurant: </label>
                        <select class="mb-5 h-12 rounded border-2" id="restaurantSelector">
                            <option value="Straume">Straume</option>
                            <option value="Åsane">Åsane</option>
                            <option value="Bystasjonen">Bystasjonen</option>
                            <option value="Lagunen">Lagunen</option>
                        </select>

                        <label class="mb-3" for="inputImage">Legg til Bilde:</label><input class="pl-6" type="file" accept="image/*" id="inputImage">
                </form>
                <div class="flex text-center">
                    <div class="w-full bg-gray-800 hover:bg-gray-900 h-16 rounded-bl-2xl flex items-center justify-evenly ">
                        <button class="text-white focus:outline-none" id="cancelNewEmployeeBtn">
                            Avbryt
                        </button>
                    </div>
                    <div class="w-full bg-gray-800 hover:bg-gray-900 h-16 rounded-br-2xl flex items-center justify-evenly">
                        <button class="text-white focus:outline-none" id="saveNewEmployeeBtn">
                            Lagre
                        </button>
                    </div>
                </div>
            </div>
        </div>
    
    `;
    }


    function saveEmployee(){
        const firstNameElement = document.getElementById("firstName"),
        lastNameElement = document.getElementById("lastName"),
        mailAdressElement = document.getElementById("mailAdress"),
        roleElement = document.getElementById("roles"),
        restaurantElement = document.getElementById("restaurantSelector"),
        imageElement = document.getElementById("inputImage"),
        firstName = firstNameElement.value,
        lastName = lastNameElement.value,
        mail = mailAdressElement.value,
        role = roleElement.value,
        restaurant = restaurantElement.value,
        image = "/custom";
        

        const employee = { "first_name": firstName, "last_name": lastName, "role": role, "restaurant": restaurant, "image": image, "mail": mail };


        if (ValidationModule.validateNewEmployee(employee) == true)
            return employee;
    }

    function clearNewEmployeeFields(){
        const firstNameElement = document.getElementById("firstName"),
        lastNameElement = document.getElementById("lastName"),
        mailAdressElement = document.getElementById("mailAdress"),
        roleElement = document.getElementById("roles"),
        restaurantElement = document.getElementById("restaurantSelector"),
        imageElement = document.getElementById("inputImage");
        firstNameElement.value = "";
        lastNameElement.value = "";
        mailAdressElement.value = "";
        roleElement.value = "Daglig Leder";
        restaurantElement.value = "Straume";
        imageElement.value = null;
    }

    function getByName(data, name){
        return data.filter(employee => employee.last_name.toLowerCase().substring(0, name.length) === name.toLowerCase() || employee.first_name.toLowerCase().substring(0, name.length) === name.toLowerCase())
    }

    
    return { createEmployeeCard, getByName, addEmployee, saveEmployee, clearNewEmployeeFields }
}());

export default EmployeeCardModule;


