const HeaderModule = (function () {
	document.querySelector('header').innerHTML = `

    <nav class="font-light tracking-wide flex flex-row items-center justify-end flex-wrap bg-red-600 p-3 fixed w-full z-20 top-0">
        <div class="block lg:hidden">
          <button id="nav-toggle" class="text-white text-2xl ml-5 flex items-center rounded hover:text-red-800 transition duration-100 ease-in focus:outline-none">
            <img id="hamburger" class="h-6" src="../icons/bars-solid.svg" alt="Hamburger Meny Icon">
          </button>
        </div>
        
        <div id="nav-content" class="w-full lg:items-center hidden lg:block" >
        <ul class="list-reset lg:flex justify-between items-center page-margin">
            <li class="pt-8 pb-3 lg:py-0 hover:border-b-2 border-red-800">
              <a id="employees.html" class="text-white uppercase pb-1 border-b-2 border-red-600 hover:border-red-200 transition duration-200 ease-in lg:pb-2" href="/public/employees.html">ansatte</a>
            </li>
            <li class="py-3 lg:py-0">
              <a id="meny.html" class="text-white uppercase pb-1 border-b-2 border-red-600 active:border-red-200 hover:border-red-200 transition duration-200 ease-in lg:pb-2" href="/public/meny.html">meny</a>
            </li>
            <li>
              <a href="index.html"><img src="/images/pizza.png" alt="Gyldne Pizza Logo" class="hidden h-12 mx-auto lg:block"></a> 
            </li>
            <li class="py-3 lg:py-0">
              <a id="restaurants.html" class="text-white uppercase pb-1 border-b-2 border-red-600 hover:border-red-200 transition duration-200 ease-in lg:pb-2" href="/public/restaurants.html">restaurant</a>
            </li>
            <li class="py-3 lg:py-0">
              <a id="sales.html" class="mb-12 text-white uppercase pb-1 border-b-2 border-red-600 hover:border-red-200 transition duration-200 ease-in lg:pb-2" href="/public/sales.html">salg</a>
            </li>
          </ul>
        </div>
      </nav>
  `;

  const path = window.location.pathname.split('/'),
  location = path[path.length - 1],
  id = document.getElementById(location);

  if (id){
    id.classList.remove('border-red-600');    
    id.classList.add('border-white-200');
  }

	return {};
})();

document.getElementById('nav-toggle').onclick = function () {

  const el = document.getElementById('hamburger');
  if (el.getAttribute('src') === '../icons/times-solid.svg') el.setAttribute('src','../icons/bars-solid.svg');
  else el.setAttribute('src','../icons/times-solid.svg');

  document.getElementById('nav-content').classList.toggle('hidden');
  

};


export default HeaderModule;
