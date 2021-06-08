const SalesModule = (function() {

    function formatNumbers(number){
        const newNumber = [];
        number = number.toString(10).split("").map(Number); // Creating array from number
        
        let modCounter = 0;
        for (let i = number.length - 1; i >= 0; i--){
            
            if (modCounter % 3 == 0) newNumber.unshift(" "); // Adding space
            modCounter++;
            newNumber.unshift(number[i]);
        }

        let string = "";
        newNumber.forEach(num => string += num );
        return string;
    }

    return { formatNumbers }
}());
export default SalesModule;