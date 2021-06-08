const FetchDataModule = (function (){

    function getDataFromJSON(){
        const array = [];
        fetch('../../employees.json')
        .then (result => result.json())
        .then((data) => {
            data.forEach(element => array.push(element));
        });
        return array;
    }

    function readURL(input, id){
            
        const reader = new FileReader();
        console.log(id)
        reader.addEventListener("load", () => {
            localStorage.setItem(`inputImage:${id}`, reader.result);
        });

        reader.readAsDataURL(input.files[0]);
    }

    return { getDataFromJSON, readURL }
}());

export default FetchDataModule;