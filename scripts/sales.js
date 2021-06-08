import HeaderModule from './modules/HeaderModule.js';
import SalesModule from './modules/SalesModule.js';
import SortModule from './modules/SortModule.js';
//All needed arrays and containers for all economy pages
const xMonths_large = ["Jan", "Feb", "Mars", "April", "Mai","Juni", "Juli", "Aug", "Sept", "Okt", "Nov", "Des"];
const xMonths_small = ["April", "Mai", "Juni", "Juli", "Aug", "Sept"];
const xCostMain = ["Varekostnad", "Lønn", "Markedsføring", "Utkjøringsutgifter", "Leiekostnad"];

const yCostMainAccumulated = [450000, 650000, 220000, 60000, 480000];
const ySales_main = [500, 500, 800, 300, 200, 400, 700, 800, 100, 1000, 400, 500];
const yCost_main = [360, 350, 450, 180, 150, 300, 360, 300, 120, 800, 350, 380];
const yResult_main = getResultMicro(ySales_main, yCost_main);
const ySales_åsane = [300, 100, 200, 500, 800, 1000];
const yCost_åsane = [220, 130, 180, 420, 480, 630];
const yResult_åsane = getResultMicro(ySales_åsane, yCost_åsane);
const ySales_lagunen = [400, 200, 100, 500, 600, 800];
const yCost_lagunen = [290, 120, 140, 390, 430, 580];
const yResult_lagunen = getResultMicro(ySales_lagunen, yCost_lagunen);
const ySales_sartor = [300, 400, 500, 400, 1000, 100];
const yCost_sartor = [180, 280, 360, 290, 820, 180];
const yResult_sartor = getResultMicro(ySales_sartor, yCost_sartor);
const ySales_bystasjonen = [200, 300, 500, 400, 1000, 200];
const yCost_bystasjonen = [120, 100, 330, 280, 450, 220];
const yResult_bystasjonen = getResultMicro(ySales_bystasjonen, yCost_bystasjonen);
const ytotalResult = getResultMacro(yResult_åsane, yResult_lagunen, yResult_sartor, yResult_bystasjonen);
const totalRevenueYear = revenueYear(ytotalResult);
const averageProfit = [126, 200, 436, 89, 536, 126, 333, 200, 531];

const barColors = "#C14C32";
const pieColors = ["#60A5FA", "#FBBF24", "#F87171", "#34D399", "#A78BFA"];
const resturantSection = document.getElementById("resturantSection");
const prosentResultLastMonth = document.getElementById("prosentResultLastMonth");
const materialCost = document.getElementById("materialCost");
const personnelExpenses = document.getElementById("personnelExpenses");
const marketing = document.getElementById("marketing");
const drivingExpenses = document.getElementById("drivingExpenses");
const rent = document.getElementById("rent");
const totalRevenuYearHead = document.getElementById("totalRevenuYearHead");
const overUnderRevenue = document.getElementById("overUnderRevenue");
var revenueDecider = true;
let revenueLastYear = 5319932;
const revenueProsentage = document.getElementById("revenueProsentage");
const mostSoldPizzaElement = document.getElementById("mostSoldPizzaElement");
const averageProfitElement = document.getElementById("averageProfitElement");

const pizzaSalesPerDay = [{
    name: "Meat Everywhere",
    amountSold: 319
},
{
    name: "Keiko Deluxe",
    amountSold: 346
},
{
    name: "Gyldne Pizza Spesial",
    amountSold: 343
},
{
    name: "Våt Drøm",
    amountSold: 69
}

]

function getResultMicro(salesArray, costArray) {
    let resultArray = [];
    for (let i = 0; i < salesArray.length; i++) {
        resultArray.push(salesArray[i] - costArray[i]);
    }
    return resultArray;
};
function getResultMacro(resultÅsane, resultLagunen, resultSartor, resultBystasjonen) {
    let totalResultArray = [];
    for (let i = 0; i < resultÅsane.length; i++) {
        totalResultArray.push(resultÅsane[i] + resultLagunen[i] + resultSartor[i] + resultBystasjonen[i]);
        
    }
    totalResultArray.push(348, 459, -90, 190, 417, 86)
    return totalResultArray;
}


const resturants = [{
    name: "Bystasjonen",
    canvas_id: "result-bystasjonen"
},
{
    name: "Lagunen",
    canvas_id: "result-lagunen"
},
{
    name: "Straume",
    canvas_id: "result-sartor"
},
{
    name: "Åsane",
    canvas_id: "result-åsane"
}];
// Function for building small graf cards
let htmlTxt = "";
resturants.forEach(resturants => {
    htmlTxt += `<div class="bg-white px-6 rounded-lg shadow-md mb-8 w-80 md:w-96">
                <p class="text-red-500 text-center py-6">${resturants.name}</p>
                <canvas id="${resturants.canvas_id}" class"""></canvas>
                <p class="uppercase text-center py-6">Totalresultat</p>
                </div>`
});

resturantSection.innerHTML = htmlTxt;
// Graf builders for result page
new Chart("result-chart-main", {
    type: "bar",
    data: {
        labels: xMonths_large,
        datasets: [{
            backgroundColor: barColors,
            data: ytotalResult
        }]
    },
    options: {
        legend: {display: false},
        title: {display: false},
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

new Chart("result-åsane", {
    type: "bar",
    data: {
        labels: xMonths_small,
        datasets: [{
            backgroundColor: barColors,
            data: yResult_åsane
        }]
    },
    options: {
        legend: {display: false},
        title: {display: false},
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
new Chart("result-lagunen", {
    type: "bar",
    data: {
        labels: xMonths_small,
        datasets: [{
            backgroundColor: barColors,
            data: yResult_lagunen
        }]
    },
    options: {
        legend: {display: false},
        title: {display: false},
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

new Chart("result-sartor", {
    type: "bar",
    data: {
        labels: xMonths_small,
        datasets: [{
            backgroundColor: barColors,
            data: yResult_sartor
        }]
    },
    options: {
        legend: {display: false},
        title: {display: false},
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
new Chart("result-bystasjonen", {
    type: "bar",
    data: {
        labels: xMonths_small,
        datasets: [{
            backgroundColor: barColors,
            data: yResult_bystasjonen
        }]
    },
    options: {
        legend: {display: false},
        title: {display: false},
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
//Sales chart
new Chart("salesChartMain", {
    type: "bar",
    data: {
        labels: xMonths_large,
        datasets: [{
            backgroundColor: barColors,
            data: ySales_main
        }]
    },
    options: {
        legend: {display: false},
        title: {display: false},
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
new Chart("costChart", {
    type: "pie",
    data: {
      labels: xCostMain,
      datasets: [{
        backgroundColor: pieColors,
        data: yCostMainAccumulated,
        display: false
      }]
    },
    options: {
      title: {
        display: true,
        text: "Kostnadsfordeling:"
      },
      animation: {
        animationScale: true,
        animationRotate: true
      },
      legend: {
          display: false
      }
      
    }
  });

//Inner html of prosent number top right at result page.

prosentResultLastMonth.innerHTML = 
`<p class="pr-3">${prosentRevenueTotal(ySales_main[ySales_main.length-1], yCost_main[yCost_main.length-1], ySales_main[ySales_main.length-2], yCost_main[yCost_main.length-2])}%</p>
<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up" class=" w-6 svg-inline--fa fa-arrow-up fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
<path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path></svg>`;

//function for calculating the previous month result versious the month before. The Result will be displayed in red if negative and green if positive
function prosentRevenueTotal(firstMonthSales, firstMonthCost, secondMonthSales, secondMonthCost) {
    var prosentResult = ((((secondMonthSales - secondMonthCost)/(firstMonthSales-firstMonthCost)))*100).toFixed(1);
    if(prosentResult > 0) {
        document.getElementById("prosentResultLastMonth").classList.add("text-green-400"); 
    }
    else if(prosentResult < 0){
        document.getElementById("prosentResultLastMonth").classList.add("text-red-400");
    }
    return prosentResult
};

document.getElementById('salesLink').addEventListener("click", () => swapPages('salesLink'));
document.getElementById('costsLink').addEventListener("click", () => swapPages('costsLink'));
document.getElementById('resultsLink').addEventListener("click", () => swapPages('resultsLink'));

function swapPages(id) {
    let salesLink = document.getElementById('salesLink'),
    costsLink = document.getElementById('costsLink'),
    resultsLink = document.getElementById('resultsLink'),
    salesPage = document.getElementById('salesContent'),
    costsPage = document.getElementById('costsContent'),
    resultsPage = document.getElementById('resultsContent');
    
    
    switch (id) {
        case 'salesLink': {
            // Remove border from other links
            swapClasses(costsLink);
            swapClasses(resultsLink);

            salesPage.classList.remove('hidden');
            salesLink.classList.add('border-b-2','border-red-400');
            costsPage.classList.add('hidden');
            resultsPage.classList.add('hidden');
        }
            break;  
        case 'costsLink': {
            swapClasses(salesLink);
            swapClasses(resultsLink);
            costsLink.classList.add('border-b-2','border-red-400');
            salesPage.classList.add('hidden');
            costsPage.classList.remove('hidden');
            resultsPage.classList.add('hidden');
        }
            break;
        case 'resultsLink': {
            swapClasses(salesLink);
            swapClasses(costsLink);
            resultsLink.classList.add('border-b-2','border-red-400');
            salesPage.classList.add('hidden');
            costsPage.classList.add('hidden');
            resultsPage.classList.remove('hidden');
        }
            break;
    }
};

function swapClasses(id) {
    id.classList.remove('border-b-2','border-red-400');
    id.classList.add('menu-animation');
}

//Function for priting out cost at cost page.
function printCostMenu(costArrayDevided) {
    materialCost.innerHTML = `Varekostnad: ${SalesModule.formatNumbers(costArrayDevided[0])}Kr`;
    personnelExpenses.innerHTML = `Lønn: ${SalesModule.formatNumbers(costArrayDevided[1])}Kr`;
    marketing.innerHTML = `Markedsføring: ${SalesModule.formatNumbers(costArrayDevided[2])}Kr`;
    drivingExpenses.innerHTML = `Utkjøringskostnad: ${SalesModule.formatNumbers(costArrayDevided[3])}Kr`;
    rent.innerHTML = `Leiekostnad: ${SalesModule.formatNumbers(costArrayDevided[4])}Kr`;
}
printCostMenu(yCostMainAccumulated);

function revenueYear(revenueArray) {
    let totalRevenue = 0;   
    revenueArray.forEach(month => {
        totalRevenue += month;
    });
    if(totalRevenue > 0) {
        revenueDecider = false; 
    }
    return totalRevenue * 1000;
}
function positivNegativResult() {
    if(revenueDecider) {
        overUnderRevenue.innerHTML = `I overskudd i år`;
    }
    else{
        overUnderRevenue.innerHTML = `I underskudd i år`
    };
}
positivNegativResult()
totalRevenuYearHead.innerHTML = `${SalesModule.formatNumbers(totalRevenueYear)} Kr`;


function revenueProsentageYear(thisYear, lastYear) {
    let revenueProsentageLet = Math.trunc(((thisYear/lastYear)-1)*100);
    if(revenueProsentageLet > 0 ) {
        revenueProsentage.innerHTML = `<h1 class="text-3xl font-semibold text-green-600">+${revenueProsentageLet}%</h1>
                                        <p id="revenueProsentageYear" class="text">Økning i fortjeneste fra i fjor</p>`
    }
    else {
        revenueProsentage.innerHTML = `<h1 class="text-3xl font-semibold text-red-600">${revenueProsentageLet}%</h1>
        <p id="revenueProsentageYear" class="text">Nedgang i fortjeneste fra i fjor</p>`
    }
};
revenueProsentageYear(totalRevenueYear, revenueLastYear)

function findBestPizza(pizzaSalesArray) {
    let mostSoldName = "";
    let mostSoldPizza = 0;
    for (let i = 0; i < pizzaSalesArray.length; i++) {
        if(pizzaSalesArray[i].amountSold > mostSoldPizza) {
            mostSoldPizza = pizzaSalesArray[i].amountSold;
            mostSoldName = pizzaSalesArray[i].name;
        }
        
    }
    mostSoldPizzaElement.innerHTML = ` <h1 class="text-3xl font-semibold">${mostSoldName}</h1>
                                        <p class="text">Månedens mest solgte pizza (${mostSoldPizza})</p>`

}
findBestPizza(pizzaSalesPerDay);

function getAverageOrder(orderArray) {
    let sum = 0;
    orderArray.forEach(order => {
        sum += order;
    });
    let averageOrderProfit = Math.trunc(sum/orderArray.length);
    averageProfitElement.innerHTML = `<h1 class="text-3xl font-semibold">${averageOrderProfit} kr</h1>
                                        <p class="text">Snittfortjeneste per bestilling</p>`
    
}
getAverageOrder(averageProfit);


