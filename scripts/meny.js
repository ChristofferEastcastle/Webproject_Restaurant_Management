import HeaderModule from './modules/HeaderModule.js'
import ValidationModule from './modules/ValidationModule.js'

const foodOuputDiv = document.querySelector('#foodOutput'),
clearStatus = ValidationModule.clearStatus,
showStatus = ValidationModule.showStatus;
/* Arrays */

const pizzaArray = [
    {id: 0, name: 'Gyldne Pizza Spesial', ingredients: 'Ost, Sopp, Tomat og Skinke', image: '../images/pizza_1.jpg', allergy:['gluten', 'milk'] },
    {id: 1, name: 'Meat Everywhere', ingredients: 'Bacon, Salami, Biffstrimler, Kylling og Skinke', image: '../images/pizza_2.jpg', allergy: ['gluten', 'milk'] },
    {id: 2, name: 'Våt Drøm', ingredients: 'Scampi, Ost og Laks', image: '../images/pizza_3.jpg', allergy: ['fish'] },
    {id: 3, name: 'Keiko Deluxe', ingredients: 'Spekk, Sopp, Hvitsaus, Rødløk og Laks', image: '../images/pizza_5.jpg', allergy: ['fish', 'milk'] },
];

const drinkArray = [
    {name: 'Cola', image: '../images/drink.jpg', ingredients: 'Leveres av Coca Cola'},
    {name: 'Fanta', image: '../images/drink.jpg', ingredients: 'Leveres av Coca Cola'},
    {name: 'Ananasbrus', image: '../images/drink.jpg',ingredients: 'Leveres av Oscar Syltes Brusfabrikk'}
];

/* Functions */

const printAllergies = (array) => {

    let code = ''

    array.forEach(item => {
       
        code += showAllergies(item);
    
    }); return code
};

const showAllergies = (allergy) => {

    switch (allergy) {
        case 'fish':
            return `<img class="w-8 h-8" src="../icons/fish-solid.svg" alt="fisk">`
        case 'gluten':
            return '<img class="w-8 h-8" src="../icons/bread-slice-solid.svg" alt="gluten">'
        case 'milk':
            return '<img class="w-8 h-8" src="../icons/tint-solid.svg" alt="laktose">'
    };

};

const printFood = (array) => {
    let type = 'pizza'
    
    for (let index = 0; index < array.length; index++) {
        
        foodOuputDiv.innerHTML += `
        <div id="pizzaCard${index}" class="card mb-5">
            
            <div class="lg:h-48 w-full card-front flex flex-col lg:flex-row">
                <img class="h-auto lg:h-48 lg:w-2/5 md:rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none" src="${pizzaArray[index].image}" alt="${pizzaArray[index].name}-pizza">
                <div class="h-48 bg-white p-8 w-full">
                    <h3 class="subtitle text-2xl mb-4">${pizzaArray[index].name}</h3>
                    <p class="mb-5">${pizzaArray[index].ingredients}</p>
                    <div class="flex flex-row">
                        ${printAllergies(pizzaArray[index].allergy)}
                    </div>
                </div>
                <div class="flex flex-row lg:flex-col lg:rounded-r-xl justify-evenly">
                    <div class="h-36 flex flex justify-center items-center bg-gray-800 hover:bg-gray-900 h-24 lg:h-full w-full lg:w-32 rounded-bl-2xl lg:rounded-bl-none lg:rounded-tr-2xl">
                        <button id="pizzaEdit${index}" class="w-8 h-8 lg:w-6 h-6 text-white focus:outline-none"><img src="../icons/pen-solid.svg" alt ="Edit Pizza Icon"></button>
                    </div>
                    <div class="h-46 flex flex justify-center items-center bg-gray-800 hover:bg-gray-900 lg:h-full w-full lg:w-32 rounded-br-2xl lg:rounded-br-2xl">
                        <button id="pizza${index}" class="trash fill-current w-8 h-8 lg:w-6 h-6 text-white focus:outline-none"><img src="../icons/trash-solid.svg" alt ="Delete Pizza Icon"></button>
                    </div>
                </div>
            </div>

            <div class="w-full lg:h-48 card-back absolute top-0 flex flex-col lg:flex-row">
                
                <div class="h-64 lg:w-2/5 lg:h-48  bg-gray-400"></div>
                <div class="h-48 w-full flex flex-col lg:justify-start bg-white p-4">
                   <label class="hidden mb-2" for="${type}Name${index}">Navn</label><input id="${type}Name${index}" type="text" placeholder="Navn" class="p-2 h-10 border-2 p-2 rounded mb-2">
                   <label class="hidden mb-2" for="${type}Ingredients${index}">Ingredienser</label><input id="${type}Ingredients${index}" type="text" placeholder="Ingredienser (separer med mellomrom)" class="p-2 h-10 border-2 rounded mb-3">
                        <fieldset>
                            <legend>Allergier</legend>
                            <label for="editGluten${index}">Gluten <input id="editGluten${index}" name="allergies" class = "bg-gray-200"type="checkbox" value="gluten"></label>
                            <label for="editFish${index}">Fisk <input id="editFish${index}" name="allergies"class = "bg-gray-200" type="checkbox" value="fish"></label>
                            <label for="editMilk${index}">Melk <input id="editMilk${index}" name="allergies" class = "bg-gray-200"type="checkbox" value="milk"></label>
                        </fieldset>
                    
                </div>
                <div class="flex flex-row lg:flex-col lg:rounded-r-xl justify-evenly">
                    <div class="h-36 flex justify-center items-center bg-gray-800 hover:bg-gray-900 lg:h-full w-full rounded-bl-2xl lg:rounded-bl-none lg:rounded-tr-2xl">
                        <button id="${type}SaveButton${index}" class="text-white focus:outline-none">Lagre</button>
                    </div>
                    <div class="h-36 flex justify-center items-center bg-gray-800 hover:bg-gray-900 lg:h-full w-full lg:w-32 rounded-br-2xl lg:rounded-br-2xl">
                        <button id="${type}CancelButton${index}" class="text-white focus:outline-none">Avbryt</button>
                    </div>
                </div>
            </div>
        </div>
        `
    } 
};

const printDrink = (array) => {

    let type = "drink"
    for (let index = 0; index < array.length; index++) {
        
        drinkOutputDiv.innerHTML += `
        <div id="drinkCard${index}" class="card mb-5">
            
            <div class="lg:h-48 w-full card-front flex flex-col lg:flex-row">
                <img class="h-64 lg:h-48 lg:w-2/5 md:rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none" src="${array[index].image}" alt="">
                <div class="h-48 bg-white p-8 w-full">
                    <h3 class="subtitle text-2xl mb-4">${array[index].name}</h3>
                    <p class="mb-5">${array[index].ingredients}</p>
                    <div class="flex flex-row">
                    </div>
                </div>
                <div class="flex flex-row lg:flex-col lg:rounded-r-xl justify-evenly">
                    <div class="h-36 flex flex justify-center items-center bg-gray-800 hover:bg-gray-900 h-24 lg:h-full w-full lg:w-32 rounded-bl-2xl lg:rounded-bl-none lg:rounded-tr-2xl">
                        <button id="drinkEdit${index}" class="w-8 h-8 lg:w-6 h-6 text-white focus:outline-none"><img src="../icons/pen-solid.svg" alt ="Edit Drink Icon"></button>
                    </div>
                    <div class="h-46 flex flex justify-center items-center bg-gray-800 hover:bg-gray-900 lg:h-full w-full lg:w-32 rounded-br-2xl lg:rounded-br-2xl">
                        <button id="drink${index}" class="trash fill-current w-8 h-8 lg:w-6 h-6 text-white focus:outline-none"><img src="../icons/trash-solid.svg" alt ="Delete Drink Icon"></button>
                    </div>
                </div>
            </div>

            <div class="w-full lg:h-48 card-back absolute top-0 flex flex-col lg:flex-row">
                
                <div class="h-64 lg:w-2/5 lg:h-48  bg-gray-400"></div>
                <div class="h-48 w-full flex flex-col lg:justify-start bg-white p-8">
                <label class="hidden mb-2" for="${type}Name${index}">Navn</label><input id="${type}Name${index}" type="text" placeholder="Navn" value ="" class="h-10 border-2 p-2 rounded mb-3">
                <label class="hidden mb-2" for="${type}Ingredients${index}">Ingredienser</label><input id="${type}Ingredients${index}" type="text" placeholder="Ingredienser (separer med mellomrom)" class="p-2 h-10 border-2 rounded mb-5">
                </div>
                <div class="flex flex-row lg:flex-col lg:rounded-r-xl justify-evenly">
                    <div class="h-36 flex justify-center items-center bg-gray-800 hover:bg-gray-900 lg:h-full w-full rounded-bl-2xl lg:rounded-bl-none lg:rounded-tr-2xl">
                        <button id="${type}SaveButton${index}" class="text-white focus:outline-none ">Lagre</button>
                    </div>
                    <div class="h-36 flex justify-center items-center bg-gray-800 hover:bg-gray-900 lg:h-full w-full lg:w-32 rounded-br-2xl lg:rounded-br-2xl">
                        <button id="${type}CancelButton${index}" class="text-white focus:outline-none">Avbryt</button>
                    </div>
                </div>
            </div>
        </div>`
    }
};

const addItem = (type) => {
    
    if (type === 'pizza') {
        let name = ''
        let ingredients = ''
        let allergies = []

        name = document.getElementById(`${type}Name`).value;

        ingredients = formatIngredients(document.getElementById(`${type}Ingredients`).value);
        
        
        if (document.getElementById('gluten').checked) {
            allergies.push(document.getElementById('gluten').value);
        } 
        if (document.getElementById('fish').checked) {
            allergies.push(document.getElementById('fish').value);
        }
        if (document.getElementById('milk').checked) {
            allergies.push(document.getElementById('milk').value);
        }

        const newPizza = {name: `${name}`, ingredients: `${ingredients}`,image: '../images/pizza_3.jpg', allergy: allergies};

        pizzaArray.push(newPizza); 
        foodOuputDiv.innerHTML = '';
        printFood(pizzaArray);
        addDeleteButton(pizzaArray,'pizza');
        addEditButton(pizzaArray, 'pizza');
        
        document.querySelector('#addFormPizza').classList.add('hidden');
        ValidationModule.showStatus('confirm', 'Du har lagt til en ny pizza!')
    }
    else if (type === 'drink') {

    let name = ''
    let ingredients = ''

    name = document.getElementById('drinkName').value;
    ingredients = document.getElementById('drinkIngredients').value;
    
    const newDrink = {name: `${name}`, ingredients: `${ingredients}`, image: '../images/drink.jpg'};

    drinkArray.push(newDrink);
    drinkOutputDiv.innerHTML = '';
    printDrink(drinkArray);
    addDeleteButton(drinkArray, 'drink');
    addEditButton(drinkArray,'drink');

    document.querySelector('#addFormDrink').classList.add('hidden');
    ValidationModule.showStatus('confirm', 'Du har lagt til en ny drikke!')
    }

};

function formatIngredients(ingredients){
    let temp = ingredients.split(' '), string = "";
        
    for (let i = 0; i < temp.length; i++){
        if (temp.length == 1){
            string = temp[i].charAt(0).toUpperCase() + temp[i].slice(1);
            break;
        }

        if (i == temp.length - 1){
            string += " og ";
        }
        else if (i != 0) string += ", ";

        string += temp[i].charAt(0).toUpperCase() + temp[i].slice(1);
    }
    return string;
}

function addEditButton(array, type) {

    for (let i = 0; i < array.length; i++) {
    
        document.querySelector(`#${type}Edit${i}`).addEventListener('click', () => {
    
            document.querySelector(`#${type}Card${i}`).classList.add('flip');

        });        
        document.querySelector(`#${type}CancelButton${i}`).addEventListener('click',() => {

            document.querySelector(`#${type}Card${i}`).classList.remove('flip');
        });

        document.querySelector(`#${type}SaveButton${i}`).addEventListener('click',() => {
            
            editItem(i, type);
            document.querySelector(`#${type}Card${i}`).classList.remove('flip');
        });
    }
};

function editItem (index, type) {
    let id = index;
    let newName = '';
    let newIngredients = '';
    let newAllergies = [];

    newName = document.querySelector(`#${type}Name${index}`).value;

    newIngredients = formatIngredients(document.querySelector(`#${type}Ingredients${index}`).value);

    if (document.getElementById(`editGluten${index}`).checked) {
        newAllergies.push(document.getElementById('gluten').value);
    } 
    if (document.getElementById(`editFish${index}`).checked) {
        newAllergies.push(document.getElementById('fish').value);
    }
    if (document.getElementById(`editMilk${index}`).checked) {
        newAllergies.push(document.getElementById('milk').value);
    };

    if(type === 'pizza') {

    const editPizza = {name: `${newName}`, ingredients: `${newIngredients}`,image: '../images/pizza_3.jpg', allergy: newAllergies};
    
    pizzaArray.splice(id,1,editPizza);
    foodOuputDiv.innerHTML = '';
    printFood(pizzaArray);
    addDeleteButton(pizzaArray,'pizza');
    addEditButton(pizzaArray, 'pizza');
    ValidationModule.showStatus('confirm', `${newName} er lagt til!`)
    
} else if (type === 'drink') {
        const editDrink = {name: `${newName}`, image: '../images/drink.jpg', ingredients: `${newIngredients}`};
        drinkArray.splice(id,1,editDrink);
        drinkOutputDiv.innerHTML = '';
        printDrink(drinkArray);
        addDeleteButton(drinkArray,'drink');
        addEditButton(drinkArray,'drink');
        ValidationModule.showStatus('confirm', `${newName} er lagt til!`)
    }
    
};

function addDeleteButton(array, type) {

    for (let i = 0; i < array.length; i++) {
    
        document.querySelector(`#${type + i}`).addEventListener('click', () => {
    
        deleteItem(i, array, type);    
        });
    }
};


function deleteItem (index, array, type) {
    array.splice(index,1);
    
    if (array === pizzaArray) {
        foodOuputDiv.innerHTML = ''
        printFood(pizzaArray);
        addDeleteButton(pizzaArray,'pizza');
        addEditButton(pizzaArray, 'pizza');
        ValidationModule.showStatus('confirm', `Pizzaen er slettet `)
    
    } else if (array === drinkArray) {
        drinkOutputDiv.innerHTML = ''
        printDrink(array);
        addDeleteButton(drinkArray,'drink');
        addEditButton(drinkArray, 'drink');
        ValidationModule.showStatus('confirm', `Drikken er slettet `)
    };
    
};

function clearInputFields(){
    document.getElementById('pizzaName').value = "";
    document.getElementById('pizzaIngredients').value = "";
    document.getElementById('drinkName').value = "";
    document.getElementById('drinkIngredients').value = "";
    window.defaultStatus = "";
}

/* Event Listeners */

document.querySelector('#inputPizza').addEventListener('click', () =>{
    clearInputFields();
    document.querySelector('#addFormPizza').classList.remove('hidden');
    document.querySelector('#addFormDrink').classList.add('hidden');
});

document.querySelector('#cancelButtonPizza').addEventListener('click', () =>{

    document.querySelector('#addFormPizza').classList.add('hidden');

    clearStatus();
});

document.querySelector('#saveButtonPizza').addEventListener('click', () =>{

    // Guard clauses for returning if you should not add item
    if (document.querySelector('#pizzaIngredients').value === "") {
        showStatus('error', 'Du må skrive inn ingrediensene!');
        return;
    }

    if (document.querySelector('#pizzaName').value === ""){
        showStatus('error', 'Du må skrive inn et navn!');
        return;
    }

    if (document.querySelector('#pizzaName').name === 'invalid') return;
    
    addItem('pizza');
    document.querySelector('#addFormPizza').classList.add('hidden');
});

document.querySelector('#inputDrink').addEventListener('click', () =>{
    clearInputFields();
    document.querySelector('#addFormDrink').classList.remove('hidden');
    document.querySelector('#addFormPizza').classList.add('hidden');
});

document.querySelector('#cancelButtonDrink').addEventListener('click', () =>{

    document.querySelector('#addFormDrink').classList.add('hidden');

    clearStatus();
});

document.querySelector('#saveButtonDrink').addEventListener('click', () =>{
    
    if (document.querySelector('#drinkName').value === ""){
        showStatus('error', "Du må skrive inn et navn");
        return;
    }
    if (document.querySelector('#drinkName').name === 'invalid') return;
    
    addItem('drink');
    document.querySelector('#addFormDrink').classList.add('hidden');

    clearInputFields();
});

const validate = ValidationModule.validateNewMenuItem;

document.getElementById('pizzaName').onkeyup = validate;
document.getElementById('pizzaIngredients').onkeyup = validate;
document.getElementById('drinkName').onkeyup = validate;
document.getElementById('drinkIngredients').onkeyup = validate;



/* Script */

printFood(pizzaArray);
addDeleteButton(pizzaArray, 'pizza');
addEditButton(pizzaArray, 'pizza');


printDrink(drinkArray);
addEditButton(drinkArray, 'drink');
addDeleteButton(drinkArray, 'drink');