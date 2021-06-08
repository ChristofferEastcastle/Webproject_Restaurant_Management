const SortModule = (function(){

    function sortByFirstName(data){
        return data.sort((a, b) => a.first_name.toLowerCase().localeCompare(b.first_name.toLowerCase()));
    }
    
    function sortByLastName(data){
        return data.sort((a, b) => a.last_name.toLowerCase().localeCompare(b.last_name.toLowerCase()));
    }

    function sortByRestaurant(data, type){
        const array = [];
        data.forEach(element => {
            if (element.restaurant === type){
                array.push(element);
            }
        });
        return array;
    }


    return { sortByFirstName, sortByLastName, sortByRestaurant }
}());

export default SortModule;